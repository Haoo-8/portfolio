export const getLevelColor = (level?: string) => {
  switch (level) {
    case 'Expert': return 'bg-blue-600';
    case 'Advanced': return 'bg-blue-500';
    case 'Intermediate': return 'bg-blue-400';
    case 'Beginner': return 'bg-gray-400';
    default: return 'bg-blue-500';
  }
};

export const getLevelWidth = (level?: string) => {
  switch (level) {
    case 'Expert': return 'w-full';
    case 'Advanced': return 'w-4/5';
    case 'Intermediate': return 'w-3/5';
    case 'Beginner': return 'w-2/5';
    default: return 'w-4/5';
  }
};
