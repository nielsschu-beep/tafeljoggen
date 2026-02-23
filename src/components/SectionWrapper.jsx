export default function SectionWrapper({ id, title, description, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: '80px' }}>
      <div style={{
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid var(--primary-200)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 500,
          fontSize: 'var(--font-headline-medium-size)',
          lineHeight: 'var(--font-headline-medium-lh)',
          color: 'var(--neutral-900)',
          margin: '0 0 4px 0',
          letterSpacing: '0.2px',
        }}>
          {title}
        </h2>
        {description && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--neutral-600)',
            margin: 0,
            lineHeight: '20px',
          }}>
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
