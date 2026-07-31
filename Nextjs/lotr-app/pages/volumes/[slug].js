import Link from "next/link";
import { volumes } from "@/lib/data.js";
import { useRouter } from "next/router.js";
import Head from "next/head.js";

export default function exploreVolumes() {
  const { query } = useRouter();
  const { slug } = query;
  const { title, description } = volumes;
  console.log("Volumes data: ", volumes);

  const currentVolume = volumes.find((volume) => volume.slug === slug);
  console.log("Current Volume: ", currentVolume);
  if (!currentVolume) {
    return (
      <div>
        <h1>No Volumes found!!</h1>
        <h4>
          <Link href="/volumes">Back to volumes list</Link>
        </h4>
      </div>
    );
  }
  return (
    <div>
      <h2>Volume 1: {currentVolume.title}</h2>
      <p>{currentVolume.description}</p>
      <h4>
        <Link href="/volumes">Back to volumes list</Link>
      </h4>
    </div>
  );
}
