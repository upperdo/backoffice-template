export function isDateExpired(date: Date): boolean {
    const currentDate = new Date();
    return date < currentDate;
}