function Footer() {
  return (
    <footer className="page-footer #d50000 red accent-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="material-icons grey-text text-lighten-4 right "
            href="#!"
          >
            adjust
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
