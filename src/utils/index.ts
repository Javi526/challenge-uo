export const PriceNumber = (sr: string) : number => {
      const value = sr.slice(1, -3);
      return Number(value);
};