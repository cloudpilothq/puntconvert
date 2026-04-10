"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Policy', path: '/privacy-policy' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Free Tips', path: '/free-tips' },
    { name: 'App', path: '/app' }
  ];

  return (
    <nav style={{ 
      padding: '1.5rem', 
      borderBottom: '1px solid var(--panel-border)',
      background: 'rgba(11, 15, 25, 0.8)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container flex items-center justify-between" style={{ flexWrap: 'wrap' }}>
        <Link href="/" className="flex items-center gap-2">
          <div style={{
            background: 'var(--gradient-btn)',
            width: '32px', height: '32px', borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 'bold'
          }}>
            PC
          </div>
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.25rem' }}>PuntConvert</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links">
          {links.map(link => (
            <Link key={link.path} href={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--panel-border)' }}>
            {links.map(link => (
              <Link 
                key={link.path} 
                href={link.path} 
                className="nav-link" 
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
