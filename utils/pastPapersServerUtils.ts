// utils/pastPapersServerUtils.ts
import 'server-only';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { PastPaper, PastPaperSubject } from './pastPapersTypes';

// Map file names to cleaner subject names
const subjectNameMap: Record<string, string> = {
  'Essay': 'Essay',
  'Preci and composition': 'English (Precis & Composition)',
  'General Science and ability': 'General Science & Ability',
  'current affais': 'Current Affairs',
  'pakistn affairs': 'Pakistan Affairs',
  'Islamiyat': 'Islamic Studies',
  'Pol. Science': 'Political Science',
  'Indo pak History': 'Indo-Pak History',
  'International relation': 'International Relations',
  'Environmental_Science': 'Environmental Science',
  'GPP': 'Governance & Public Policies',
  'Punjabi': 'Punjabi'
};

const pastPapersDirectory = path.join(process.cwd(), 'public/docs/past_papers');
const cssCompPastPapersDirectory = path.join(pastPapersDirectory, 'css_past_papers/comp');
const cssOptionalPastPapersDirectory = path.join(pastPapersDirectory, 'css_past_papers/optional');
const pmsCompPastPapersDirectory = path.join(pastPapersDirectory, 'pms_past_papers/comp');
const pmsOptionalPastPapersDirectory = path.join(pastPapersDirectory, 'pms_past_papers/optional');

// Helper function to safely read directory
function safeReadDir(dirPath: string): string[] {
  try {
    if (fs.existsSync(dirPath)) {
      return fs.readdirSync(dirPath);
    }
    return [];
  } catch (error) {
    console.warn(`Could not read directory: ${dirPath}`, error);
    return [];
  }
}

const cssCompSubjectNames = safeReadDir(cssCompPastPapersDirectory);
const cssOptionalSubjectNames = safeReadDir(cssOptionalPastPapersDirectory);
const pmsCompSubjectNames = safeReadDir(pmsCompPastPapersDirectory);
const pmsOptionalSubjectNames = safeReadDir(pmsOptionalPastPapersDirectory);

// Extract year information from filename
function extractYearInfo(filename: string): { year: string; yearRange: string } {
  // Look for year patterns like "2016-2024" in the filename
  const yearRangeMatch = filename.match(/(\d{4})-(\d{4})/);
  if (yearRangeMatch) {
    return {
      year: yearRangeMatch[2], // Latest year
      yearRange: `${yearRangeMatch[1]}-${yearRangeMatch[2]}`
    };
  }

  // If no year range, look for single year
  const yearMatch = filename.match(/(\d{4})/);
  if (yearMatch) {
    return {
      year: yearMatch[1],
      yearRange: yearMatch[1]
    };
  }

  return {
    year: 'Unknown',
    yearRange: 'Unknown'
  };
}

// Extract subject name from filename
export function extractSubjectName(filename: string): string {
  // Remove year part and file extension
  const subjectName = filename.replace(/\d{4}-\d{4}.*$|\d{4}.*$/, '').trim();

  // Look for exact match in the map
  for (const key in subjectNameMap) {
    if (subjectName.includes(key)) {
      return subjectNameMap[key];
    }
  }

  return subjectName;
}

export function generatePastPapersList({ fileNames, subject, parentDir, parentPath }: { fileNames: string[], subject: PastPaperSubject, parentDir: string, parentPath: string }): PastPaper[] {

  const pastPapersList = fileNames.map(fileName => {
    const id = fileName.replace(/\.pdf$/, '');
    const { year, yearRange } = extractYearInfo(id);

    return {
      id,
      title: `${subject.name} (${yearRange})`,
      subject: subject,
      year,
      yearRange,
      filePath: path.join(parentDir, fileName),
      fileUrl: `/docs/past_papers/${parentPath}${fileName}`,
    };
  });

  return pastPapersList;
}

