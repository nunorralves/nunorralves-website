export function truncateBlogSummary(content: string, size = 200): string {
  return content.slice(0, size).trimEnd() + '...';
}

export function reformatDate(fullDate: string): string {
  const date = new Date(fullDate);
  return date.toDateString().slice(3);
  // return date.toDateString().slice(4);
  // return date.getUTCMonth() + ' ' + date.getDay() + ', ' + date.getFullYear();
}

export function blogReadingTime(text = ''): string {
  const minutes = Math.ceil(text.split(/s/g).length / 200);
  return minutes + ' min read';
}
