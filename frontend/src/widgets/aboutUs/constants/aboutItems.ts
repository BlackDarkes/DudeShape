interface IAboutItems {
  id: number;
  image: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  body: string;
}

export const aboutItems: IAboutItems[] = [
  {
    id: 1,
    image: {
      src: "/aboutUs/quality.svg",
      width: 50,
      height: 50,
    },
    title: "Best Quality",
    body: "All of our furniture uses the best materials and choices",
  },
  {
    id: 2,
    image: {
      src: "/aboutUs/secure.svg",
      width: 50,
      height: 50,
    },
    title: "100% Secure",
    body: "All of our furniture uses the best materials and choices",
  },
  {
    id: 3,
    image: {
      src: "/aboutUs/free.svg",
      width: 50,
      height: 50
    },
    title: "Free Shpping",
    body: "All of our furniture uses the best materials and choices",
  },
];