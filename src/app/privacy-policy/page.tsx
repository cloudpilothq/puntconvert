export const metadata = {
  title: 'Privacy Policy | PuntConvert',
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Effective Date: {new Date().toLocaleDateString()}</p>
      
      <div className="glass-panel" style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '2rem' }}>
          Your privacy is critically important to us. It is PuntConvert's policy to respect your privacy regarding any information we may collect from you across our website and associated APIs.
        </p>

        <h3 style={{ color: 'var(--neon-blue)', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Information we collect</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used. Collected information includes:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Account credentials (Email addresses, encrypted passwords).</li>
          <li>Conversion metadata (The source and destination bookmakers you frequently use to improve caching).</li>
          <li>Analytics data (via cookies, to measure performance).</li>
        </ul>

        <h3 style={{ color: 'var(--neon-green)', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Data Retention and Security</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
        </p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Third-Party Links</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Our website may link to external sites (like bookmakers) that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        </p>
      </div>
    </div>
  );
}
