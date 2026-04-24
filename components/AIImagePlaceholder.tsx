import React from 'react'

interface AIImagePlaceholderProps {
  prompt: string
  aspectRatio?: string
  className?: string
  style?: React.CSSProperties
}

export default function AIImagePlaceholder({
  prompt,
  aspectRatio = '16/9',
  className = '',
  style,
}: AIImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#293241] flex items-center justify-center ${className}`}
      style={{ aspectRatio: aspectRatio === 'unset' ? undefined : aspectRatio, ...style }}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite',
        }}
      />
      {/* Prompt text */}
      <p
        className="relative z-10 text-center px-6 py-4 text-white/60 text-xs leading-relaxed max-w-xs"
        style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '0.02em' }}
      >
        <span className="block text-white/30 text-[10px] uppercase tracking-widest mb-2">
          AI Image · Replace with:
        </span>
        {prompt}
      </p>
    </div>
  )
}
