let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Shrikant",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Make sure the code we write is conceptually correct. We shouldn't blindly use features of TS.
// e.g. every employee should have a name.
