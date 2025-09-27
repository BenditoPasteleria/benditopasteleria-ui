import { Metadata } from 'next';
import { environment } from './environment';

export const staticMetadata: Metadata = {
	metadataBase: new URL(environment.baseUrl),
	title: {
		template: '%s | GUP Tech - Digital solutions tailored to your vision',
		default: 'GUP Tech - Digital solutions tailored to your vision',
	},
	description:
		'At GUP Tech we offer a range of specialized services designed to empower SMEs.',
	twitter: {
		card: 'summary_large_image',
		site: '@guptech',
	},
};
