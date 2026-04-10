import { AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer | PuntConvert',
};

export default function Disclaimer() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-block', background: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <AlertTriangle size={48} color="#f59e0b" />
        </div>
        <h1 style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '1rem' }}>Disclaimer</h1>
      </div>
      
      <div className="glass-panel" style={{ color: 'var(--text-muted)', lineHeight: '1.8', borderTop: '4px solid #f59e0b' }}>
        <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>Risk Warning</h3>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Sports betting involves significant financial risk. The PuntConvert conversion tool is built strictly as a utility for mapping selections across platforms. We do not offer financial advice, guarantee betting predictions, or encourage gambling beyond your means.
        </p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '1rem' }}>No Affiliation</h3>
        <p style={{ marginBottom: '2rem' }}>
          PuntConvert is an independent software utility. We are not directly affiliated, partnered with, or endorsed by any of the bookmakers listed on our platform (including but not limited to Bet9ja, SportyBet, 1xBet, etc.). The respective trademarks and logos used in our dropdown menus or site belong strictly to their rightful owners.
        </p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '1rem' }}>Age Restriction</h3>
        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
          <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-main)', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>18+</span>
          <p>Users must be at least 18 years of age (or the legal age of majority in your jurisdiction) to partake in sports betting and utilize our services.</p>
        </div>
      </div>
    </div>
  );
}
