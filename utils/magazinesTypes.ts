export interface Magazine {
  id: string;
  title: string;
  year: string;
  month: string;
  week?: string;
  filePath: string;
  fileUrl: string;
  publishDate: Date;
}

export interface MagazineGroup {
  year: string;
  magazines: Magazine[];
}

export interface MagazineByMonth {
  year: string;
  month: string;
  magazines: Magazine[];
}

// Utility function to format magazine title for display
export function formatMagazineTitle(filename: string): string {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.pdf$/i, '');
  
  // Check for specific magazine - multiple variations
  if (nameWithoutExt.includes('28july_to_03august_2025') && nameWithoutExt.includes('icep') && nameWithoutExt.includes('magazine')) {
    return 'ICEP Weekly Current Affairs E-Magazine ( July 28 - August 03)';
  }
  
  // Extract date range and magazine name
  const match = nameWithoutExt.match(/^(\d{2}\w+)_to_(\d{2}\w+)_(\d{4})-(.+)$/i);
  
  if (match) {
    const [, startDate, endDate, year, magazineName] = match;
    const cleanMagazineName = magazineName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `${cleanMagazineName} (${startDate} to ${endDate}, ${year})`;
  }
  
  // Fallback: just clean up the filename
  return nameWithoutExt.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Extract date information from filename
export function extractDateInfo(filename: string): {
  year: string;
  month: string;
  week: string;
  publishDate: Date;
} {
  // Default values
  let year = new Date().getFullYear().toString();
  let month = 'july';
  let week = '';
  let publishDate = new Date();
  // Try to extract from pattern like "01july_to_07july_2025-icep-magazine.pdf"
  const match = filename.match(/^(\d{2})(\w+)_to_(\d{2})(\w+)_(\d{4})/i);
    if (match) {
    const [, startDay, startMonth, endDay, , fileYear] = match;
    year = fileYear;
    month = startMonth.toLowerCase();
    week = `${startDay}-${endDay}`;
    
    // Convert month name to number
    const monthNames = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ];
    const monthIndex = monthNames.findIndex(m => m.startsWith(month.toLowerCase()));
    
    if (monthIndex !== -1) {
      publishDate = new Date(parseInt(year), monthIndex, parseInt(startDay));
      month = monthNames[monthIndex];
    }
  }
  
  return { year, month, week, publishDate };
}

// Utility function to format month name for display
export function formatMonthName(month: string): string {
  return month.charAt(0).toUpperCase() + month.slice(1);
}

// Utility function to get month number for sorting
export function getMonthNumber(month: string): number {
  const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];
  const index = monthNames.findIndex(m => m.toLowerCase() === month.toLowerCase());
  return index !== -1 ? index : 12; // Unknown months go to the end
}
