import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/hotels">
            <a>Hoteis</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
