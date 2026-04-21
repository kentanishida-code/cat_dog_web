// 猫・犬などの具体API

"use server";

import { API_URLS } from "./animal-url";
import { fetchImage } from "./common";

type CatResponse = {
  url: string;
}[];

type DogResponse = {
  message: string;
};

export async function fetchCatImage(): Promise<string> {
  return fetchImage<CatResponse>(API_URLS.cat, (data) => data[0].url);
}

export async function fetchDogImage(): Promise<string> {
  return fetchImage<DogResponse>(API_URLS.dog, (data) => data.message);
}