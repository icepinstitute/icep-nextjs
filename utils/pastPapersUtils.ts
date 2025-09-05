// utils/pastPapersUtils.ts
// This file re-exports everything from pastPapersTypes and pastPapersServerUtils
// to maintain compatibility with existing imports

// Re-export types
export type { PastPaper } from './pastPapersTypes';

// Re-export utility functions
export { 
  formatSubjectForUrl, 
  getSubjectFromUrl 
} from './pastPapersTypes';

// Re-export server functions
export { 
  getAllPastPapers, 
  getPapersBySubject, 
  getPaperById, 
  getAllSubjects 
} from './pastPapersServerUtils';
