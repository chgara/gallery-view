import { NFT } from 'utils/types';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { apiKey, apiUrl } from 'utils/config';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> {
	const { address } = req.query;
	const reg = /^0x[a-fA-F0-9]{40}$/;
	const nfts: NFT[] = [];

	if (typeof address !== 'string' || !reg.test(address)) {
		res.status(200).json({
			success: false,
			message: 'Invalid address',
			data: nfts,
		});
	}

	const web3 = createAlchemyWeb3(`${apiUrl}${apiKey}`);
	const results = await web3.alchemy.getNfts({
		owner: typeof address === 'string' ? address : address[0],
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
