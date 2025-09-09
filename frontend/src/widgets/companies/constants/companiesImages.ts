interface IImages {
  id: number;
  src: string;
  height: number;
  width: number;
}

export const companiesImages: IImages[] = [
  { id: 1, src: "/companies/mastercard.svg", height: 50, width: 67 },
  { id: 2, src: "/companies/airbnb.svg", height: 39, width: 125 },
  { id: 3, src: "/companies/uber.svg", height: 34, width: 97 },
  { id: 4, src: "/companies/paypal.svg", height: 37, width: 106 },
  { id: 5, src: "/companies/visa.svg", height: 32, width: 90 },
  { id: 6, src: "/companies/stripe.svg", height: 40, width: 97 },
];