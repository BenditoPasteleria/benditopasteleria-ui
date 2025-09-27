import type { MetadataRoute } from 'next';
import { environment } from '@/config/environment';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: environment.baseUrl,
			priority: 1,
		},
	];
}
