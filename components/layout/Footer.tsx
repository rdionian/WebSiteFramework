export function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Northward Journal</p>

      <ul>
        <li>
          <a href="https://instagram.com" aria-label="Instagram">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://facebook.com" aria-label="Facebook">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://youtube.com" aria-label="YouTube">
            YouTube
          </a>
        </li>
        <li>
          <a href="mailto:youremail@example.com" aria-label="Email">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}

