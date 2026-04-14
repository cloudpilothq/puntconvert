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

      {/* App Promo Banner */}
      <section style={{ marginTop: '5rem', marginBottom: '2rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(56, 239, 125, 0.1), rgba(0, 242, 254, 0.1))',
          border: '1px solid rgba(0, 242, 254, 0.2)',
          borderRadius: '24px',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 10px 40px -10px rgba(0, 242, 254, 0.15)'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'Outfit' }}>Take PuntConvert Anywhere</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            Experience lightning-fast mobile conversions, native push notifications for live odds matching, and one-tap tipster syncing with the PuntConvert Mobile App. Available now for iOS and Android devices.
          </p>
          
          <div className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            <a href="/app" style={{ display: 'inline-block' }}>
              <img src="/app-store-badge.svg" alt="Download on the App Store" style={{ height: '52px' }} />
            </a>
            <a href="/app" style={{ display: 'inline-block' }}>
              <img src="/google-play-badge.svg" alt="Get it on Google Play" style={{ height: '52px' }} />
            </a>
          </div>
          
          {/* Decorative background glow elements */}
          <div style={{
            position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px',
            background: 'var(--neon-green)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute', bottom: '-50px', right: '-50px', width: '150px', height: '150px',
            background: 'var(--neon-blue)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%'
          }} />
        </div>
      </section>
    </div>
  );
}
