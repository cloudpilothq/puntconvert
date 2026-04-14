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
        <p style={{ marginBottom: '1rem' }}>© {new Date().getFullYear()} PuntConvert. Built for seamless betting conversion.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
          <span>Site developed by <a href="https://github.com/cloudpilothq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--neon-blue)', textDecoration: 'none', fontWeight: 600 }}>cloudpilothq</a></span>
          <a href="https://github.com/cloudpilothq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} aria-label="Developer GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.4a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0 0-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C4.8 1.8 3.6 2.2 3.6 2.2a5.3 5.3 0 0 0 0 3.8A5.4 5.4 0 0 0 2 12.4c0 4.9 3 6.1 6 6.4-.4.4-.8 1.2-.8 2.2v5"></path>
              <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
