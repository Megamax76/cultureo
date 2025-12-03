export interface Book {
  id: string
  title: string
  subtitle?: string
  createdAt: string
  updatedAt: string
  chapters: Chapter[]
}

export interface Chapter {
  id: string
  title: string
  content: string
  order: number
}

export interface EditorProps {
  content: string
  onChange: (content: string) => void
}
