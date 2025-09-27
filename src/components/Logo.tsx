import Image from 'next/image';

interface LogoProps {
	className?: string;
	width?: number;
	height?: number;
	variant?: 'full' | 'minimal';
	enableHover?: boolean; // Si debe rotar al hacer hover
}

const Logo = ({
	className = '',
	width = 200,
	height = 60,
	variant = 'full',
	enableHover = true,
}: LogoProps) => {
	// Tamaños recomendados por defecto según el variant
	const defaultSizes = {
		full: { width: 200, height: 60 },
		minimal: { width: 120, height: 120 },
	};

	const finalWidth = width || defaultSizes[variant].width;
	const finalHeight = height || defaultSizes[variant].height;
	const logoSrc =
		variant === 'minimal' ? '/logo-bendito-minimal.svg' : '/logo-bendito.svg';

	const hoverClass = enableHover ? 'hover:rotate-0' : '';

	return (
		<Image
			src={logoSrc}
			alt="Bendito Pastelería"
			width={finalWidth}
			height={finalHeight}
			className={`${className} transform transition-transform duration-300 ${hoverClass}`}
			priority
		/>
	);
};

export default Logo;
