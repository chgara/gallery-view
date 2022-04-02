import { css, StyleSheet } from 'aphrodite';
import theme from 'utils/themes';

const SearchHeader: React.FC<Iprops> = () => {
	return (
		<header className={css(styles.header)}>
			<h1>Search what people owns</h1>
		</header>
	);
};
interface Iprops {}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		padding: theme.spacing.normal,
		textTransform: 'uppercase',
		...theme.positioning.center,
	},
});

export default SearchHeader;
