import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'FAQs | PuntConvert',
  description: 'Frequently asked questions regarding our bet conversion.',
};

export default function FAQs() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--neon-purple)', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Everything you need to know about PuntConvert, billing, and technicalities.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        
        <div className="glass-panel flex gap-4" style={{ alignItems: 'flex-start' }}>
          <HelpCircle color="var(--neon-blue)" style={{ flexShrink: 0, marginTop: '4px' }}/>
          <div>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>What is PuntConvert?</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>PuntConvert is a service that transfers your bet selections from one betting site to another. It enables you to take a booking code from a bookmaker you don't use, and generate an equivalent betting code for your preferred bookie.</p>
          </div>
        </div>

        <div className="glass-panel flex gap-4" style={{ alignItems: 'flex-start' }}>
          <HelpCircle color="var(--neon-green)" style={{ flexShrink: 0, marginTop: '4px' }}/>
          <div>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Why did my conversion fail?</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>A conversion might fail if one of the selections on the original ticket is not available on the destination bookmaker, if the requested match has already started, or if the original bookmaker's API is temporarily rejecting our requests. Sometimes it's simply an inactive or expired code.</p>
          </div>
        </div>

        <div className="glass-panel flex gap-4" style={{ alignItems: 'flex-start' }}>
          <HelpCircle color="var(--neon-purple)" style={{ flexShrink: 0, marginTop: '4px' }}/>
          <div>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>How long does a conversion take?</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Most conversions take less than 3 seconds due to our highly optimized mapping engine. Tickets with 30+ selections or complex accumulators may take slightly longer (up to 10 seconds) to process.</p>
          </div>
        </div>

        <div className="glass-panel flex gap-4" style={{ alignItems: 'flex-start' }}>
          <HelpCircle color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '4px' }}/>
          <div>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Do I need to pay to convert codes?</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>No! Standard code conversions are 100% free for all registered users subject to fair usage limits to prevent bot abuse.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
