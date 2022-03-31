const Content: React.FC<Iprops> = props => {
	return <main>{props.children}</main>;
};
export default Content;

interface Iprops {
	children: React.ReactNode;
}
