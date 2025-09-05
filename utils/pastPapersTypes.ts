export type ExamName = 'CSS' | 'PMS';
export type SubjectType = 'compulsory' | 'optional';

export interface PastPaperSubject {
  name: string; 
  Exam: ExamName
  type: SubjectType;
}

export interface PastPaper {
  id: string;
  title: string;
  subject: PastPaperSubject;
  year: string;
  yearRange: string;
  filePath: string;
  fileUrl: string;
}

// Utility function to format a subject for use in URLs
export function formatSubjectForUrl(subject: string): string {
  return subject.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-'); // Replace multiple consecutive hyphens with a single one
}

// Utility function to get subject from URL format
export function getSubjectFromUrl(urlSubject: string, allSubjects: string[]): string | null {
  // First attempt: direct match
  const exactMatch = allSubjects.find(subject => formatSubjectForUrl(subject) === urlSubject);
  if (exactMatch) return exactMatch;
  
  // Second attempt: case-insensitive match
  const caseInsensitiveMatch = allSubjects.find(
    subject => formatSubjectForUrl(subject).toLowerCase() === urlSubject.toLowerCase()
  );
  if (caseInsensitiveMatch) return caseInsensitiveMatch;
  
  // Third attempt: partial match (if a subject URL is truncated)
  const partialMatch = allSubjects.find(
    subject => urlSubject.startsWith(formatSubjectForUrl(subject))
  );
  
  return partialMatch || null;
}
