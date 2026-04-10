import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | PuntConvert',
  description: 'Get in touch with the PuntConvert team.',
};

export default function ContactUs() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--neon-green)', marginBottom: '1rem' }}>Get in Touch</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Have a question, missing a bookmaker on our platform, or want to explore partnership opportunities? We're here to help.
        </p>
      </div>
      
      <div className="flex flex-responsive gap-6">
        <div className="glass-panel" style={{ flex: 1, height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="flex items-center gap-4">
              <div style={{ background: 'var(--neon-green-dim)', padding: '0.75rem', borderRadius: '50%' }}>
                <Mail size={24} color="var(--neon-green)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email Support</p>
                <p style={{ fontSize: '1.1rem' }}>support@puntconvert.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                <MapPin size={24} color="var(--neon-blue)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Headquarters</p>
                <p style={{ fontSize: '1.1rem' }}>Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div style={{ background: 'rgba(142, 45, 226, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                <Phone size={24} color="var(--neon-purple)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Business Enquiries</p>
                <p style={{ fontSize: '1.1rem' }}>+234 800 PUN TCON</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ flex: 2 }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="responsive-grid" style={{ gap: '1.5rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" placeholder="John" />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" placeholder="Doe" />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" style={{ minHeight: '150px', resize: 'vertical' }} placeholder="How can we help?"></textarea>
            </div>
            
            <button type="button" className="btn-primary" style={{ width: 'fit-content', padding: '1rem 2rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
