export const metadata = {
  title: 'Terms of Service | PuntConvert',
  description: 'Our terms of service.',
};

export default function TermsOfService() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="glass-panel" style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '2rem' }}>
          Please read these Terms of Service carefully before using our website and services operated by PuntConvert. By accessing or using the Service, you agree to be bound by these Terms.
        </p>

        <h3 style={{ color: 'var(--neon-blue)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Use of Service</h3>
        <p style={{ marginBottom: '1rem' }}>
          Our platform provides bet code conversion and cross-platform syncing utilities. As a user, you agree to:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Not abuse the conversion engine via automated scraping or bots.</li>
          <li>Not use our service for any illegal or strictly prohibited gambling activities in your jurisdiction.</li>
          <li>Accept that conversion rates/odds may shift during the few seconds it takes to process.</li>
        </ul>
        
        <h3 style={{ color: 'var(--neon-green)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Intellectual Property</h3>
        <p style={{ marginBottom: '2rem' }}>
          The original content, features, algorithms, and functionality of this application are owned by PuntConvert and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h3 style={{ color: 'var(--neon-purple)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Limitation of Liability</h3>
        <p style={{ marginBottom: '2rem' }}>
          In no event shall PuntConvert, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      </div>
    </div>
  );
}
