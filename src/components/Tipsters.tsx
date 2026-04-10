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
              <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 'bold', fontSize: '1.2rem', color: '#fff'
                }}>
                  {tipster.name.charAt(0)}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{tipster.name}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>"{tipster.desc}"</p>
            </div>
            
            <button className="btn-secondary" style={{ width: '100%', fontSize: '0.85rem' }}>
              Join on {tipster.platform} <ExternalLink size={14} style={{ marginLeft: '4px' }}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
