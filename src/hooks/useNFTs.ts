import axios from 'axios';
import { useEffect, useState } from 'react';
import { NFT } from 'utils/types';

const useNFTs = (address: string): [NFT[], boolean] => {
	const [nfts, setNfts] = useState<NFT[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(
					`/api/nfts/${address}`
				);
				if (result.data?.success) {
					setNfts(result.data.data);
				}
				setLoading(false);
			} catch (error) {
				// console.log(error);
				setLoading(false);
				setNfts([]);
			}
		};
		fetchData();
	}, [address]);

	return [nfts, loading];
};
export default useNFTs;
