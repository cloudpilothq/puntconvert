
import ConverterForm from '@/components/ConverterForm';
import RecentConversions from '@/components/RecentConversions';
import Tipsters from '@/components/Tipsters';
import { HelpCircle, Smartphone, Download } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Main Hero / Converter Section */}
        <section style={{ marginBottom: '4rem' }}>
          <ConverterForm />
        </section>

        {/* Live Feed and Information Block */}
        <section className="responsive-grid" style={{ marginBottom: '4rem', alignItems: 'stretch' }}>
          <div style={{ width: '100%' }}>
            <RecentConversions />
          </div>
          
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
              <HelpCircle color="var(--neon-blue)" />
              <h2 style={{ fontSize: '1.5rem' }}>Why use our Converter?</h2>
            </div>
            
            <div className="glass-panel" style={{ flex: 1 }}>
              <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Instant conversion across 80+ bookmakers
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                100% Free to use without hidden fees
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Secure and reliable matching algorithms
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Zero compromises on privacy or data
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Automatic calculation of cumulative odds
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Real-time mapping ensures no missing fixtures
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Lightning-fast response speeds under 3 seconds
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Built-in validation for expired or bad slips
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Mobile-first design for converting on the go
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Community-verified tipster feed integration
              </li>
              <li className="flex items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', flexShrink: 0 }} />
                Guaranteed cross-platform betting consistency
              </li>
            </ul>
          </div>
          </div>
        </section>

        <section>
          <Tipsters />
        </section>

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
    </>
  );
}
