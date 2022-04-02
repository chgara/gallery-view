import { NFT } from 'utils/types';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { apiKey, apiUrl } from 'utils/config';

export default async function handler(req, res) {
	const { address } = req.query;
	const reg = /^0x[a-fA-F0-9]{40}$/;
	const nfts: NFT[] = [];

	// Should be a valid address
	if (!reg.test(address)) {
		res.status(200).json({
			success: false,
			message: 'Invalid address',
			data: nfts,
		});
	}

	const web3 = createAlchemyWeb3(`${apiUrl}${apiKey}`);
	const results = await web3.alchemy.getNfts({
		owner: address,
	});
	for (const result of results.ownedNfts) {
		if (result?.metadata?.image) {
			// Image start with ipfs://?
			if (result?.metadata?.image.startsWith('ipfs://')) {
				result.metadata.image = result.metadata.image.replace(
					'ipfs://',
					'https://ipfs.io/ipfs/'
				);
			}
			nfts.push({
				name: result?.metadata?.name || '',
				image: result?.metadata?.image || '',
				description: result?.metadata?.description || '',
			});
		}
	}
	res.status(200).json({
		success: true,
		message: '',
		data: nfts,
	});
}
