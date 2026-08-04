import Link from "next/link";
import { volumes } from "@/lib/data.js";
export default function Volumes() {
  return (
    <>
      <h3>List of volumes:</h3>
      <ul>
        {volumes.map(({ title, slug }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
