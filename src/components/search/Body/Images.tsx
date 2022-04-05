import { NFT } from 'utils/types';
import theme from 'utils/themes';
import Image from 'next/image';
import { css, StyleSheet } from 'aphrodite';
import NetflixLoader from 'components/loaders/collectionLoader';

const SearchBodyImages: React.FC<Iprops> = props => {
	const { loading, nfts } = props;

	return (
		<article className={css(styles.container)}>
			{loading ? (
				<NetflixLoader />
			) : (
				<div className={css(styles.nfts)}>
					<h2 className={css(styles.h2)}>Owned Items by</h2>
					{nfts?.length && nfts.length === 0 ? (
						<div className={css(styles.noResults)}>
							<p>No results found</p>
						</div>
					) : (
						<ul className={css(styles.grid)}>
							{nfts?.map &&
								nfts.map((nft: NFT, id) => (
									<li key={id}>
										<Image
											src={
												'https://res.cloudinary.com/demo/image/fetch/' +
												nft.image
											}
											objectFit='cover'
											layout='fill'
											alt={nft.name}
											placeholder='blur'
											blurDataURL='/blur.jpg'
											quality={20}
										/>
										<p
											className={css(
												styles.gridP
											)}
										>
											{nft.name}
										</p>
									</li>
								))}
						</ul>
					)}
				</div>
			)}
		</article>
	);
};
interface Iprops {
	loading: boolean;
	setLoading: (loading: boolean) => void;
	nfts: NFT[];
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: '2em',
		...theme.positioning.center,
	},
	nfts: {
		width: '100%',
		...theme.positioning.center,
		flexWrap: 'wrap',
	},
	h2: {
		width: '100%',
		textAlign: 'center',
		display: 'block',
		marginBottom: theme.spacing.normal,
	},

	noResults: {
		width: '100%',
		textAlign: 'center',
		display: 'block',
	},

	grid: {
		width: '70%',
		display: 'grid',
		//Grid of 3*x
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridAutoRows: 'minmax(400px, auto)',
		gridGap: '1em',
		listStyle: 'none',
	},
	gridP: {
		padding: theme.spacing.smaller,
		backgroundColor: theme.colors.primary,
	},
});

export default SearchBodyImages;
