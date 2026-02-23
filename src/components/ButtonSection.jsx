const BUTTON_SIZES = [
  { name: 'xs', var: '--btn-height-xs' },
  { name: 's', var: '--btn-height-s' },
  { name: 'sm', var: '--btn-height-sm' },
  { name: 'm', var: '--btn-height-m' },
  { name: 'l', var: '--btn-height-l' },
  { name: 'xl', var: '--btn-height-xl' },
  { name: 'xxl', var: '--btn-height-xxl' },
]

function GynzyButton({ variant, color, heightVar, disabled, children, label }) {
  const getStyle = () => {
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: `var(${heightVar || '--btn-height-m'})`,
      padding: '0 16px',
      borderRadius: 'var(--radius-300)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '14px',
      letterSpacing: '0.2px',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      gap: '6px',
      whiteSpace: 'nowrap',
      position: 'relative',
      overflow: 'hidden',
    }

    if (variant === 'filled' && color === 'sky') {
      return {
        ...base,
        backgroundColor: disabled ? 'var(--btn-filled-sky-bg-disabled)' : 'var(--btn-filled-sky-bg)',
        color: 'var(--btn-filled-sky-label)',
      }
    }
    if (variant === 'filled' && color === 'pumpkin') {
      return {
        ...base,
        backgroundColor: disabled ? 'var(--btn-filled-pumpkin-bg-disabled)' : 'var(--btn-filled-pumpkin-bg)',
        color: 'var(--btn-filled-pumpkin-label)',
      }
    }
    if (variant === 'filled' && color === 'crimson') {
      return {
        ...base,
        backgroundColor: disabled ? 'var(--btn-filled-crimson-bg-disabled)' : 'var(--btn-filled-crimson-bg)',
        color: 'var(--btn-filled-crimson-label)',
      }
    }
    if (variant === 'tonal') {
      return {
        ...base,
        backgroundColor: disabled ? 'var(--btn-tonal-bg-disabled)' : 'var(--btn-tonal-bg)',
        color: disabled ? 'var(--btn-tonal-label-disabled)' : 'var(--btn-tonal-label)',
      }
    }
    if (variant === 'outlined') {
      return {
        ...base,
        backgroundColor: 'transparent',
        border: `1.5px solid ${disabled ? 'var(--btn-outlined-stroke-disabled)' : 'var(--btn-outlined-stroke)'}`,
        color: disabled ? 'var(--btn-outlined-label-disabled)' : 'var(--btn-outlined-label)',
      }
    }
    if (variant === 'text') {
      return {
        ...base,
        backgroundColor: 'transparent',
        color: disabled ? 'var(--btn-text-label-disabled)' : 'var(--btn-text-label)',
        padding: '0 12px',
      }
    }
    return base
  }

  return (
    <button
      style={getStyle()}
      disabled={disabled}
      className="gynzy-btn"
      data-variant={variant}
      data-color={color || variant}
    >
      {children}
    </button>
  )
}

function SubTitle({ children }) {
  return (
    <h3 style={{
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: '13px',
      color: 'var(--neutral-600)',
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      margin: '32px 0 16px',
      paddingBottom: '8px',
      borderBottom: '1px solid var(--neutral-200)',
    }}>
      {children}
    </h3>
  )
}

function StateRow({ label, variant, color, token }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0',
      padding: '10px 0',
      borderBottom: '1px solid var(--neutral-100)',
    }}>
      {/* Label */}
      <div style={{ width: '180px', flexShrink: 0 }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--neutral-800)' }}>{label}</div>
        <div className="token-chip" style={{ marginTop: '3px', display: 'inline-block', fontSize: '10px' }}>{token}</div>
      </div>
      {/* States */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
          <GynzyButton variant={variant} color={color}>Default</GynzyButton>
          <span style={{ fontSize: '10px', color: 'var(--neutral-500)' }}>default</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
          <GynzyButton variant={variant} color={color} disabled>Disabled</GynzyButton>
          <span style={{ fontSize: '10px', color: 'var(--neutral-500)' }}>disabled</span>
        </div>
        {/* Hover is triggered by CSS — show instruction */}
        <div style={{
          fontSize: '11px',
          color: 'var(--neutral-400)',
          fontStyle: 'italic',
          padding: '4px 8px',
          background: 'var(--neutral-100)',
          borderRadius: 'var(--radius-100)',
        }}>
          Hover &amp; active states via CSS
        </div>
      </div>
    </div>
  )
}

