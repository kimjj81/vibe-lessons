import { createContext, useContext } from 'react';

const CourseDeckContext = createContext(null);

export function CourseDeckProvider({ value, children }) {
  return <CourseDeckContext.Provider value={value}>{children}</CourseDeckContext.Provider>;
}

export function useCourseDeck() {
  return useContext(CourseDeckContext);
}
