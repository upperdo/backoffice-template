export function createSlug(property: string): string {
    const today = new Date();
    const slug = property.toLowerCase().replace(/,/g, '-').replace(/\s+/g, '-') + '-' + today.getTime();
    return slug;
}