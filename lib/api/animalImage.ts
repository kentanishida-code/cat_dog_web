import { fetchImage } from "./common";

type CatResponse = {
  url: string;
}[];

type DogResponse = {
  message: string;
};

export const API_URLS = {
  cat: "https://api.thecatapi.com/v1/images/search",
  dog: "https://dog.ceo/api/breeds/image/random",
} as const;

export async function fetchCatImage(): Promise<string> {
  return fetchImage<CatResponse>(API_URLS.cat, (data) => data[0].url);
}

export async function fetchDogImage(): Promise<string> {
  return fetchImage<DogResponse>(API_URLS.dog, (data) => data.message);
}