import { Info, Target, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us | PuntConvert',
  description: 'Learn more about PuntConvert, the premier bet conversion service.',
};

export default function AboutUs() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--neon-blue)', marginBottom: '1rem' }}>About PuntConvert</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Bridging the gap between bookmakers, one selection at a time.
        </p>
      </div>
      
      <div className="responsive-grid">
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: 'var(--neon-green-dim)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <Target size={32} color="var(--neon-green)" />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Our Mission</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            To completely unify the sports betting landscape. We ensure that punters can always secure their targeted odds, regardless of the betting platform they prefer.
          </p>
        </div>

        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <Info size={32} color="var(--neon-blue)" />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>The Technology</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Developed with cutting-edge mapping algorithms, PuntConvert instantly matches fixtures, betting markets, and selections across more than 80 platforms globally.
          </p>
        </div>

        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: 'rgba(142, 45, 226, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <Users size={32} color="var(--neon-purple)" />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>The Community</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            With thousands of punters and top tipsters sharing codes daily, we are building the largest agnostic betting community in Africa.
          </p>
        </div>
      </div>
    </div>
  );
}
