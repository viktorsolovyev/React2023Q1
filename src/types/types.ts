export type TProduct = {
  id: number;
  image: string;
  title: string;
  brand: string;
  price: number;
  description: string;
};

export type TCountry = {
  name: string;
  label: string;
};

export type TFormCard = {
  email: string;
  birthday: Date;
  coutry: string;
  consent: boolean;
  gender: string;
  picture: { imageType: string; imageData: string };
};
