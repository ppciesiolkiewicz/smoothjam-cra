export const getStringYPosition = (stringCount, stringNo) => (100 * stringNo) / (stringCount - 1);
export const getFretXPosition = (fretCount, fretNo) => (100 * fretNo) / (fretCount - 1);
export const areNotesEqual = (n1, n2) => n1.chroma === n2.chroma && (!n1.oct || n1.oct === n2.oct);
