export const colorRed = (str: string) => {
  return `\x1b[30m${str}\x1b[0m`
}

export const colorBlue = (str: string) => {
  return `\x1b[34m${str}\x1b[0m`
}

export const colorGreen = (str: string) => {
  return `\x1b[32m${str}\x1b[0m`
}

export const colorWhite = (str: string) => {
  return `\x1b[37m${str}\x1b[0m`
}

export const colorCyan = (str: string) => {
  return `\x1b[36m${str}\x1b[0m`
}

export const colorMagenta = (str: string) => {
  return `\t\x1b[35m${str}\x1b[0m`
}