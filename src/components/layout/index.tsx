import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { css, StyleSheet } from 'aphrodite';

const Layout: React.FC<props> = props => {
	return (
		<div className={css(styles.container)}>
			<Header />
			<Content>{props.children}</Content>
			<Footer />
		</div>
	);
};

export default Layout;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
});

interface props {
	children: React.ReactNode;
}
