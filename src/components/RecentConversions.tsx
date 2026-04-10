import { RECENT_CONVERSIONS } from '@/lib/data';
import { Activity, ArrowRight } from 'lucide-react';

export default function RecentConversions() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
        <Activity color="var(--neon-green)" />
        <h2 style={{ fontSize: '1.5rem' }}>Recently Converted</h2>
      </div>

      <div className="glass-panel" style={{ padding: '0', flex: 1 }}>
        {RECENT_CONVERSIONS.map((conv, i) => (
          <div key={conv.id} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: i !== RECENT_CONVERSIONS.length - 1 ? '1px solid var(--panel-border)' : 'none',
            flexWrap: 'wrap', gap: '1rem'
          }}>
            <div className="flex items-center gap-4">
              <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>
                <span style={{ fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '1px' }}>{conv.sourceCode}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{conv.sourceBookie}</span>
              </div>
              
              <ArrowRight size={18} color="var(--text-muted)" />
              
              <div style={{ padding: '0.5rem 1rem', background: 'var(--neon-green-dim)', borderRadius: '6px', border: '1px solid rgba(56, 239, 125, 0.2)' }}>
                <span style={{ fontFamily: 'Outfit', fontWeight: 700, letterSpacing: '1px', color: 'var(--neon-green)' }}>{conv.destCode}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{conv.destBookie}</span>
              </div>
            </div>
            
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {conv.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
