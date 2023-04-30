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
  birthday: string;
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

export type TRickAndMortyCharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: TRickAndMortyCharacter[];
  error: string | null;
};
