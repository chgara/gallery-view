import Input from './Input';
import useNFTs from 'hooks/useNFTs';
import { css, StyleSheet } from 'aphrodite';
import { useState } from 'react';
import Images from './Images';

const SearchBody: React.FC<Iprops> = () => {
	const defaultValue = '0x2ceF1dB9E3C0f323eA6350D6A25c777aeC15E457';
	const [address, setAddress] = useState(defaultValue);
	const [isImageLoading, setIsImageLoading] = useState(true);
	const [nfts, loading] = useNFTs(address);
	return (
		<section className={css(styles.body)}>
			<Input
				defaultValue={defaultValue}
				setAddress={setAddress}
			/>
			<Images
				loading={loading && isImageLoading}
				setLoading={setIsImageLoading}
				nfts={nfts}
			/>
		</section>
	);
};
interface Iprops {}

const styles = StyleSheet.create({
	body: {
		width: '100%',
	},
});

export default SearchBody;
