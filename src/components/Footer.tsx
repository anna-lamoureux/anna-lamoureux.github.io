import './Footer.css';

export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>
        © {year} {name}
      </span>
    </footer>
  );
}
