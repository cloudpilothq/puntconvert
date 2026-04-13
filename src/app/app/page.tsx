import { Smartphone } from 'lucide-react';

export const metadata = {
  title: 'PuntConvert App',
  description: 'Download the PuntConvert Mobile Application',
};

export default function MobileApp() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--gradient-btn)', padding: '1.5rem', borderRadius: '24px' }}>
            <Smartphone size={64} color="#fff" />
          </div>
        </div>
        
        <h1 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Get the PuntConvert App</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem' }}>
          Instant code conversion, live push notifications for top tips, and an odds calculator straight to your pocket.
        </p>

        <div className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
          <a href="/app" style={{ display: 'inline-block' }}>
            <img src="/app-store-badge.svg" alt="Download on the App Store" style={{ height: '52px' }} />
          </a>
          <a href="/app" style={{ display: 'inline-block' }}>
            <img src="/google-play-badge.svg" alt="Get it on Google Play" style={{ height: '52px' }} />
          </a>
        </div>
        
        <p style={{ color: 'var(--text-muted)', marginTop: '2rem', fontSize: '0.9rem' }}>
          * Currently in closed beta. Join the waitlist on social media.
        </p>
      </div>
    </div>
  );
}
