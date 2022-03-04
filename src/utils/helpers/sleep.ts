async function sleep(ms = 1000): Promise<boolean> {
  return new Promise((res) => setTimeout(() => res(true), ms))
}

export { sleep }
