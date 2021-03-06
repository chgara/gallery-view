import Input from './Input';
import useNFTs from 'hooks/useNFTs';
import { css, StyleSheet } from 'aphrodite';
import { useState } from 'react';
import Images from './Images';

const SearchBody: React.FC<Iprops> = () => {
	const defaultValue = '0x4B8619890fa9C3cF11C497961eB4b970D440127F';
	// const defaultValue = '0x18031Cdf42654910703984e18F172316BC7aE0f4';
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
