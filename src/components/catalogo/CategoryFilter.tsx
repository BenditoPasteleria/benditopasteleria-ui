import { useParams } from 'next/navigation';
import { getMessages } from '@/messages';
import { Categoria } from '@/types/catalogo';
import { getTranslatedText, type Locale } from '@/lib/translations';

interface CategoryFilterProps {
	categorias: Categoria[];
	categoriaActiva: string | null;
	onCategoriaChange: (categoriaId: string | null) => void;
}

const CategoryFilter = ({
	categorias,
	categoriaActiva,
	onCategoriaChange,
}: CategoryFilterProps) => {
	const params = useParams<{ lang: string }>();
	const lang = (params?.lang || 'es') as Locale;
	const t = getMessages(lang);
	return (
		<div className="mb-4 sm:mb-8">
			<h3 className="text-base sm:text-lg font-semibold text-bendito-text mb-3 sm:mb-4 font-display">
				{t.catalog.categories}
			</h3>

			<div className="flex flex-wrap gap-2 sm:gap-3">
				{/* Botón "Todos" */}
				<button
					onClick={() => onCategoriaChange(null)}
					className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
						categoriaActiva === null
							? 'bg-bendito-primary text-bendito-secondary shadow-lg'
							: 'bg-white text-bendito-text hover:bg-bendito-light border border-bendito-light'
					}`}
				>
					{t.catalog.allCategories}
				</button>

				{/* Botones de categorías */}
				{categorias.map((categoria) => (
					<button
						key={categoria.id}
						onClick={() => onCategoriaChange(categoria.id)}
						className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
							categoriaActiva === categoria.id
								? 'bg-bendito-primary text-bendito-secondary shadow-lg'
								: 'bg-white text-bendito-text hover:bg-bendito-light border border-bendito-light'
						}`}
					>
						{categoria.icono} {getTranslatedText(categoria.nombre, lang)}
					</button>
				))}
			</div>

			{/* Descripción de la categoría activa - Solo en desktop */}
			{categoriaActiva && (
				<div className="hidden sm:block mt-4 p-4 bg-bendito-light rounded-lg">
					<p className="text-sm text-bendito-text/80">
						{getTranslatedText(
							categorias.find((c) => c.id === categoriaActiva)?.descripcion || {
								es: '',
								ca: '',
								en: '',
							},
							lang,
						)}
					</p>
				</div>
			)}
		</div>
	);
};

export default CategoryFilter;
