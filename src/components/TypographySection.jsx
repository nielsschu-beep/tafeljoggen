function TypeSpecimen({ label, fontFamily, fontWeight, sizeVar, lhVar, text, isHeading = false, tokenName }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: '24px',
      padding: '16px 0',
      borderBottom: '1px solid var(--neutral-100)',
    }}>
      {/* Meta info */}
      <div style={{ width: '180px', flexShrink: 0 }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--neutral-700)', marginBottom: '4px' }}>
          {label}
        </div>
        <div className="token-chip" style={{ marginBottom: '4px', display: 'inline-block' }}>{tokenName}</div>
        <div style={{ fontSize: '10px', color: 'var(--neutral-500)', lineHeight: 1.5 }}>
          {fontFamily === 'heading' ? 'Lexend Deca' : 'Open Sans'}<br />
          {fontWeight} · <span id={`sz-${label}`}></span>
        </div>
      </div>
      {/* Specimen text */}
      <div
        style={{
          fontFamily: fontFamily === 'heading' ? 'var(--font-heading)' : 'var(--font-body)',
          fontWeight: fontWeight === 'Medium' ? 500 : fontWeight === 'SemiBold' ? 600 : fontWeight === 'Bold' ? 700 : 400,
          fontSize: `var(${sizeVar})`,
          lineHeight: `var(${lhVar})`,
          color: 'var(--neutral-900)',
          flex: 1,
          minWidth: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </div>
    </div>
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
      margin: '32px 0 8px',
      paddingBottom: '8px',
      borderBottom: '1px solid var(--neutral-200)',
    }}>
      {children}
    </h3>
  )
}

export default function TypographySection() {
  const SAMPLE = 'De snelle bruine vos springt over de luie hond'
  const SAMPLE_SHORT = 'Gynzy leert samen'

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
        💡 Schakel tussen <strong>Teacher</strong> en <strong>Student</strong> om de typografieverschillen te zien. Student gebruikt grotere Display & Headline tekst.
      </div>

      <SubTitle>Display — Lexend Deca Medium</SubTitle>
      <TypeSpecimen label="Display Large" fontFamily="heading" fontWeight="Medium"
        sizeVar="--font-display-large-size" lhVar="--font-display-large-lh"
        text={SAMPLE_SHORT} tokenName="font.display.large" />
      <TypeSpecimen label="Display Medium" fontFamily="heading" fontWeight="Medium"
        sizeVar="--font-display-medium-size" lhVar="--font-display-medium-lh"
        text={SAMPLE_SHORT} tokenName="font.display.medium" />
      <TypeSpecimen label="Display Small" fontFamily="heading" fontWeight="Medium"
        sizeVar="--font-display-small-size" lhVar="--font-display-small-lh"
        text={SAMPLE_SHORT} tokenName="font.display.small" />

      <SubTitle>Headline — Lexend Deca Medium</SubTitle>
      <TypeSpecimen label="Headline Large" fontFamily="heading" fontWeight="Medium"
        sizeVar="--font-headline-large-size" lhVar="--font-headline-large-lh"
        text={SAMPLE} tokenName="font.headline.large" />
      <TypeSpecimen label="Headline Medium" fontFamily="heading" fontWeight="Medium"
        sizeVar="--font-headline-medium-size" lhVar="--font-headline-medium-lh"
        text={SAMPLE} tokenName="font.headline.medium" />
      <TypeSpecimen label="Headline Small" fontFamily="heading" fontWeight="Medium"
        sizeVar="--font-headline-small-size" lhVar="--font-headline-small-lh"
        text={SAMPLE} tokenName="font.headline.small" />
      <TypeSpecimen label="Headline XSmall" fontFamily="heading" fontWeight="Medium"
        sizeVar="--font-headline-xsmall-size" lhVar="--font-headline-xsmall-lh"
        text={SAMPLE} tokenName="font.headline.xsmall" />

      <SubTitle>Title — Open Sans SemiBold</SubTitle>
      <TypeSpecimen label="Title Large" fontFamily="body" fontWeight="SemiBold"
        sizeVar="--font-title-large-size" lhVar="--font-title-large-lh"
        text={SAMPLE} tokenName="font.title.large" />
      <TypeSpecimen label="Title Medium" fontFamily="body" fontWeight="SemiBold"
        sizeVar="--font-title-medium-size" lhVar="--font-title-medium-lh"
        text={SAMPLE} tokenName="font.title.medium" />
      <TypeSpecimen label="Title Small" fontFamily="body" fontWeight="SemiBold"
        sizeVar="--font-title-small-size" lhVar="--font-title-small-lh"
        text={SAMPLE} tokenName="font.title.small" />

      <SubTitle>Body — Open Sans</SubTitle>
      {[
        { label: 'Body Large', fw: 'Regular', size: '--font-size-400', lh: '--line-height-400', token: 'font.body.large' },
        { label: 'Body Large Emphasis', fw: 'SemiBold', size: '--font-size-400', lh: '--line-height-400', token: 'font.body.large-emphasis' },
        { label: 'Body Medium', fw: 'Regular', size: '--font-size-300', lh: '--line-height-300', token: 'font.body.medium' },
        { label: 'Body Medium Emphasis', fw: 'SemiBold', size: '--font-size-300', lh: '--line-height-300', token: 'font.body.medium-emphasis' },
        { label: 'Body Small', fw: 'Regular', size: '--font-size-200', lh: '--line-height-200', token: 'font.body.small' },
        { label: 'Body Small Emphasis', fw: 'SemiBold', size: '--font-size-200', lh: '--line-height-200', token: 'font.body.small-emphasis' },
      ].map(s => (
        <TypeSpecimen key={s.label} label={s.label} fontFamily="body" fontWeight={s.fw}
          sizeVar={s.size} lhVar={s.lh}
          text={SAMPLE} tokenName={s.token} />
      ))}

      <SubTitle>Label — Open Sans</SubTitle>
      {[
        { label: 'Label XLarge', fw: 'Regular', size: '--font-size-400', lh: '--line-height-400', token: 'font.label.xlarge' },
        { label: 'Label XLarge Emphasis', fw: 'SemiBold', size: '--font-size-400', lh: '--line-height-400', token: 'font.label.xlarge-emphasis' },
        { label: 'Label Large', fw: 'Regular', size: '--font-size-300', lh: '--line-height-300', token: 'font.label.large' },
        { label: 'Label Large Emphasis', fw: 'SemiBold', size: '--font-size-300', lh: '--line-height-300', token: 'font.label.large-emphasis' },
        { label: 'Label Medium', fw: 'Regular', size: '--font-size-250', lh: '--line-height-250', token: 'font.label.medium' },
        { label: 'Label Medium Emphasis', fw: 'SemiBold', size: '--font-size-250', lh: '--line-height-250', token: 'font.label.medium-emphasis' },
        { label: 'Label Small', fw: 'Regular', size: '--font-size-150', lh: '--line-height-150', token: 'font.label.small' },
        { label: 'Label Small Emphasis', fw: 'SemiBold', size: '--font-size-150', lh: '--line-height-150', token: 'font.label.small-emphasis' },
      ].map(s => (
        <TypeSpecimen key={s.label} label={s.label} fontFamily="body" fontWeight={s.fw}
          sizeVar={s.size} lhVar={s.lh}
          text="Gynzy — Interactief leren" tokenName={s.token} />
      ))}
    </div>
  )
}
