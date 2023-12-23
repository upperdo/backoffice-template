import type { QueryOptions } from "$lib/app/types/interfaces/QueryOptionsInterface";

export function updateFilterOptions(
    currentOptions: QueryOptions,
    newOptions: Partial<QueryOptions>
): QueryOptions {
    const updatedOptions: QueryOptions = { ...currentOptions };

    if (newOptions.limit !== undefined) {
        updatedOptions.limit = newOptions.limit;
    }

    if (newOptions.sort) {
        updatedOptions.sort = newOptions.sort;
    }

    if (newOptions.filter) {
        updatedOptions.filter = { ...currentOptions.filter };

        for (const key in newOptions.filter) {
            if (Object.prototype.hasOwnProperty.call(newOptions.filter, key)) {
                const filterValue = newOptions.filter[key];

                if (Array.isArray(filterValue)) {
                    // Replace existing array with new values
                    updatedOptions.filter[key] = filterValue;
                } else {
                    updatedOptions.filter[key] = filterValue;
                }
            }
        }
    }

    return updatedOptions;
}
