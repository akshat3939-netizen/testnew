
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type QuestionType = 'MCQ' | 'Fill in the blanks' | 'Assertion-Reason' | 'Match the following' | 'Reasoning';

export type CellType = 'wall' | 'path' | 'start' | 'end' | 'puzzle';

export interface Question {
  chapter: string;
  difficulty: Difficulty;
  question_type: QuestionType;
  question: string;
  options?: string[];
  correct_answer: string;
  explanation: string;
  points: number;
  topic: string;
  sub_topic: string;
  hint?: string;
}

export interface Summary {
  chapter: string;
  title: string;
  content: string[];
  key_terms: string[];
}

export interface SubtopicProgress {
  summaryDone: boolean;
  quizStars: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  unlocked: boolean;
}

export interface UserProfile {
  name: string;
  avatar: string;
  level: number;
  xp: number;
  stars: number;
  unlockedLevels: number; // Chapters unlocked
  hasSeenTutorial: boolean;
  achievements: Achievement[];
  // Progress: chapterIndex -> subtopicIndex -> progress
  progress: Record<number, Record<number, SubtopicProgress>>;
}

export const AVATARS = [
  { id: 'striker', emoji: '⚽', face: '👨‍🚀', label: 'The Striker', desc: 'Fast-paced & Goal Oriented' },
  { id: 'skipper', emoji: '🏏', face: '👨‍✈️', label: 'The Skipper', desc: 'Strategic & Precise' },
  { id: 'shinobi', emoji: '🥷', face: '🥷', label: 'The Shinobi', desc: 'Swift & Focused' },
  { id: 'sorcerer', emoji: '🪄', face: '🧙‍♂️', label: 'The Sorcerer', desc: 'Mystical & Knowledgeable' },
  { id: 'saiyan', emoji: '🔥', face: '👱', label: 'The Saiyan', desc: 'Limitless Potential' }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'first_steps', title: 'First Steps', description: 'Complete your first subtopic briefing', emoji: '👣', unlocked: false },
  { id: 'quiz_master', title: 'Quiz Master', description: 'Get 3 stars in any quiz', emoji: '👑', unlocked: false },
  { id: 'speed_demon', title: 'Perfect Streak', description: 'Complete a quiz with no wrong answers', emoji: '⚡', unlocked: false },
  { id: 'level_5', title: 'Rising Star', description: 'Reach Level 5', emoji: '🌟', unlocked: false }
];

export const CHAPTERS = [
  { 
    name: "Crop Production and Management", 
    subtopics: ["Agricultural Practices", "Soil Preparation", "Sowing & Manure", "Irrigation & Harvesting"] 
  },
  { 
    name: "Microorganisms: Friend and Foe", 
    subtopics: ["Types of Microbes", "Useful Microbes", "Harmful Microbes", "Food Preservation"] 
  },
  { 
    name: "Synthetic Fibres and Plastics", 
    subtopics: ["Types of Fibres", "Characteristics", "Plastics & Environment", "Recycling Basics"] 
  },
  { 
    name: "Materials: Metals and Non-Metals", 
    subtopics: ["Physical Properties", "Chemical Reactions", "Uses of Metals", "Displacement Reaction"] 
  },
  { 
    name: "Coal and Petroleum", 
    subtopics: ["Natural Resources", "Coal Formation", "Petroleum Refining", "Natural Gas"] 
  }
];

export const XP_PER_LEVEL = 500;
