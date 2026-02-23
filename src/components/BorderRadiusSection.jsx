const RADIUS_TOKENS = [
  { name: 'radius-50', var: '--radius-50', teacher: '2px', student: '4px' },
  { name: 'radius-100', var: '--radius-100', teacher: '4px', student: '6px' },
  { name: 'radius-200', var: '--radius-200', teacher: '8px', student: '12px' },
  { name: 'radius-300', var: '--radius-300', teacher: '12px', student: '16px' },
  { name: 'radius-400', var: '--radius-400', teacher: '16px', student: '20px' },
  { name: 'radius-500', var: '--radius-500', teacher: '20px', student: '24px' },
  { name: 'radius-600', var: '--radius-600', teacher: '24px', student: '28px' },
  { name: 'radius-700', var: '--radius-700', teacher: '28px', student: '32px' },
  { name: 'radius-800', var: '--radius-800', teacher: '32px', student: '36px' },
  { name: 'radius-900', var: '--radius-900', teacher: '40px', student: '48px' },
  { name: 'radius-1000', var: '--radius-1000', teacher: '48px', student: '56px' },
  { name: 'radius-round', var: '--radius-round', teacher: '256px', student: '256px' },
]

export default function BorderRadiusSection() {
  return (
    <div>
      <div style={{
        background: 'var(--primary-100)',
        border: '1px solid var(--primary-200)',
        borderRadius: 'var(--radius-300)',
        padding: '12px 16px',
        marginBottom: '24px',
        fontSize: '13px',
        color: 'var(--primary-1100)',
        fontFamily: 'var(--font-body)',
      }}>
        💡 <strong>Teacher vs Student:</strong> De blokken hieronder gebruiken <code style={{ background: 'var(--primary-200)', padding: '0 4px', borderRadius: '3px' }}>var(--radius-xxx)</code>. Bij Student zijn de hoekradii systematisch groter voor een kindvriendelijkere look.
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '24px',
      }}>
        {RADIUS_TOKENS.map(({ name, var: cssVar, teacher, student }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'var(--primary-300)',
              border: '2px solid var(--primary-500)',
              borderRadius: `var(${cssVar})`,
            }} />
            <div style={{ textAlign: 'center' }}>
              <div className="token-chip" style={{ marginBottom: '4px', display: 'inline-block' }}>{name}</div>
              <div style={{ fontSize: '10px', color: 'var(--neutral-500)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--color-sky-1000)', fontWeight: 600 }}>T: </span>{teacher}
                <br />
                <span style={{ color: 'var(--color-pumpkin-900)', fontWeight: 600 }}>S: </span>{student}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
