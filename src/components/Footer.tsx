import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--panel-border)', 
      padding: '3rem 0',
      textAlign: 'center',
      color: 'var(--text-muted)',
      marginTop: 'auto',
      background: 'rgba(11, 15, 25, 0.4)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Link href="/about-us" className="footer-link">About Us</Link>
          <Link href="/contact-us" className="footer-link">Contact Us</Link>
          <Link href="/faqs" className="footer-link">FAQs</Link>
          <Link href="/terms-of-service" className="footer-link">Terms of Service</Link>
          <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link href="/cookie-policy" className="footer-link">Cookie Policy</Link>
          <Link href="/disclaimer" className="footer-link">Disclaimer</Link>
        </div>
        <p>© {new Date().getFullYear()} PuntConvert. Built for seamless betting conversion.</p>
      </div>
    </footer>
  );
}
