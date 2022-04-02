import { useState } from 'react';
import { css, StyleSheet } from 'aphrodite';
import theme from 'utils/themes';

const SearchBodyInput: React.FC<Iprops> = props => {
	const [value, setValue] = useState(props.defaultValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.setAddress(value);
	};

	const onClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		props.setAddress(value);
	};

	return (
		<article className={css(styles.container)}>
			<form
				onSubmit={handleSubmit}
				className={css(styles.form)}
			>
				<input
					type='search'
					placeholder='Enter an address'
					value={value}
					onChange={handleChange}
					className={css(styles.input)}
				/>
				<button
					type='submit'
					className={css(styles.button)}
					onClick={onClick}
				>
					🔍
				</button>
			</form>
		</article>
	);
};
interface Iprops {
	defaultValue: string;
	setAddress: (address: string) => void;
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	title: {
		width: '100%',
		textAlign: 'center',
		fontWeight: theme.fonts.weight.normal,
		fontSize: theme.fonts.size.medium,
		padding: theme.spacing.smaller,
	},

	form: {
		width: '100%',
		...theme.positioning.center,
		marginBottom: theme.spacing.normal,
	},

	input: {
		width: '50%',
		height: theme.spacing.medium,
		border: `3px solid ${theme.colors.fourth}`,
		borderRadius: '0.6em',
		fontSize: theme.fonts.size.small,
		fontWeight: theme.fonts.weight.normal,
		textAlign: 'center',
	},
	button: {
		height: '1.5em',
		borderRadius: '0.2em',
		marginLeft: '0.2em',
		fontSize: theme.fonts.size.medium,
		backgroundColor: theme.colors.tertiary,
	},
});

export default SearchBodyInput;
