import ContentLoader from 'react-content-loader';

const NetflixLoader: React.FC<Iprops> = props => {
	// const { rows, columns, coverHeight, coverWidth, padding, speed } =
	// 	props;

	// Hardcoded values
	const rows = 1;
	const columns = 3;
	const coverHeight = 500;
	const coverWidth = 500;
	const padding = 20;
	const speed = 1;
	const titleHeight = 60;

	const coverHeightWithPadding = coverHeight + padding;
	const coverWidthWithPadding = coverWidth + padding;
	const initial = 90;
	const covers = Array(columns * rows).fill(1);

	return (
		<ContentLoader
			speed={speed}
			width={columns * coverWidthWithPadding}
			height={rows * coverHeightWithPadding}
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='0'
				ry='0'
				width={columns * coverWidthWithPadding - padding}
				height={titleHeight}
			/>

			{covers.map((g, i) => {
				const vy =
					Math.floor(i / columns) * coverHeightWithPadding +
					initial;
				const vx =
					(i * coverWidthWithPadding) %
					(columns * coverWidthWithPadding);
				return (
					<rect
						key={i}
						x={vx}
						y={vy}
						rx='0'
						ry='0'
						width={coverWidth}
						height={coverHeight}
					/>
				);
			})}
		</ContentLoader>
	);
};

interface Iprops {
	rows?: number;
	columns?: number;
	coverHeight?: number;
	coverWidth?: number;
	padding?: number;
	speed?: number;
}

export default NetflixLoader;
