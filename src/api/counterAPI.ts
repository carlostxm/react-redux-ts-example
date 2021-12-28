// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1): Promise<number> => {
  return new Promise<number>((resolve) =>
    setTimeout(() => resolve(amount), 500)
  );
};
