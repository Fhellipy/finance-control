interface IconTypeProps {
	width?: number | string;
	height?: number | string;
	color?: string;
	className?: string;
}

export type IconType = (props: IconTypeProps) => JSX.Element;
