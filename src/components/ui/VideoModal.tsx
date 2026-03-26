import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title?: string
}

const VideoModal = ({ isOpen, onClose, videoUrl, title = 'Demo Video' }: VideoModalProps) => {
  if (!isOpen) return null

  // Determine if it's a YouTube URL and convert to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]
        : url.split('v=')[1]?.split('&')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
    return url
  }

  const embedUrl = getEmbedUrl(videoUrl)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-background rounded-lg w-full max-w-4xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button 
            onClick={onClose}
            title="Close modal"
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="aspect-video w-full bg-black">
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default VideoModal
