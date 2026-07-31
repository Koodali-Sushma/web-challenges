import { introduction } from "../lib/data.js";
import Link from "next/link.js";
export default function HomePage() {
  return (
    <div>
      <h1>Lord Of The Rings</h1>
      <p>{introduction}</p>

      <h2>
        <Link href="/volumes">Explore all volumes</Link>
      </h2>
    </div>
  );
}
