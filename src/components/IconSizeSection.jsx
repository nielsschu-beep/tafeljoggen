const ICON_TOKENS = [
  { name: 'xs', var: '--icon-height-xs', px: '12px', label: '300 xs' },
  { name: 's', var: '--icon-height-s', px: '16px', label: '400 s' },
  { name: 'm', var: '--icon-height-m', px: '20px', label: '500 m' },
  { name: 'l', var: '--icon-height-l', px: '24px', label: '600 l' },
  { name: 'xl', var: '--icon-height-xl', px: '28px', label: '700 xl' },
  { name: '2xl', var: '--icon-height-2xl', px: '32px', label: '800 2xl' },
  { name: '3xl', var: '--icon-height-3xl', px: '36px', label: '900 3xl' },
  { name: '4xl', var: '--icon-height-4xl', px: '40px', label: '1000 4xl' },
]

// Simple SVG icon that scales
function ScaledIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="var(--primary-200)" stroke="var(--primary-600)" strokeWidth="1.5"/>
      <circle cx="12" cy="10" r="3" fill="var(--primary-700)"/>
      <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="var(--primary-700)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function IconSizeSection() {
  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '24px',
        flexWrap: 'wrap',
        padding: '24px',
        background: 'var(--neutral-100)',
        borderRadius: 'var(--radius-300)',
        border: '1px solid var(--neutral-200)',
      }}>
        {ICON_TOKENS.map(({ name, var: cssVar, px, label }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '50px',
            }}>
              <div style={{ width: `var(${cssVar})`, height: `var(${cssVar})` }}>
                <ScaledIcon size="100%" />
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="token-chip">{label}</div>
              <div style={{ fontSize: '10px', color: 'var(--neutral-500)', marginTop: '2px', fontFamily: 'monospace' }}>
                {px}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '32px' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--neutral-700)', marginBottom: '12px' }}>
          Extended sizes
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end' }}>
          {[
            { label: '1050 5xl', px: '56px', cssSize: 'var(--size-1200)' },
            { label: '1100 6xl', px: '64px', cssSize: 'var(--size-1300)' },
            { label: '1200 7xl', px: '72px', cssSize: 'var(--size-1400)' },
          ].map(({ label, px, cssSize }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: cssSize, height: cssSize }}>
                <ScaledIcon size="100%" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="token-chip">{label}</div>
                <div style={{ fontSize: '10px', color: 'var(--neutral-500)', marginTop: '2px', fontFamily: 'monospace' }}>
                  {px}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
