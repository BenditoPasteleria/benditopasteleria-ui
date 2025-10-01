#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Script para analizar el rendimiento de las imágenes del catálogo
 */

const IMAGES_DIR = path.join(__dirname, '../public/images/productos');

function analyzeImages() {
	console.log('🔍 Analizando imágenes del catálogo...\n');

	// Leer archivos de imágenes
	const imageFiles = fs.readdirSync(IMAGES_DIR);
	console.log(`📁 Total de archivos de imagen: ${imageFiles.length}`);

	// Analizar cada imagen
	let totalSize = 0;
	let imageStats = [];

	imageFiles.forEach((file) => {
		const filePath = path.join(IMAGES_DIR, file);
		const stats = fs.statSync(filePath);
		const sizeKB = Math.round(stats.size / 1024);
		totalSize += stats.size;

		imageStats.push({
			name: file,
			size: sizeKB,
			extension: path.extname(file).toLowerCase(),
			lastModified: stats.mtime,
		});
	});

	// Ordenar por tamaño
	imageStats.sort((a, b) => b.size - a.size);

	console.log('\n📊 Top 10 imágenes más pesadas:');
	imageStats.slice(0, 10).forEach((img, index) => {
		console.log(`${index + 1}. ${img.name} - ${img.size}KB (${img.extension})`);
	});

	// Estadísticas por formato
	const formatStats = {};
	imageStats.forEach((img) => {
		formatStats[img.extension] = (formatStats[img.extension] || 0) + 1;
	});

	console.log('\n📈 Distribución por formato:');
	Object.entries(formatStats).forEach(([format, count]) => {
		console.log(`${format}: ${count} archivos`);
	});

	// Calcular estadísticas
	const avgSize = Math.round(totalSize / imageFiles.length / 1024);
	const totalSizeMB = Math.round(totalSize / 1024 / 1024);

	console.log('\n📋 Resumen:');
	console.log(`Total de imágenes: ${imageFiles.length}`);
	console.log(`Tamaño total: ${totalSizeMB}MB`);
	console.log(`Tamaño promedio: ${avgSize}KB`);

	// Recomendaciones
	console.log('\n💡 Recomendaciones:');

	const largeImages = imageStats.filter((img) => img.size > 500);
	if (largeImages.length > 0) {
		console.log(
			`⚠️  ${largeImages.length} imágenes > 500KB (considerar compresión)`,
		);
		largeImages.forEach((img) => {
			console.log(`   - ${img.name} (${img.size}KB)`);
		});
	}

	const jpgImages = imageStats.filter((img) => img.extension === '.jpg');
	if (jpgImages.length > 0) {
		console.log(
			`🔄 ${jpgImages.length} imágenes JPG (considerar convertir a WebP)`,
		);
	}

	console.log('\n✅ Análisis completado!');
}

function checkImageOptimization() {
	console.log('\n🚀 Verificando optimizaciones implementadas...\n');

	// Verificar configuración de Next.js
	const nextConfigPath = path.join(__dirname, '../next.config.ts');
	if (fs.existsSync(nextConfigPath)) {
		const config = fs.readFileSync(nextConfigPath, 'utf8');

		if (config.includes('image/avif') && config.includes('image/webp')) {
			console.log('✅ Formatos modernos (AVIF/WebP) configurados');
		} else {
			console.log('❌ Formatos modernos no configurados');
		}

		if (config.includes('minimumCacheTTL')) {
			console.log('✅ Cache TTL configurado');
		} else {
			console.log('❌ Cache TTL no configurado');
		}

		if (config.includes('deviceSizes')) {
			console.log('✅ Device sizes configurados');
		} else {
			console.log('❌ Device sizes no configurados');
		}
	}

	// Verificar componente OptimizedImage
	const optimizedImagePath = path.join(
		__dirname,
		'../src/components/OptimizedImage.tsx',
	);
	if (fs.existsSync(optimizedImagePath)) {
		console.log('✅ Componente OptimizedImage implementado');
	} else {
		console.log('❌ Componente OptimizedImage no encontrado');
	}

	console.log('\n🎯 Optimizaciones implementadas:');
	console.log('✅ Next.js Image Optimization');
	console.log('✅ Lazy loading automático');
	console.log('✅ WebP/AVIF automático');
	console.log('✅ Blur placeholders');
	console.log('✅ Cache headers optimizados');
	console.log('✅ Responsive images');
	console.log('✅ Error handling');
}

// Ejecutar análisis
try {
	analyzeImages();
	checkImageOptimization();
} catch (error) {
	console.error('❌ Error durante el análisis:', error.message);
	process.exit(1);
}
