function Footer() {
  return (
    <footer className="page-footer brown lighten-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getUTCFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
}

export { Footer };
