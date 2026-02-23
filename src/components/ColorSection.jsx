import ColorSwatch from './ColorSwatch.jsx'

function ColorScale({ name, colors, showName = true }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {showName && (
        <div style={{
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--neutral-700)',
          marginBottom: '8px',
          fontFamily: 'var(--font-body)',
          textTransform: 'capitalize',
        }}>
          {name}
        </div>
      )}
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {colors.map(({ step, hex }) => (
          <ColorSwatch key={step} name={step} hex={hex} size="md" />
        ))}
      </div>
    </div>
  )
}

function SubTitle({ children }) {
  return (
    <h3 style={{
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: '14px',
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

export default function ColorSection() {
  const palettes = {
    sky: [
      { step: '100', hex: '#effaff' }, { step: '200', hex: '#d4eefc' },
      { step: '300', hex: '#b7e3fa' }, { step: '400', hex: '#97d4f5' },
      { step: '500', hex: '#7ac7f0' }, { step: '600', hex: '#59b6e8' },
      { step: '700', hex: '#38a4de' }, { step: '800', hex: '#2f9ad4' },
      { step: '900', hex: '#2b8fc5' }, { step: '1000', hex: '#28759f' },
      { step: '1100', hex: '#1f5e7f' }, { step: '1200', hex: '#1a455b' },
      { step: 'dis', hex: '#a9c8d9' },
    ],
    grey: [
      { step: '100', hex: '#f5f5f8' }, { step: '200', hex: '#e9eaef' },
      { step: '300', hex: '#d1d3de' }, { step: '400', hex: '#aeb7c2' },
      { step: '500', hex: '#8c99a8' }, { step: '600', hex: '#6b7c8e' },
      { step: '700', hex: '#556474' }, { step: '800', hex: '#3f4c5a' },
      { step: '900', hex: '#2a3541' },
    ],
    crimson: [
      { step: '100', hex: '#fdf4f4' }, { step: '200', hex: '#fee7e7' },
      { step: '300', hex: '#fdc9c9' }, { step: '400', hex: '#f9a9a9' },
      { step: '500', hex: '#f58a8a' }, { step: '600', hex: '#ee6868' },
      { step: '700', hex: '#e64545' }, { step: '800', hex: '#e13636' },
      { step: '900', hex: '#d72d2d' }, { step: '1000', hex: '#b42727' },
      { step: '1100', hex: '#921f1f' }, { step: '1200', hex: '#6e1c1c' },
      { step: 'dis', hex: '#e1a9a9' },
    ],
    pumpkin: [
      { step: '100', hex: '#fff4eb' }, { step: '200', hex: '#ffdebd' },
      { step: '300', hex: '#ffcf9e' }, { step: '400', hex: '#ffbd7a' },
      { step: '500', hex: '#ffab57' }, { step: '600', hex: '#ff962e' },
      { step: '700', hex: '#fa830c' }, { step: '800', hex: '#e1760a' },
      { step: '900', hex: '#ce6e0d' }, { step: '1000', hex: '#a4590e' },
      { step: '1100', hex: '#7f440a' }, { step: '1200', hex: '#57300a' },
      { step: 'dis', hex: '#dbbd9f' },
    ],
    lemon: [
      { step: '100', hex: '#fffae5' }, { step: '200', hex: '#fff4bd' },
      { step: '300', hex: '#ffef9e' }, { step: '400', hex: '#ffe979' },
      { step: '500', hex: '#ffe357' }, { step: '600', hex: '#ffdc2e' },
      { step: '700', hex: '#fad20c' }, { step: '800', hex: '#e6c10a' },
      { step: '900', hex: '#ceae0d' }, { step: '1000', hex: '#a48b0e' },
      { step: '1100', hex: '#7e6b0a' }, { step: '1200', hex: '#574a0a' },
    ],
    pear: [
      { step: '100', hex: '#f7fce8' }, { step: '200', hex: '#f0fad1' },
      { step: '300', hex: '#e6f6b6' }, { step: '400', hex: '#daef99' },
      { step: '500', hex: '#cee97c' }, { step: '600', hex: '#bfdf5d' },
      { step: '700', hex: '#afd441' }, { step: '800', hex: '#a4c839' },
      { step: '900', hex: '#96b635' }, { step: '1000', hex: '#7a922f' },
      { step: '1100', hex: '#607425' }, { step: '1200', hex: '#45521e' },
    ],
    mantis: [
      { step: '100', hex: '#f0ffec' }, { step: '200', hex: '#dcfbd5' },
      { step: '300', hex: '#c4f8ba' }, { step: '400', hex: '#aaf19c' },
      { step: '500', hex: '#91eb7f' }, { step: '600', hex: '#75e260' },
      { step: '700', hex: '#59d640' }, { step: '800', hex: '#50cb37' },
      { step: '900', hex: '#4abc34' }, { step: '1000', hex: '#40982f' },
      { step: '1100', hex: '#2d6621' }, { step: '1200', hex: '#28571e' },
      { step: 'dis', hex: '#b3d6ac' },
    ],
    emerald: [
      { step: '100', hex: '#ecfdf4' }, { step: '200', hex: '#caf7e0' },
      { step: '300', hex: '#aff3d1' }, { step: '400', hex: '#94ebbf' },
      { step: '500', hex: '#78e3ad' }, { step: '600', hex: '#5ad899' },
      { step: '700', hex: '#3dcc84' }, { step: '800', hex: '#38bc7a' },
      { step: '900', hex: '#38a870' }, { step: '1000', hex: '#32865c' },
      { step: '1100', hex: '#266847' }, { step: '1200', hex: '#1e4833' },
    ],
    caribbean: [
      { step: '100', hex: '#ecfffe' }, { step: '200', hex: '#d1fafa' },
      { step: '300', hex: '#b6f6f6' }, { step: '400', hex: '#99efef' },
      { step: '500', hex: '#7ce9e9' }, { step: '600', hex: '#5ddfdf' },
      { step: '700', hex: '#3fd4d4' }, { step: '800', hex: '#37c7c7' },
      { step: '900', hex: '#35b6b6' }, { step: '1000', hex: '#2f9292' },
      { step: '1100', hex: '#257474' }, { step: '1200', hex: '#1e5252' },
    ],
    indigo: [
      { step: '100', hex: '#e4eafb' }, { step: '200', hex: '#cad5f7' },
      { step: '300', hex: '#afc0f3' }, { step: '400', hex: '#93a9eb' },
      { step: '500', hex: '#7892e3' }, { step: '600', hex: '#5a79d8' },
      { step: '700', hex: '#3d61cc' }, { step: '800', hex: '#3859bc' },
      { step: '900', hex: '#3854a8' }, { step: '1000', hex: '#324786' },
      { step: '1100', hex: '#263669' }, { step: '1200', hex: '#1e2848' },
    ],
    lavender: [
      { step: '100', hex: '#f5ecff' }, { step: '200', hex: '#e8d5fb' },
      { step: '300', hex: '#d9b9f8' }, { step: '400', hex: '#c69af2' },
      { step: '500', hex: '#b57eec' }, { step: '600', hex: '#a05fe3' },
      { step: '700', hex: '#8c41d9' }, { step: '800', hex: '#8238ce' },
      { step: '900', hex: '#7732bd' }, { step: '1000', hex: '#632e99' },
      { step: '1100', hex: '#4e237a' }, { step: '1200', hex: '#3a1d58' },
    ],
    fuchsia: [
      { step: '100', hex: '#feecff' }, { step: '200', hex: '#fbd5fb' },
      { step: '300', hex: '#f8b9f8' }, { step: '400', hex: '#f29bf2' },
      { step: '500', hex: '#ec7eec' }, { step: '600', hex: '#e35fe3' },
      { step: '700', hex: '#d941d9' }, { step: '800', hex: '#cd37cd' },
      { step: '900', hex: '#bd32bd' }, { step: '1000', hex: '#992e99' },
      { step: '1100', hex: '#7a237a' }, { step: '1200', hex: '#581d58' },
    ],
    cranberry: [
      { step: '100', hex: '#ffecf7' }, { step: '200', hex: '#fbd5e8' },
      { step: '300', hex: '#f8bad9' }, { step: '400', hex: '#f29dc7' },
      { step: '500', hex: '#eb7fb5' }, { step: '600', hex: '#e260a0' },
      { step: '700', hex: '#d7428c' }, { step: '800', hex: '#cc3881' },
      { step: '900', hex: '#bc3477' }, { step: '1000', hex: '#982f63' },
      { step: '1100', hex: '#79244e' }, { step: '1200', hex: '#571e3a' },
    ],
  }

  return (
    <div>
      <SubTitle>Brand Colors</SubTitle>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <div style={{
            width: 120, height: 64,
            background: '#2f9ad4',
            borderRadius: 'var(--radius-300)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--neutral-800)' }}>Gynzy Blue</div>
            <div className="token-chip" style={{ marginTop: '2px' }}>#2f9ad4</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <div style={{
            width: 120, height: 64,
            background: '#ff962e',
            borderRadius: 'var(--radius-300)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--neutral-800)' }}>Gynzy Orange</div>
            <div className="token-chip" style={{ marginTop: '2px' }}>#ff962e</div>
          </div>
        </div>
      </div>

      <SubTitle>Primary + Neutral</SubTitle>
      <ColorScale name="Sky (Primary)" colors={palettes.sky} />
      <ColorScale name="Grey (Neutral)" colors={palettes.grey} />

      <SubTitle>Semantic Palettes</SubTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px 32px' }}>
        {['crimson', 'pumpkin', 'lemon', 'pear', 'mantis', 'emerald', 'caribbean', 'indigo', 'lavender', 'fuchsia', 'cranberry'].map(name => (
          <ColorScale key={name} name={name} colors={palettes[name]} />
        ))}
      </div>

      <SubTitle>Foundation — White & Black Opacity</SubTitle>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--neutral-600)', marginBottom: '8px' }}>White opacity</div>
        <div style={{ display: 'flex', gap: '4px', background: 'var(--neutral-800)', padding: '12px', borderRadius: 'var(--radius-200)' }}>
          {[
            { step: '10%', hex: '#ffffff1a' }, { step: '20%', hex: '#ffffff33' },
            { step: '30%', hex: '#ffffff4d' }, { step: '40%', hex: '#ffffff66' },
            { step: '50%', hex: '#ffffff80' }, { step: '60%', hex: '#ffffff99' },
            { step: '70%', hex: '#ffffffb3' }, { step: '80%', hex: '#ffffffcc' },
            { step: '90%', hex: '#ffffffe6' }, { step: '100%', hex: '#ffffff' },
          ].map(c => (
            <ColorSwatch key={c.step} name={c.step} hex={c.hex} size="sm" />
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--neutral-600)', marginBottom: '8px' }}>Black opacity</div>
        <div style={{ display: 'flex', gap: '4px', background: 'var(--neutral-200)', padding: '12px', borderRadius: 'var(--radius-200)' }}>
          {[
            { step: '10%', hex: '#0000001a' }, { step: '20%', hex: '#00000033' },
            { step: '30%', hex: '#0000004d' }, { step: '40%', hex: '#00000066' },
            { step: '50%', hex: '#00000080' }, { step: '60%', hex: '#00000099' },
            { step: '70%', hex: '#000000b3' }, { step: '80%', hex: '#000000cc' },
            { step: '90%', hex: '#000000e6' }, { step: '100%', hex: '#000000' },
          ].map(c => (
            <ColorSwatch key={c.step} name={c.step} hex={c.hex} size="sm" />
          ))}
        </div>
      </div>
    </div>
  )
}
