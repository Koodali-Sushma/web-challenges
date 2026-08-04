import Link from "next/link";
import { volumes } from "@/lib/data.js";
import { useRouter } from "next/router.js";
import Head from "next/head.js";

export default function exploreVolumes() {
  const route = useRouter();
  const { slug } = route.query;

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
    <>
      <h2>Volume title: {currentVolume.title}</h2>
      <p>{currentVolume.description}</p>
      <Image
        src={currentVolume.cover}
        alt={`{Cover image of ${currentVolume.title}`}
        width={140}
        height={230}
      />
      <ul>
        {currentVolume.books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}:<strong>{title}</strong>
          </li>
        ))}
      </ul>

      <div>
        <h4>
          <Link href="/volumes">Back to volumes list</Link>
        </h4>
      </div>
    </>
  );
}
