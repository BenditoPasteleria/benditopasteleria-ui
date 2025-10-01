/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { NextResponse } from 'next/server';

let locales = ['es', 'en', 'ca'];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: Request) {
	// For now, default to Spanish
	return 'es';
}

export function middleware(request: Request) {
	// Check if there is any supported locale in the pathname
	const { pathname } = new URL(request.url);
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return;

	// Skip static files and API routes
	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.includes('.') ||
		pathname.startsWith('/favicon') ||
		pathname.startsWith('/logo') ||
		pathname.startsWith('/catalogo-bendito.pdf')
	) {
		return;
	}

	// Redirect if there is no locale
	const locale = getLocale(request);
	const url = new URL(request.url);
	url.pathname = `/${locale}${pathname}`;
	// e.g. incoming request is /products
	// The new URL is now /es/products
	return NextResponse.redirect(url);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		'/((?!_next).*)',
		// Optional: only run on root (/) URL
		// '/'
	],
};
