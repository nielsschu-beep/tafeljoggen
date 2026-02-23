import { useEffect, useRef, useState } from 'react'
import { useTheme } from './hooks/useTheme.js'
import ShowcaseHeader from './components/ShowcaseHeader.jsx'
import SectionWrapper from './components/SectionWrapper.jsx'
import ColorSection from './components/ColorSection.jsx'
import TypographySection from './components/TypographySection.jsx'
import SpacingSection from './components/SpacingSection.jsx'
import BorderRadiusSection from './components/BorderRadiusSection.jsx'
import ButtonSection from './components/ButtonSection.jsx'
import IconSizeSection from './components/IconSizeSection.jsx'

const NAV_ITEMS = [
  { id: 'colors', label: '🎨 Kleuren', icon: '●' },
  { id: 'typography', label: '✍️ Typografie', icon: '●' },
  { id: 'spacing', label: '📏 Spacing', icon: '●' },
  { id: 'border-radius', label: '⬛ Radius', icon: '●' },
  { id: 'buttons', label: '🔘 Buttons', icon: '●' },
  { id: 'icons', label: '🔷 Icon Sizes', icon: '●' },
]

function SideNav({ activeSection }) {
  return (
    <nav style={{
      position: 'sticky',
      top: '72px',
      height: 'fit-content',
      width: '192px',
      flexShrink: 0,
      padding: '24px 0',
    }}>
      <div style={{
        fontSize: '10px',
        fontWeight: 700,
        color: 'var(--neutral-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.8px',
        marginBottom: '12px',
        paddingLeft: '12px',
      }}>
        Inhoud
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 12px',
                  borderRadius: 'var(--radius-200)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--primary-1000)' : 'var(--neutral-600)',
                  background: isActive ? 'var(--primary-100)' : 'transparent',
                  borderLeft: `2px solid ${isActive ? 'var(--primary-700)' : 'transparent'}`,
                  transition: 'all 150ms ease',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'var(--neutral-100)'
                    e.currentTarget.style.color = 'var(--neutral-800)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--neutral-600)'
                  }
                }}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Token count badge */}
      <div style={{
        marginTop: '24px',
        padding: '12px',
        background: 'var(--neutral-100)',
        borderRadius: 'var(--radius-200)',
        border: '1px solid var(--neutral-200)',
      }}>
        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
          Token Stats
        </div>
        {[
          { label: 'Kleuren', value: '150+' },
          { label: 'Sizes', value: '27' },
          { label: 'Radiuses', value: '12' },
          { label: 'Font styles', value: '20+' },
          { label: 'Themes', value: '2' },
        ].map(({ label, value }) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '11px', color: 'var(--neutral-600)' }}>{label}</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary-1000)' }}>{value}</span>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default function App() {
  const { theme, setTheme, density, setDensity } = useTheme()
  const [activeSection, setActiveSection] = useState('colors')
  const observerRef = useRef(null)

  // IntersectionObserver for active nav highlighting
  useEffect(() => {
    const options = { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--neutral-100)' }}>
      <ShowcaseHeader
        theme={theme}
        onThemeChange={setTheme}
        density={density}
        onDensityChange={setDensity}
      />

      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        gap: '0',
        padding: '0 24px',
      }}>
        {/* Sidebar */}
        <SideNav activeSection={activeSection} />

        {/* Divider */}
        <div style={{ width: '1px', background: 'var(--neutral-200)', margin: '0 24px', flexShrink: 0 }} />

        {/* Main content */}
        <main style={{
          flex: 1,
          minWidth: 0,
          padding: '32px 0 96px',
          display: 'flex',
          flexDirection: 'column',
          gap: '64px',
        }}>
          {/* Hero */}
          <div style={{
            background: `linear-gradient(135deg, var(--primary-100) 0%, var(--primary-200) 100%)`,
            borderRadius: 'var(--radius-400)',
            padding: '32px 40px',
            border: '1px solid var(--primary-300)',
            marginBottom: '-16px',
          }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              fontSize: 'var(--font-display-large-size)',
              lineHeight: 'var(--font-display-large-lh)',
              color: 'var(--primary-1200)',
              marginBottom: '8px',
            }}>
              Gynzy Design System
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--primary-1000)',
              lineHeight: '24px',
              maxWidth: '560px',
            }}>
              Een visuele showcase van alle design tokens — kleuren, typografie, spacing, border radius, buttons en icon sizes. Schakel tussen Teacher en Student thema's om de visuele verschillen te zien.
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
              {['Lexend Deca', 'Open Sans', 'CSS Custom Properties', 'React', 'Tailwind v4'].map(tag => (
                <span key={tag} style={{
                  padding: '4px 12px',
                  background: 'var(--color-white)',
                  borderRadius: 'var(--radius-round)',
                  border: '1px solid var(--primary-300)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--primary-1000)',
                  fontFamily: 'var(--font-body)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <SectionWrapper id="colors" title="Kleurpaletten"
            description="Alle 13 kleurpaletten met 100–1200 schaal, brand kleuren, en foundation wit/zwart met opacity varianten.">
            <ColorSection />
          </SectionWrapper>

          <SectionWrapper id="typography" title="Typografie"
            description="Lexend Deca voor headings (Display, Headline) en Open Sans voor body (Body, Label). Schakel thema voor grootteverschillen.">
            <TypographySection />
          </SectionWrapper>

          <SectionWrapper id="spacing" title="Spacing Schaal"
            description="27 stappen van 0px tot 256px. Gebruikt als basis voor gap, padding, margin en sizing tokens.">
            <SpacingSection />
          </SectionWrapper>

          <SectionWrapper id="border-radius" title="Border Radius"
            description="12 radius tokens. Student heeft systematisch grotere radii voor een kindvriendelijkere, speelsere UI.">
            <BorderRadiusSection />
          </SectionWrapper>

          <SectionWrapper id="buttons" title="Button Varianten"
            description="6 varianten × 3 kleuren × alle states. Density switcher verandert de minimum hoogte live.">
            <ButtonSection />
          </SectionWrapper>

          <SectionWrapper id="icons" title="Icon Groottes"
            description="8 icon-height tokens van xs (12px) tot 4xl (40px), plus uitgebreide 5xl–7xl serie.">
            <IconSizeSection />
          </SectionWrapper>
        </main>
      </div>
    </div>
  )
}
