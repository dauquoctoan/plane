export const repaceWhiteSpace = (str: string, character: string = '-'): string => {
    return str.replace(/\s/g, character);
}