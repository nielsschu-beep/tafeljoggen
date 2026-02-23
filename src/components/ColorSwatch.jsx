import { useState } from 'react'

export default function ColorSwatch({ name, hex, size = 'md', showLabel = true }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const sizes = {
    sm: { width: 40, height: 40, fontSize: '9px' },
    md: { width: 56, height: 56, fontSize: '10px' },
    lg: { width: 72, height: 72, fontSize: '11px' },
    xl: { width: 100, height: 64, fontSize: '12px' },
  }
  const s = sizes[size] || sizes.md

  // Determine if text should be dark or light based on luminance
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  const textColor = luminance > 0.5 ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)'

  return (
    <div
      onClick={handleClick}
      title={`${name}: ${hex} — Click to copy`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: s.width,
          height: s.height,
          backgroundColor: hex,
          borderRadius: 'var(--radius-200)',
          border: luminance > 0.95 ? '1px solid var(--neutral-200)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 100ms ease, box-shadow 100ms ease',
          boxShadow: '0 1px 3px var(--color-black-15)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.08)'
          e.currentTarget.style.boxShadow = '0 4px 12px var(--color-black-20)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 1px 3px var(--color-black-15)'
        }}
      >
        {copied && (
          <span style={{ fontSize: s.fontSize, color: textColor, fontWeight: 700 }}>
            ✓
          </span>
        )}
      </div>
      {showLabel && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '10px', color: 'var(--neutral-700)', fontWeight: 600, lineHeight: 1.2 }}>
            {name}
          </div>
          <div style={{ fontSize: '9px', color: 'var(--neutral-500)', fontFamily: 'monospace', lineHeight: 1.3 }}>
            {hex}
          </div>
        </div>
      )}
    </div>
  )
}
