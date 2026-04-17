import { fetchJson } from "./fetchImage";


type CatResponse = {
  url: string;
}[];

type DogResponse = {
  message: string;
};

export async function fetchCatImage(): Promise<string> {
  const data = await fetchJson<CatResponse>(
    "https://api.thecatapi.com/v1/images/search"
  );

  return data[0].url;
}

// 犬
export async function fetchDogImage(): Promise<string> {
  const data = await fetchJson<DogResponse>(
    "https://dog.ceo/api/breeds/image/random"
  );

  return data.message;
}