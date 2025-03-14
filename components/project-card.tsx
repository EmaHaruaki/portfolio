interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link?: string
}

export function ProjectCard({ title, description, imageUrl, link = "#" }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video overflow-hidden rounded-lg"
    >
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/70 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-white/80 text-center text-sm">{description}</p>
      </div>
    </a>
  )
}

