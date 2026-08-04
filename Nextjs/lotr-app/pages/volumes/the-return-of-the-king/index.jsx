import Link from "next/link";
import { volumes } from "@/lib/data.js";
import Head from "next/head.js";
import Image from "next/image";

export default function exploreVolumes() {
  const currentVolume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );

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
      <div>
        <h2>Volume 3: {currentVolume.title}</h2>
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
      </div>

      <div>
        <h4>
          <Link href="/volumes">Back to volumes list</Link>
        </h4>
      </div>
    </>
  );
}
