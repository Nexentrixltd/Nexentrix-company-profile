// src/components/ui/AdvancedParticleBackground.tsx
import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  z: number // depth for 3D effect
  vx: number
  vy: number
  targetX: number
  targetY: number
  size: number
  baseSize: number
  opacity: number
  speed: number
  phase: number
  color: { r: number; g: number; b: number }
}

interface AdvancedParticleBackgroundProps {
  intensity?: number
  particleCount?: number
}

// All available 3D shapes
const ALL_SHAPES = ['sphere', 'cube', 'pyramid', 'helix', 'wave', 'torus', 'dna', 'galaxy', 
                    'octahedron', 'cylinder', 'cone', 'star', 'ring', 'knot', 'spiral', 'logo']

const AdvancedParticleBackground = ({
  intensity = 0.5,
  particleCount = 800,
}: AdvancedParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const scrollProgressRef = useRef(0)
  const timeRef = useRef(0)
  
  // Random shuffled shapes for each section - memoized once on mount
  const shuffledShapesRef = useRef<string[]>([])
  const currentShapeRef = useRef<string>('sphere')
  
  // Initialize shuffled shapes on mount
  useEffect(() => {
    // Ensure logo appears first, then shuffle the rest
    const otherShapes = ALL_SHAPES.filter(shape => shape !== 'logo')
    const shuffled = ['logo', ...otherShapes.sort(() => Math.random() - 0.5)]
    shuffledShapesRef.current = shuffled
    currentShapeRef.current = 'logo'  // Start with logo
  }, [])

  // Get 3D shape target positions for particles
  const getShapePositions = useCallback((shape: string, particleCount: number, time: number) => {
    const positions: { x: number; y: number; z: number }[] = []
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.35
    const rotation = time * 0.0003  // Slow rotation

    for (let i = 0; i < particleCount; i++) {
      let x = 0, y = 0, z = 0

      switch (shape) {
        case 'cube': {
          // Distribute particles on cube surface
          const face = Math.floor(i / (particleCount / 6))
          const t = (i % (particleCount / 6)) / (particleCount / 6)
          const u = Math.sqrt(t)
          const v = u > 0.001 ? t / u : 0  // Prevent division by zero
          
          switch (face) {
            case 0: x = size; y = (u - 0.5) * 2 * size; z = (v - 0.5) * 2 * size; break
            case 1: x = -size; y = (u - 0.5) * 2 * size; z = (v - 0.5) * 2 * size; break
            case 2: y = size; x = (u - 0.5) * 2 * size; z = (v - 0.5) * 2 * size; break
            case 3: y = -size; x = (u - 0.5) * 2 * size; z = (v - 0.5) * 2 * size; break
            case 4: z = size; x = (u - 0.5) * 2 * size; y = (v - 0.5) * 2 * size; break
            default: z = -size; x = (u - 0.5) * 2 * size; y = (v - 0.5) * 2 * size; break
          }
          break
        }

        case 'sphere': {
          // Fibonacci sphere distribution
          const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount)
          const theta = Math.PI * (1 + Math.sqrt(5)) * i
          
          x = size * Math.sin(phi) * Math.cos(theta)
          y = size * Math.sin(phi) * Math.sin(theta)
          z = size * Math.cos(phi)
          break
        }

        case 'pyramid': {
          const layer = Math.floor(Math.sqrt(i))
          const maxLayer = Math.max(1, Math.floor(Math.sqrt(particleCount)))  // Prevent division by zero
          const indexInLayer = i - layer * layer
          const pointsInLayer = Math.max(1, layer * 4)  // Prevent division by zero
          
          if (layer === 0) {
            x = 0
            y = -size
            z = 0
          } else {
            const angle = (indexInLayer / pointsInLayer) * Math.PI * 2
            const radius = (layer / maxLayer) * size
            x = Math.cos(angle) * radius
            z = Math.sin(angle) * radius
            y = -size + (layer / maxLayer) * size * 2
          }
          break
        }

        case 'helix': {
          const t = i / particleCount
          const angle = t * Math.PI * 8
          const radius = size * 0.6
          
          x = Math.cos(angle) * radius
          z = Math.sin(angle) * radius
          y = (t - 0.5) * size * 2.5
          break
        }

        case 'wave': {
          // Grid with wave deformation
          const cols = Math.max(2, Math.ceil(Math.sqrt(particleCount * 2)))  // At least 2 columns
          const col = i % cols
          const row = Math.floor(i / cols)
          const rows = Math.max(1, Math.ceil(particleCount / cols))
          
          x = (col / cols - 0.5) * size * 2.5
          z = (row / rows - 0.5) * size * 2
          y = Math.sin(col / cols * Math.PI * 4 + time * 0.002) * size * 0.4 +
              Math.cos(row / rows * Math.PI * 4 + time * 0.003) * size * 0.3
          break
        }

        case 'torus': {
          // Donut/ring shape
          const majorRadius = size * 0.7
          const minorRadius = size * 0.3
          const u = (i / particleCount) * Math.PI * 2
          const v = ((i * 17) % particleCount / particleCount) * Math.PI * 2
          
          x = (majorRadius + minorRadius * Math.cos(v)) * Math.cos(u)
          y = (majorRadius + minorRadius * Math.cos(v)) * Math.sin(u)
          z = minorRadius * Math.sin(v)
          break
        }

        case 'dna': {
          // Double helix DNA structure
          const t = i / particleCount
          const angle = t * Math.PI * 12
          const radius = size * 0.4
          const strand = i % 2
          const offset = strand * Math.PI
          
          x = Math.cos(angle + offset) * radius
          z = Math.sin(angle + offset) * radius
          y = (t - 0.5) * size * 3
          
          // Add connecting bars every so often
          if (i % 30 < 2) {
            x *= (i % 2) * 0.5 + 0.25
            z *= (i % 2) * 0.5 + 0.25
          }
          break
        }

        case 'galaxy': {
          // Spiral galaxy shape
          const t = Math.pow(i / particleCount, 0.7)
          const angle = t * Math.PI * 10 + time * 0.001
          const radius = t * size * 1.2
          
          x = Math.cos(angle) * radius
          y = Math.sin(angle) * radius
          z = (Math.random() - 0.5) * size * 0.2 + Math.sin(angle * 3) * size * 0.15
          break
        }

        case 'octahedron': {
          // Eight-sided polyhedron
          const faces = 8
          const face = Math.floor(i / (particleCount / faces))
          const t = (i % (particleCount / faces)) / (particleCount / faces)
          const u = Math.sqrt(t)
          const v = u > 0.001 ? t / u : 0
          
          // Octahedron is like two pyramids base-to-base
          if (face < 4) {
            const angle = (face * Math.PI / 2) + (u * Math.PI / 2)
            x = Math.cos(angle) * size * v
            z = Math.sin(angle) * size * v
            y = size * (1 - v)
          } else {
            const angle = ((face - 4) * Math.PI / 2) + (u * Math.PI / 2)
            x = Math.cos(angle) * size * v
            z = Math.sin(angle) * size * v
            y = -size * (1 - v)
          }
          break
        }

        case 'cylinder': {
          // Cylinder shape
          const layers = Math.ceil(Math.sqrt(particleCount / 3))
          const pointsPerLayer = Math.ceil(particleCount / layers)
          const layer = Math.floor(i / pointsPerLayer)
          const pointInLayer = i % pointsPerLayer
          
          const angle = (pointInLayer / pointsPerLayer) * Math.PI * 2
          const radius = size * 0.7
          
          x = Math.cos(angle) * radius
          z = Math.sin(angle) * radius
          y = (layer / layers - 0.5) * size * 2
          break
        }

        case 'cone': {
          // Cone shape
          const layers = Math.ceil(Math.sqrt(particleCount))
          const layer = Math.floor(i / (particleCount / layers))
          const pointInLayer = i % (particleCount / layers)
          const pointsInLayer = Math.max(1, Math.ceil(particleCount / layers))
          
          const angle = (pointInLayer / pointsInLayer) * Math.PI * 2
          const radius = (1 - layer / layers) * size
          
          x = Math.cos(angle) * radius
          z = Math.sin(angle) * radius
          y = (layer / layers - 0.5) * size * 2
          break
        }

        case 'star': {
          // 3D star/stellated shape
          const spikes = 8
          const spike = Math.floor(i / (particleCount / spikes))
          const t = (i % (particleCount / spikes)) / (particleCount / spikes)
          
          const phi = (spike / spikes) * Math.PI * 2
          const theta = (spike / spikes) * Math.PI
          const radius = size * (0.3 + t * 0.7)
          
          x = radius * Math.sin(theta) * Math.cos(phi)
          y = radius * Math.cos(theta)
          z = radius * Math.sin(theta) * Math.sin(phi)
          break
        }

        case 'ring': {
          // Flat ring/circle
          const angle = (i / particleCount) * Math.PI * 2
          const radiusVar = 0.8 + (i % 10) / 50
          const radius = size * radiusVar
          
          x = Math.cos(angle) * radius
          y = Math.sin(angle) * radius
          z = (Math.random() - 0.5) * size * 0.1
          break
        }

        case 'knot': {
          // Trefoil knot
          const t = (i / particleCount) * Math.PI * 2
          const scale = size * 0.5
          
          x = scale * Math.sin(t) + scale * 0.5 * Math.sin(2 * t)
          y = scale * Math.cos(t) - scale * 0.5 * Math.cos(2 * t)
          z = scale * 0.5 * Math.sin(3 * t)
          break
        }

        case 'spiral': {
          // Archimedean spiral in 3D
          const t = i / particleCount
          const angle = t * Math.PI * 15
          const radius = t * size * 1.2
          
          x = Math.cos(angle) * radius
          z = Math.sin(angle) * radius
          y = (t - 0.5) * size * 2
          break
        }

        case 'logo': {
          // Nexentrix logo - Bold X shape with thick diagonal bars matching the actual logo
          const logoSize = size * 1.0
          const barWidth = logoSize * 0.35  // Very thick bars like in the logo
          const depth = size * 0.25
          
          // Calculate which part of the logo this particle belongs to
          const particlesPerSection = Math.floor(particleCount / 6)
          const section = Math.floor(i / particlesPerSection)
          const localIndex = i % particlesPerSection
          const t = localIndex / Math.max(1, particlesPerSection)
          
          // Create the two thick diagonal bars
          if (section === 0 || section === 1 || section === 2) {
            // First diagonal bar: top-left to bottom-right (THREE layers for thickness)
            const progress = t
            
            // Main diagonal
            const diagonalT = progress
            x = (diagonalT - 0.5) * logoSize * 1.9
            y = (diagonalT - 0.5) * logoSize * 1.9
            
            // Add substantial thickness perpendicular to the diagonal
            const thicknessT = (localIndex % 20) / 20 - 0.5
            const perpAngle = Math.PI / 4 + Math.PI / 2 // Perpendicular to the diagonal
            x += Math.cos(perpAngle) * barWidth * thicknessT
            y += Math.sin(perpAngle) * barWidth * thicknessT
            
            z = depth * (section - 1) * 0.5
          } 
          else {
            // Second diagonal bar: top-right to bottom-left (THREE layers for thickness)
            const progress = t
            
            // Opposite diagonal
            const diagonalT = progress
            x = (diagonalT - 0.5) * logoSize * 1.9
            y = (0.5 - diagonalT) * logoSize * 1.9
            
            // Add thickness perpendicular to this diagonal
            const thicknessT = (localIndex % 20) / 20 - 0.5
            const perpAngle = -Math.PI / 4 + Math.PI / 2
            x += Math.cos(perpAngle) * barWidth * thicknessT
            y += Math.sin(perpAngle) * barWidth * thicknessT
            
            z = depth * (section - 4) * 0.5
          }
          
          // Add small depth variation for 3D effect
          z += (Math.sin(t * Math.PI * 4) * 0.1) * depth
          break
        }

        default:
          x = (Math.random() - 0.5) * size * 2
          y = (Math.random() - 0.5) * size * 2
          z = (Math.random() - 0.5) * size * 2
      }

      // Apply 3D rotation
      const cosR = Math.cos(rotation)
      const sinR = Math.sin(rotation)
      const x2 = x * cosR - z * sinR
      const z2 = x * sinR + z * cosR
      
      // Project to 2D with perspective
      const perspective = 600
      const scale = perspective / (perspective + z2)
      
      // Safety check: ensure all values are finite
      const finalX = isFinite(centerX + x2 * scale) ? centerX + x2 * scale : centerX
      const finalY = isFinite(centerY + y * scale) ? centerY + y * scale : centerY
      const finalZ = isFinite(z2) ? z2 : 0
      
      positions.push({
        x: finalX,
        y: finalY,
        z: finalZ
      })
    }

    return positions
  }, [])

  // Initialize particles with random positions and 3D depth
  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles across entire viewport with some clustering
      const clusterChance = Math.random()
      let x, y
      
      if (clusterChance < 0.7) {
        // 70% random distribution across screen
        x = Math.random() * width
        y = Math.random() * height
      } else {
        // 30% clustered near center for depth
        const angle = Math.random() * Math.PI * 2
        const radius = Math.sqrt(Math.random()) * Math.min(width, height) * 0.4
        x = width / 2 + Math.cos(angle) * radius
        y = height / 2 + Math.sin(angle) * radius
      }
      
      particles.push({
        x: x,
        y: y,
        z: Math.random() * 2 - 1, // depth (-1 to 1)
        vx: 0,
        vy: 0,
        targetX: x,
        targetY: y,
        size: 1.5 + Math.random() * 3,
        baseSize: 1.5 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.7,
        speed: 0.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        color: {
          r: 252 + Math.random() * 3,
          g: 163 + Math.random() * 20,
          b: 17 + Math.random() * 30,
        }
      })
    }
    particlesRef.current = particles
  }, [particleCount])

  // Update particle positions based on target shape
  const updateParticles = useCallback((time: number) => {
    const particles = particlesRef.current
    
    // Get target positions for current shape
    const shapePositions = getShapePositions(currentShapeRef.current, particles.length, time)
    
    particles.forEach((particle, i) => {
      const target = shapePositions[i]
      if (!target) return
      
      // Skip if target has invalid values
      if (!isFinite(target.x) || !isFinite(target.y) || !isFinite(target.z)) {
        return
      }
      
      // Smooth transition to target position
      const dx = target.x - particle.x
      const dy = target.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      // Skip if distance is invalid
      if (!isFinite(distance)) return
      
      // Adaptive speed - faster when far, slower when close
      const speed = Math.min(distance * 0.08, 15)
      
      if (distance > 1) {
        particle.vx = (dx / distance) * speed
        particle.vy = (dy / distance) * speed
      } else {
        particle.vx *= 0.95
        particle.vy *= 0.95
      }
      
      // Apply velocity
      particle.x += particle.vx
      particle.y += particle.vy
      
      // Ensure positions remain finite
      if (!isFinite(particle.x)) particle.x = target.x
      if (!isFinite(particle.y)) particle.y = target.y
      
      // Update z-depth for 3D sorting
      particle.z = target.z
      
      // Pulse size based on depth and distance from target
      const scaledTime = time * 0.001
      const pulse = Math.sin(scaledTime * 2 + particle.phase) * 0.3 + 0.7
      // Clamp depthScale between 0.2 and 1.5 to keep particles visible
      const depthScale = Math.max(0.2, Math.min(1.5, (particle.z + 600) / 1200))
      particle.size = particle.baseSize * pulse * depthScale
      
      // Update opacity based on depth (fade far particles)
      particle.opacity = Math.max(0.2, Math.min(1.0, 0.4 + depthScale * 0.6))
    })
  }, [getShapePositions])

  // Draw particles with glow and trails
  const draw = useCallback((
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height)
    
    // Create composite for glow effect
    ctx.shadowBlur = 0
    ctx.globalCompositeOperation = 'lighter'
    
    const particles = particlesRef.current
    
    // Sort particles by z-depth for pseudo-3D effect
    const sortedParticles = [...particles].sort((a, b) => a.z - b.z)
    
    sortedParticles.forEach((particle) => {
      // Skip particles with invalid positions
      if (!isFinite(particle.x) || !isFinite(particle.y) || !isFinite(particle.size)) {
        return
      }
      
      // Calculate perspective scale based on z-depth
      const perspective = 1 + particle.z * 0.0005  // Subtle perspective
      const size = Math.max(0.5, particle.size * perspective)  // Ensure positive size
      const depthFactor = (particle.z + 1) / 2
      
      // Create radial gradient for each particle
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, Math.max(0.5, size * 1.5)  // Ensure positive radius
      )
      
      // Color based on depth and position
      const r = particle.color.r
      const g = particle.color.g
      const b = particle.color.b
      const alpha = particle.opacity * intensity * (0.6 + depthFactor * 0.6)
      
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 1.2})`)
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`)
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
      
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, size * 1.2, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
      
      // Inner core
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, size * 0.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 200, 100, ${alpha * 0.8})`
      ctx.fill()
    })
    
    // Draw connecting lines between nearby particles (for web-like effect)
    ctx.globalCompositeOperation = 'screen'
    ctx.beginPath()
    ctx.lineWidth = 0.5
    
    // Only draw connections for performance - limit to 2 connections per particle
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i]
      let connections = 0
      
      for (let j = i + 1; j < particles.length && connections < 2; j++) {
        const p2 = particles[j]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {  // Increased from 60 for more visible connections
          const intensity = (1 - distance / 100) * 0.5  // Increased from 0.3
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(252, 163, 17, ${intensity * p1.opacity * p2.opacity})`
          ctx.stroke()
          connections++
        }
      }
    }
    
    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over'
  }, [intensity])

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Canvas is fixed, so use clientX/Y directly
    mouseRef.current = {
      x: e.clientX,
      y: e.clientY,
      active: true
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: 0, y: 0, active: false }
  }, [])

  // Handle scroll
  const handleScroll = useCallback(() => {
    const scrollMax = document.body.scrollHeight - window.innerHeight
    scrollProgressRef.current = scrollMax > 0 ? window.scrollY / scrollMax : 0
    
    // Update current shape based on scroll position - one shape per section
    const scroll = scrollProgressRef.current
    const shuffledShapes = shuffledShapesRef.current
    
    if (shuffledShapes.length > 0) {
      // Divide scroll into equal sections for each shape
      const sectionCount = shuffledShapes.length
      const sectionIndex = Math.min(Math.floor(scroll * sectionCount), sectionCount - 1)
      currentShapeRef.current = shuffledShapes[sectionIndex]
    }
  }, [])

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    // Use window dimensions for full coverage
    const width = window.innerWidth
    const height = window.innerHeight
    
    canvas.width = width
    canvas.height = height
    
    initParticles(width, height)
  }, [initParticles])

  // Animation loop
  const animate = useCallback(function animate(): void {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const width = canvas.width
    const height = canvas.height
    
    if (width === 0 || height === 0) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }
    
    // Update time - increase by larger amount for visible animation
    timeRef.current += 16  // Equivalent to ~60fps frame delta
    
    // Update particles with current time
    updateParticles(timeRef.current)
    
    // Draw everything
    draw(ctx, width, height)
    
    animationRef.current = requestAnimationFrame(animate)
  }, [updateParticles, draw])

  // Set up event listeners
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    handleResize()
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [handleResize, handleScroll, handleMouseMove, handleMouseLeave, animate])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

export default AdvancedParticleBackground