export default function ButtonSection() {
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
        💡 Buttons zijn volledig interactief — hover en klik om states te zien. Schakel de <strong>Density</strong> om button hoogtes te vergelijken. <strong>Student</strong> heeft grotere knoppen dan Teacher.
      </div>

      <SubTitle>Variants &amp; States</SubTitle>
      <StateRow label="Filled — Sky" variant="filled" color="sky" token="btn.filled.sky" />
      <StateRow label="Filled — Pumpkin" variant="filled" color="pumpkin" token="btn.filled.pumpkin" />
      <StateRow label="Filled — Crimson" variant="filled" color="crimson" token="btn.filled.crimson" />
      <StateRow label="Tonal" variant="tonal" color={null} token="btn.tonal" />
      <StateRow label="Outlined" variant="outlined" color={null} token="btn.outlined" />
      <StateRow label="Text" variant="text" color={null} token="btn.text" />

      <SubTitle>Size Scale — alle 7 maten (density-afhankelijk)</SubTitle>
      <div style={{
        background: 'var(--neutral-100)',
        borderRadius: 'var(--radius-300)',
        padding: '20px 24px',
        border: '1px solid var(--neutral-200)',
      }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '16px' }}>
          {BUTTON_SIZES.map(({ name, var: heightVar }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <GynzyButton variant="filled" color="sky" heightVar={heightVar}>
                {name}
              </GynzyButton>
              <span className="token-chip" style={{ fontSize: '9px' }}>btn-height-{name}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '16px' }}>
          {BUTTON_SIZES.map(({ name, var: heightVar }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <GynzyButton variant="tonal" heightVar={heightVar}>
                {name}
              </GynzyButton>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          {BUTTON_SIZES.map(({ name, var: heightVar }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <GynzyButton variant="outlined" heightVar={heightVar}>
                {name}
              </GynzyButton>
            </div>
          ))}
        </div>
      </div>

      <SubTitle>Button Heights — Teacher vs Student Vergelijking</SubTitle>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '80px repeat(7, 1fr)',
        gap: '8px',
        alignItems: 'center',
        fontSize: '12px',
        color: 'var(--neutral-600)',
        fontWeight: 600,
        padding: '8px 12px',
        background: 'var(--neutral-100)',
        borderRadius: 'var(--radius-200)',
        marginBottom: '8px',
      }}>
        <span>Size</span>
        {BUTTON_SIZES.map(s => <span key={s.name} style={{ textAlign: 'center' }}>{s.name}</span>)}
      </div>
      {[
        { label: 'Teacher', heights: ['24px','32px','36px','40px','48px','56px','64px'], color: 'var(--color-sky-200)', border: 'var(--color-sky-500)' },
        { label: 'Student', heights: ['32px','40px','48px','56px','64px','72px','80px'], color: 'var(--color-pumpkin-200)', border: 'var(--color-pumpkin-500)' },
      ].map(({ label, heights, color, border }) => (
        <div key={label} style={{
          display: 'grid',
          gridTemplateColumns: '80px repeat(7, 1fr)',
          gap: '8px',
          alignItems: 'end',
          padding: '8px 12px',
          marginBottom: '4px',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--neutral-700)', alignSelf: 'center' }}>{label}</span>
          {heights.map((h, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{
                width: '100%',
                maxWidth: '56px',
                height: h,
                background: color,
                border: `1.5px solid ${border}`,
                borderRadius: 'var(--radius-200)',
              }} />
              <span style={{ fontSize: '9px', color: 'var(--neutral-500)', fontFamily: 'monospace' }}>{h}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
