"use client";
import { useState } from 'react';
import { BOOKMAKERS } from '@/lib/data';
import { ArrowRight, RefreshCw, Copy, CheckCircle2 } from 'lucide-react';

export default function ConverterForm() {
  const [code, setCode] = useState('');
  const [origin, setOrigin] = useState(BOOKMAKERS[18]); // Default Bet9ja
  const [destination, setDestination] = useState(BOOKMAKERS[91]); // Default Sportybet
  const [isLoading, setIsLoading] = useState(false);
  const [convertedCode, setConvertedCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || !origin || !destination) return;
    
    setIsLoading(true);
    setConvertedCode('');
    setCopied(false);
    
    // Simulate API request
    setTimeout(() => {
      // Generate a random 6-7 char uppercase string for the mocked destination code
      const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      setConvertedCode(randomCode);
      setIsLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
      
      {/* Glow effect isolated to the panel */}
      <div style={{
        position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px',
        background: 'var(--neon-green-dim)', filter: 'blur(50px)', borderRadius: '50%', zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Convert <span className="text-gradient">Bet Code</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Generate bet codes of any accurate predictions to your preferred bookie quickly.</p>
        </div>

        <form onSubmit={handleConvert}>
          <div className="form-group">
            <label className="form-label">Booking Code</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. 59PVCJZ" 
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              required
            />
          </div>

          <div className="flex flex-responsive items-center justify-between gap-4" style={{ marginBottom: '1.5rem' }}>
            <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
              <label className="form-label">Origin Bookie</label>
              <select 
                className="form-select" 
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                {BOOKMAKERS.map(b => <option key={`orig-${b}`} value={b}>{b}</option>)}
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '1.25rem' }}>
              <ArrowRight size={24} color="var(--neon-blue)" />
            </div>

            <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
              <label className="form-label">Destination Bookie</label>
              <select 
                className="form-select" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                {BOOKMAKERS.map(b => <option key={`dest-${b}`} value={b}>{b}</option>)}
              </select>
            </div>
          </div>

          {!convertedCode ? (
            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', padding: '1rem' }}
              disabled={isLoading || !code}
            >
              {isLoading ? (
                <><RefreshCw size={20} className="spin" style={{ animation: 'spin 1s linear infinite' }}/> Converting...</>
              ) : (
                'Convert Now'
              )}
            </button>
          ) : (
             <div style={{ background: 'rgba(56, 239, 125, 0.1)', border: '1px solid var(--neon-green)', borderRadius: '8px', padding: '1rem', marginTop: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Success! Your {destination} code is ready:</p>
                <div className="flex items-center justify-between">
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--neon-green)', fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '2px' }}>
                    {convertedCode}
                  </h3>
                  <button 
                    type="button"
                    onClick={handleCopy}
                    className="btn-secondary"
                    style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: copied ? 'var(--neon-green)' : '' }}
                  >
                    {copied ? <CheckCircle2 size={18} color="var(--neon-green)"/> : <Copy size={18} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <button 
                  type="button" 
                  onClick={() => setConvertedCode('')} 
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', marginTop: '1rem', cursor: 'pointer' }}
                >
                  Convert another code
                </button>
             </div>
          )}
        </form>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
