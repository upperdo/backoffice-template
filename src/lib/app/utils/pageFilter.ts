import type { QueryOptions } from "$lib/app/types/interfaces/QueryOptionsInterface";

export function pageFilter(url: URL): QueryOptions {
    if (!url) {
        return {
            filter: {},
            limit: 12,
            sort: {
                key: '$createdAt',
                order: 'desc',
            },
            search: ''
        };
    }

    const limit = parseInt(url?.searchParams?.get('limit') || '12') || 12;
    const priceRange = url?.searchParams?.get('price')?.split('|');
    const sortParam = url.searchParams.get('sort') || '$createdAt|order:desc';
    const filterParam = url.searchParams.get('filter') || '';
    const sortOptions = sortParam.split('|');
    const search = url.searchParams?.get('search') || '';

    const sort = {
        key: sortOptions[0].split(':')[1],
        order: sortOptions[1]?.split(':')[1] === 'desc' ? 'desc' : 'asc',
    };

    const filterOptions = filterParam.split('|');
    const filter: any = {};
    filterOptions.forEach(filterOption => {
        const [filterKey, filterValue] = filterOption.split(':');
        if (filterKey && filterValue) {
            const filterValues = filterValue.split('-');
            filter[filterKey] = filterValues.length > 1 ? filterValues : filterValues[0];
        }
    });

    // Add price range to filter if present
    if (priceRange && priceRange.length === 2) {
        filter.price = `${priceRange[0]}|${priceRange[1]}`;
    }

    return {
        filter,
        limit,
        sort,
        search
    };
}