import 'server-only';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { Magazine, MagazineGroup, MagazineByMonth, extractDateInfo, getMonthNumber } from './magazinesTypes';

const magazinesDirectory = path.join(process.cwd(), 'public/docs/magazines');

// Helper function to safely read directory
function safeReadDir(dirPath: string): string[] {
  try {
    if (fs.existsSync(dirPath)) {
      return fs.readdirSync(dirPath).filter(file => file.toLowerCase().endsWith('.pdf'));
    }
    return [];
  } catch (error) {
    console.warn(`Could not read directory: ${dirPath}`, error);
    return [];
  }
}

// Get all magazines from the filesystem
export function getAllMagazines(): Magazine[] {
  const filenames = safeReadDir(magazinesDirectory);
  
  return filenames.map(filename => {
    const { year, month, week, publishDate } = extractDateInfo(filename);
    
    return {
      id: filename.replace(/\.pdf$/i, ''),
      title: filename.replace(/\.pdf$/i, '').replace(/-/g, ' '),
      year,
      month,
      week,
      filePath: path.join(magazinesDirectory, filename),
      fileUrl: `/docs/magazines/${filename}`,
      publishDate
    };
  }).sort((a, b) => {
    // Sort by year (descending), then by month (descending), then by week (descending)
    if (a.year !== b.year) {
      return parseInt(b.year) - parseInt(a.year);
    }
    
    const aMonthNum = getMonthNumber(a.month);
    const bMonthNum = getMonthNumber(b.month);
    
    if (aMonthNum !== bMonthNum) {
      return bMonthNum - aMonthNum;
    }
    
    return b.publishDate.getTime() - a.publishDate.getTime();
  });
}

// Get magazines grouped by year
export function getMagazinesByYear(): MagazineGroup[] {
  const allMagazines = getAllMagazines();
  const magazinesByYear: Record<string, Magazine[]> = {};
  
  allMagazines.forEach(magazine => {
    if (!magazinesByYear[magazine.year]) {
      magazinesByYear[magazine.year] = [];
    }
    magazinesByYear[magazine.year].push(magazine);
  });
  
  return Object.entries(magazinesByYear)
    .map(([year, magazines]) => ({
      year,
      magazines: magazines.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
    }))
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

// Get magazines grouped by year and month
export function getMagazinesByMonth(): MagazineByMonth[] {
  const allMagazines = getAllMagazines();
  const magazinesByMonth: Record<string, Magazine[]> = {};
  
  allMagazines.forEach(magazine => {
    const key = `${magazine.year}-${magazine.month}`;
    if (!magazinesByMonth[key]) {
      magazinesByMonth[key] = [];
    }
    magazinesByMonth[key].push(magazine);
  });
  
  return Object.entries(magazinesByMonth)
    .map(([key, magazines]) => {
      const [year, month] = key.split('-');
      return {
        year,
        month,
        magazines: magazines.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
      };
    })
    .sort((a, b) => {
      // Sort by year (descending), then by month (descending)
      if (a.year !== b.year) {
        return parseInt(b.year) - parseInt(a.year);
      }
      return getMonthNumber(b.month) - getMonthNumber(a.month);
    });
}

// Get a specific magazine by ID
export function getMagazineById(id: string): Magazine | null {
  const allMagazines = getAllMagazines();
  return allMagazines.find(magazine => magazine.id === id) || null;
}

// Get years that have magazines
export function getAvailableYears(): string[] {
  const allMagazines = getAllMagazines();
  const years = Array.from(new Set(allMagazines.map(magazine => magazine.year)));
  return years.sort((a, b) => parseInt(b) - parseInt(a));
}

// Get months for a specific year
export function getAvailableMonthsForYear(year: string): string[] {
  const allMagazines = getAllMagazines();
  const months = Array.from(new Set(
    allMagazines
      .filter(magazine => magazine.year === year)
      .map(magazine => magazine.month)
  ));
  
  return months.sort((a, b) => getMonthNumber(b) - getMonthNumber(a));
}

// Search magazines by title or year
export function searchMagazines(query: string): Magazine[] {
  const allMagazines = getAllMagazines();
  const lowercaseQuery = query.toLowerCase();
  
  return allMagazines.filter(magazine => 
    magazine.title.toLowerCase().includes(lowercaseQuery) ||
    magazine.year.includes(query) ||
    magazine.month.toLowerCase().includes(lowercaseQuery)
  );
}
