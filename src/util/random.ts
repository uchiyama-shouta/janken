type RandomNumber = 0 | 1 | 2;

export const random = () => {
  const jankenn = ["gu-", "choki", "pa-"] as const;
  const num = Math.floor(Math.random() * 3) as RandomNumber;

  return jankenn[num];
};
