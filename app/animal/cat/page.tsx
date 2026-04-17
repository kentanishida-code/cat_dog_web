import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchCatImage } from "@/lib/api/animalImage";

export default async function Home() {
  await connection();

  const imageUrl = await fetchCatImage();

  return <CatImage url={imageUrl} />;
}