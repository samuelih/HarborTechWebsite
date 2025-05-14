/**
 * Formats a date string into a readable format
 * @param dateString - ISO date string to format
 * @returns Formatted date string (e.g., "June 12, 2023")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default formatDate; 