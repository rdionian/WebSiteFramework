import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/" aria-label="Homepage">
          Your Name
        </Link>

        <ul>
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/photography">Photography</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

