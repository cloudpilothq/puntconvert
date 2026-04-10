import { Star } from 'lucide-react';

export const metadata = {
  title: 'Free Tips | PuntConvert',
  description: 'Top accurate prediction codes for today.',
};

export default function FreeTips() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--neon-green)', marginBottom: '1rem' }}>Free Tips & Predictions</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Get the most accurate accumulator codes shared by our top verified tipsters, fully updated.
        </p>
      </div>

      <div className="responsive-grid">
        {[1, 2, 3, 4].map(idx => (
          <div key={idx} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex items-center justify-between">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Today, 14:00 PM</span>
              <div className="flex items-center gap-1" style={{ color: '#f59e0b' }}>
                <Star size={16} fill="#f59e0b" />
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Premium</span>
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.25rem' }}>14-Game Mega Accumulator</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Market: 1X2, Over 2.5 Goals, DNB</p>
            
            <div style={{ background: 'rgba(56, 239, 125, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--neon-green)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '1px', color: 'var(--neon-green)' }}>G72D{idx}M</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sportybet</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
