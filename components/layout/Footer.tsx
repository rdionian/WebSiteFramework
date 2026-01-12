export function Footer() {
  return (
    <footer>
      <nav aria-label="Social links">
        <ul>
          <li>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>

          <li>
            <a href="mailto:youremail@example.com">
              Email
            </a>
          </li>
        </ul>
      </nav>

      <p>© {new Date().getFullYear()} Your Name</p>
    </footer>
  );
}