// Load all past papers
export function getAllPastPapers(): PastPaper[] {

  const pastPapers = []
  for (const subject of cssCompSubjectNames) {
    const parentDir = path.join(cssCompPastPapersDirectory, subject);
    const parentPath = `css_past_papers/comp/${subject}/`;
    const fileNames = safeReadDir(parentDir);
    const subjectData: PastPaperSubject = {
      name: subject,
      type: 'compulsory',
      Exam: 'CSS'
    };
    const cssCompPastPapers = generatePastPapersList({ fileNames, subject: subjectData, parentDir, parentPath });
    pastPapers.push(...cssCompPastPapers);
  }

  for (const subject of cssOptionalSubjectNames) {
    const parentDir = path.join(cssOptionalPastPapersDirectory, subject);
    const parentPath = `css_past_papers/optional/${subject}/`;
    const fileNames = safeReadDir(parentDir);
    const subjectData: PastPaperSubject = {
      name: subject,
      type: 'optional',
      Exam: 'CSS'
    };
    const cssOptionalPastPapers = generatePastPapersList({ fileNames, subject: subjectData, parentDir, parentPath });
    pastPapers.push(...cssOptionalPastPapers);
  }

  for (const subject of pmsCompSubjectNames) {
    const parentDir = path.join(pmsCompPastPapersDirectory, subject);
    const parentPath = `pms_past_papers/comp/${subject}/`;
    const fileNames = safeReadDir(parentDir);
    const subjectData: PastPaperSubject = {
      name: subject,
      type: 'compulsory',
      Exam: 'PMS'
    };
    const pmsCompPastPapers = generatePastPapersList({ fileNames, subject: subjectData, parentDir, parentPath });
    pastPapers.push(...pmsCompPastPapers);
  }

  for (const subject of pmsOptionalSubjectNames) {
    const parentDir = path.join(pmsOptionalPastPapersDirectory, subject);
    const parentPath = `pms_past_papers/optional/${subject}/`;
    const fileNames = safeReadDir(parentDir);
    const subjectData: PastPaperSubject = {
      name: subject,
      type: 'optional',
      Exam: 'PMS'
    };
    const pmsOptionalPastPapers = generatePastPapersList({ fileNames, subject: subjectData, parentDir, parentPath });
    pastPapers.push(...pmsOptionalPastPapers);
  }

  return pastPapers
}

// Get papers for a specific subject
export async function getPapersBySubject(subject: string): Promise<PastPaper[]> {
  const allPapers = getAllPastPapers();

  // Find the standardized subject name if it exists
  let standardizedSubject = subject;
  for (const [value] of Object.entries(subjectNameMap)) {
    if (value.toLowerCase() === subject.toLowerCase()) {
      standardizedSubject = value;
      break;
    }
  }

  return allPapers.filter(paper =>
    paper.subject.name.toLowerCase() === standardizedSubject.toLowerCase()
  );
}

// Get a specific paper by ID
export async function getPaperById(id: string): Promise<PastPaper | null> {
  const allPapers = getAllPastPapers();
  return allPapers.find(paper => paper.id === id) || null;
}

// Get all unique subjects
export async function getAllSubjects(): Promise<
  {
    css: {
      comp: PastPaperSubject[];
      optional: PastPaperSubject[];
    };
    pms: {
      comp: PastPaperSubject[];
      optional: PastPaperSubject[];
    };
  }> {
  return {
    css: {
      comp: cssCompSubjectNames.map(name => ({
        name: name,
        type: 'compulsory',
        Exam: 'CSS'
      })),
      optional: cssOptionalSubjectNames.map(name => ({
        name: name,
        type: 'optional',
        Exam: 'CSS'
      }))
    },
    pms: {
      comp: pmsCompSubjectNames.map(name => ({
        name: name,
        type: 'compulsory',
        Exam: 'PMS'
      })),
      optional: pmsOptionalSubjectNames.map(name => ({
        name: name,
        type: 'optional',
        Exam: 'PMS'
      }))
    }
  }
}
