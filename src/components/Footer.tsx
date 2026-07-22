export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-wordmark">Precision Martech LLC</div>
        <div className="footer-copy">© {new Date().getFullYear()} Precision Martech LLC</div>
        <div className="footer-copy">precisionmartech.com</div>
      </div>
    </footer>
  );
}
