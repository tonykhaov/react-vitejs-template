function createMultipleElements<ElementType>(length: number, transformer: () => ElementType) {
  return Array.from({ length }, (_, i) => i).map(transformer)
}

export { createMultipleElements }
