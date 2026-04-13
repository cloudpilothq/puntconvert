"use client";
import { TOP_TIPSTERS } from '@/lib/data';
import { ExternalLink, Users } from 'lucide-react';

export default function Tipsters() {
  return (
    <div>
      <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
        <Users color="var(--neon-blue)" />
        <h2 style={{ fontSize: '1.5rem' }}>Top Tipsters in Africa</h2>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Win with top punters in Africa today in football, basketball, icehockey. You are in great company.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {TOP_TIPSTERS.map((tipster, i) => (
          <div key={i} className="glass-panel" style={{ 
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            transition: 'transform 0.2s ease', cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div>
              <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
                <img 
                  src={`https://unavatar.io/x/${tipster.x.replace('@', '')}`} 
                  alt={tipster.name}
                  style={{ 
                    width: '40px', height: '40px', borderRadius: '50%', 
                    objectFit: 'cover', flexShrink: 0, 
                    border: '1px solid rgba(0, 242, 254, 0.3)' 
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div style={{
                  display: 'none', width: '40px', height: '40px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                  alignItems: 'center', justifyContent: 'center',
                  fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', flexShrink: 0
                }}>
                  {tipster.name.charAt(0)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{tipster.name}</h3>
                  <a href={`https://x.com/${tipster.x.replace('@', '')}`} target="_blank" rel="noreferrer" style={{ color: 'var(--neon-green)', fontSize: '0.9rem', textDecoration: 'none' }}>
                    {tipster.x.startsWith('@') ? tipster.x : `@${tipster.x}`}
                  </a>
                </div>
              </div>
            </div>
            
            <a href={tipster.telegram} target="_blank" rel="noreferrer" className="btn-secondary" style={{ width: '100%', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
              Join on Telegram <ExternalLink size={14} style={{ marginLeft: '6px' }}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
