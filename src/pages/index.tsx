import Body from 'components/search/Body';
import Header from 'components/search/Header';
import type { NextPage } from 'next';
import { css, StyleSheet } from 'aphrodite';

const Search: NextPage = () => {
	return (
		<article className={css(styles.container)}>
			<Header />
			<Body />
		</article>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
});

export default Search;
