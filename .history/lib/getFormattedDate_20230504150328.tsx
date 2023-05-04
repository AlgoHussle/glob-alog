export default function getFormattedDate(date: string): string {
    return new Intl.DateTimeFormat('en-US', { date})
}