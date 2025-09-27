import type { MetadataRoute } from 'next';
import { environment } from '@/config/environment';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${environment.baseUrl}/sitemap.xml`,
	};
}
