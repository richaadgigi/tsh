import { MetadataRoute } from 'next';
import { copyTraderApi } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://tradesignalhive.com';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/copy-trading',
        '/faq',
        '/media',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic trader routes
    let traderRoutes: MetadataRoute.Sitemap = [];
    try {
        const response = await copyTraderApi.getCopyTraders();
        if (response.status && Array.isArray(response.data)) {
            traderRoutes = response.data.map((trader) => ({
                url: `${baseUrl}/trader/${trader.ct_uid}`,
                lastModified: new Date(trader.ct_modified_time || new Date()),
                changeFrequency: 'daily' as const,
                priority: 0.6,
            }));
        }
    } catch (error) {
        console.error('Sitemap Generation Error (traders):', error);
    }

    return [...staticRoutes, ...traderRoutes];
}
