// src/components/layout/PageLayout.tsx
import type { ReactNode } from 'react'
import AnimatedDotsBackground from '../ui/AnimatedDotsBackground'

interface PageLayoutProps {
    children: ReactNode
    intensity?: number
    particleCount?: number
}

const PageLayout = ({
    children,
    intensity = 0.5,
    particleCount = 800
}: PageLayoutProps) => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Advanced Animated Particle Background */}
            <AnimatedDotsBackground
                intensity={intensity}
                particleCount={particleCount}
            />

            {/* Subtle vignette overlay for better content readability */}
            <div className="fixed inset-0 pointer-events-none z-[5]"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0,0,0,0.15) 100%)'
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default PageLayout