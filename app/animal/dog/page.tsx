import { connection } from "next/server";
import { DogImage } from "./dog-image";
import { fetchDogImage } from "@/lib/api/fetch-image";

export default async function Home() {
  await connection();

  const imageUrl = await fetchDogImage();

  return <DogImage url={imageUrl} />;
}