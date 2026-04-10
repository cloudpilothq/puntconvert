import { Cookie } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | PuntConvert',
};

export default function CookiePolicy() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <div className="flex items-center gap-4" style={{ marginBottom: '3rem' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '50%' }}>
          <Cookie size={32} color="var(--text-main)" />
        </div>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)' }}>Cookie Policy</h1>
      </div>
      
      <div className="glass-panel" style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By using PuntConvert, you consent to our use of cookies.
        </p>

        <h3 style={{ color: 'var(--neon-blue)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>What are cookies?</h3>
        <p style={{ marginBottom: '2rem' }}>
          Cookies are small text files that are placed on your computer or mobile device when you browse websites. They help us understand how you use our site and allow us to remember your preferences (like night mode or your default origin bookmaker dropdown selections).
        </p>

        <h3 style={{ color: 'var(--neon-green)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>How we use cookies</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--neon-blue)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Essential Cookies:</strong> Required for the basic functioning of the site, such as user authentication and security.
          </div>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--neon-green)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Preference Cookies:</strong> Used to remember your selected bookmakers and UI preferences between visits.
          </div>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--neon-purple)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Analytics Cookies:</strong> Help us understand how our platform is being used so we can improve the conversion engine efficiency.
          </div>
        </div>
      </div>
    </div>
  );
}
