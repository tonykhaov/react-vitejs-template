function createMultipleElements(length: number, transformer: () => void) {
  return Array.from({ length }, (_, i) => i).map(transformer)
}

export { createMultipleElements }
