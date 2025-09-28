interface SearchBarProps {
	valor: string;
	onCambio: (valor: string) => void;
	placeholder?: string;
}

const SearchBar = ({
	valor,
	onCambio,
	placeholder = 'Buscar productos...',
}: SearchBarProps) => {
	return (
		<div className="relative mb-6">
			<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
				<svg
					className="h-5 w-5 text-bendito-text/50"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>

			<input
				type="text"
				value={valor}
				onChange={(e) => onCambio(e.target.value)}
				placeholder={placeholder}
				className="w-full pl-10 pr-4 py-3 border border-bendito-light rounded-lg focus:ring-2 focus:ring-bendito-primary focus:border-bendito-primary transition-all duration-200 bg-white/90 backdrop-blur-sm"
			/>

			{valor && (
				<button
					onClick={() => onCambio('')}
					className="absolute inset-y-0 right-0 pr-3 flex items-center text-bendito-text/50 hover:text-bendito-text transition-colors"
				>
					<svg
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default SearchBar;
