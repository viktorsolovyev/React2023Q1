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
  country: string;
  consent: boolean;
  gender: string;
  picture: { imageType: string; imageData: string };
};

export type TRickAndMortyCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
