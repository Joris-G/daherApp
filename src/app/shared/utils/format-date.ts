/**
 * Formate une date en string compatible input HTML5 (YYYY-MM-DD)
 * @param date Date à formater
 * @returns string
 */
export const formatDateForInput = (date: Date | string): string => {
  const d = new Date(date);
  return d.toISOString().split('T')[0];
};