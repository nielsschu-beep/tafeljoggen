import { useState } from 'react'

function SegmentedControl({ label, options, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
      <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {label}
      </span>
      <div style={{
        display: 'flex',
        background: 'var(--neutral-200)',
        borderRadius: 'var(--radius-round)',
        padding: '2px',
        gap: '2px',
      }}>
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            style={{
              padding: '5px 14px',
              borderRadius: 'var(--radius-round)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              background: value === opt.value ? 'var(--color-white)' : 'transparent',
              color: value === opt.value ? 'var(--primary-1000)' : 'var(--neutral-600)',
              boxShadow: value === opt.value ? '0 1px 3px var(--color-black-20)' : 'none',
              transition: 'all 150ms ease',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ShowcaseHeader({ theme, onThemeChange, density, onDensityChange }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--color-white)',
      borderBottom: '1px solid var(--neutral-200)',
      boxShadow: '0 1px 4px var(--color-black-10)',
      padding: '12px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
    }}>
      {/* Logo + Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-200)',
          background: 'var(--color-gynzy-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.9"/>
            <path d="M8 12h8M12 8v8" stroke="#2f9ad4" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '16px',
            color: 'var(--neutral-900)',
            lineHeight: 1.2,
          }}>
            Gynzy Design System
          </div>
          <div style={{
            fontSize: '11px',
            color: 'var(--neutral-500)',
            fontFamily: 'var(--font-body)',
          }}>
            Component & Token Showcase
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px' }}>
        <SegmentedControl
          label="Rol"
          value={theme}
          onChange={onThemeChange}
          options={[
            { value: 'teacher', label: '👩‍🏫 Teacher' },
            { value: 'student', label: '🧒 Student' },
          ]}
        />
        <SegmentedControl
          label="Density"
          value={density}
          onChange={onDensityChange}
          options={[
            { value: 'short', label: 'Short' },
            { value: 'regular', label: 'Regular' },
            { value: 'tall', label: 'Tall' },
          ]}
        />
        {/* Theme badge */}
        <div style={{
          padding: '4px 12px',
          borderRadius: 'var(--radius-round)',
          background: theme === 'teacher' ? 'var(--color-sky-100)' : 'var(--color-pumpkin-100)',
          border: `1px solid ${theme === 'teacher' ? 'var(--color-sky-300)' : 'var(--color-pumpkin-300)'}`,
          fontSize: '12px',
          fontWeight: 600,
          color: theme === 'teacher' ? 'var(--color-sky-1000)' : 'var(--color-pumpkin-1000)',
          fontFamily: 'var(--font-body)',
          whiteSpace: 'nowrap',
        }}>
          {theme === 'teacher' ? 'Teacher Mode' : 'Student Mode'}
        </div>
      </div>
    </header>
  )
}
