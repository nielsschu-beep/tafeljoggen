const SPACING_TOKENS = [
  { name: 'size-0', px: '0px', var: '--size-0' },
  { name: 'size-25', px: '1px', var: '--size-25' },
  { name: 'size-50', px: '2px', var: '--size-50' },
  { name: 'size-100', px: '4px', var: '--size-100' },
  { name: 'size-150', px: '6px', var: '--size-150' },
  { name: 'size-200', px: '8px', var: '--size-200' },
  { name: 'size-250', px: '10px', var: '--size-250' },
  { name: 'size-300', px: '12px', var: '--size-300' },
  { name: 'size-350', px: '14px', var: '--size-350' },
  { name: 'size-400', px: '16px', var: '--size-400' },
  { name: 'size-500', px: '20px', var: '--size-500' },
  { name: 'size-600', px: '24px', var: '--size-600' },
  { name: 'size-700', px: '28px', var: '--size-700' },
  { name: 'size-800', px: '32px', var: '--size-800' },
  { name: 'size-900', px: '36px', var: '--size-900' },
  { name: 'size-1000', px: '40px', var: '--size-1000' },
  { name: 'size-1050', px: '44px', var: '--size-1050' },
  { name: 'size-1100', px: '48px', var: '--size-1100' },
  { name: 'size-1200', px: '56px', var: '--size-1200' },
  { name: 'size-1300', px: '64px', var: '--size-1300' },
  { name: 'size-1400', px: '72px', var: '--size-1400' },
  { name: 'size-1500', px: '80px', var: '--size-1500' },
  { name: 'size-1600', px: '88px', var: '--size-1600' },
  { name: 'size-1700', px: '96px', var: '--size-1700' },
  { name: 'size-1800', px: '104px', var: '--size-1800' },
  { name: 'size-2000', px: '120px', var: '--size-2000' },
  { name: 'size-2200', px: '256px', var: '--size-2200' },
]

export default function SpacingSection() {
  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr 48px',
        gap: '0',
        fontSize: '11px',
        color: 'var(--neutral-500)',
        fontWeight: 700,
        padding: '4px 8px 8px',
        borderBottom: '1px solid var(--neutral-200)',
        marginBottom: '4px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      }}>
        <span>Token</span>
        <span>Visual</span>
        <span style={{ textAlign: 'right' }}>px</span>
      </div>
      {SPACING_TOKENS.map(({ name, px, var: cssVar }) => (
        <div
          key={name}
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr 48px',
            gap: '0',
            alignItems: 'center',
            padding: '4px 8px',
            borderRadius: 'var(--radius-100)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--neutral-100)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <span className="token-chip" style={{ width: 'fit-content' }}>{name}</span>
          <div style={{ padding: '0 12px' }}>
            <div
              style={{
                height: '12px',
                width: cssVar === '--size-0' ? '1px' : `var(${cssVar})`,
                maxWidth: '100%',
                background: 'var(--primary-700)',
                borderRadius: '2px',
                opacity: cssVar === '--size-0' ? 0.3 : 0.8,
              }}
            />
          </div>
          <span style={{ textAlign: 'right', fontSize: '11px', color: 'var(--neutral-600)', fontFamily: 'monospace' }}>
            {px}
          </span>
        </div>
      ))}
    </div>
  )
}
