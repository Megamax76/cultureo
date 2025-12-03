'use client'

import { useState, useEffect } from 'react'
import { Book, Chapter } from '@/lib/types'
import { getBook, saveBook } from '@/lib/storage'
import Editor from '@/components/Editor'
import { 
  ArrowLeft, Plus, ChevronDown, ChevronRight, Save,
  Menu, X, BookOpen
} from 'lucide-react'
import Link from 'next/link'

export default function BookPage({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<Book | null>(null)
  const [currentChapterId, setCurrentChapterId] = useState<string>('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  useEffect(() => {
    const loadedBook = getBook(params.id)
    if (loadedBook) {
      setBook(loadedBook)
      if (loadedBook.chapters.length > 0) {
        setCurrentChapterId(loadedBook.chapters[0].id)
      }
    }
  }, [params.id])

  const currentChapter = book?.chapters.find(ch => ch.id === currentChapterId)

  const updateChapterContent = (content: string) => {
    if (!book || !currentChapter) return

    const updatedChapters = book.chapters.map(ch =>
      ch.id === currentChapterId ? { ...ch, content } : ch
    )

    const updatedBook = { ...book, chapters: updatedChapters }
    setBook(updatedBook)
    
    // Auto-save (debounced in production, immediate here for demo)
    saveBook(updatedBook)
    setLastSaved(new Date())
  }

  const addChapter = () => {
    if (!book) return

    const newChapter: Chapter = {
      id: Date.now().toString(),
      title: `Chapitre ${book.chapters.length + 1}`,
      content: `<h1>Chapitre ${book.chapters.length + 1}</h1><p></p>`,
      order: book.chapters.length + 1
    }

    const updatedBook = {
      ...book,
      chapters: [...book.chapters, newChapter]
    }
    
    setBook(updatedBook)
    saveBook(updatedBook)
    setCurrentChapterId(newChapter.id)
  }

  const updateChapterTitle = (chapterId: string, newTitle: string) => {
    if (!book) return

    const updatedChapters = book.chapters.map(ch =>
      ch.id === chapterId ? { ...ch, title: newTitle } : ch
    )

    const updatedBook = { ...book, chapters: updatedChapters }
    setBook(updatedBook)
    saveBook(updatedBook)
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`${
        sidebarOpen ? 'w-80' : 'w-0'
      } bg-gray-50 border-r border-gray-200 transition-all overflow-hidden flex flex-col`}>
        <div className="p-6 border-b border-gray-200">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-black mb-4"
          >
            <ArrowLeft size={20} />
            <span>Retour</span>
          </Link>
          
          <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
          {book.subtitle && (
            <p className="text-gray-600 text-sm">{book.subtitle}</p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Chapitres
            </h3>
            <button
              onClick={addChapter}
              className="p-1 hover:bg-gray-200 rounded"
              title="Ajouter un chapitre"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="space-y-1">
            {book.chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setCurrentChapterId(chapter.id)}
                className={`w-full text-left px-3 py-2 rounded transition ${
                  currentChapterId === chapter.id
                    ? 'bg-white shadow-sm border border-gray-200 font-medium'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="text-sm">{chapter.title}</div>
              </button>
            ))}
          </div>
        </div>

        {lastSaved && (
          <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Save size={14} />
              Sauvegardé {lastSaved.toLocaleTimeString()}
            </div>
          </div>
        )}
      </aside>

      {/* Main Editor */}
      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {currentChapter && (
            <input
              type="text"
              value={currentChapter.title}
              onChange={(e) => updateChapterTitle(currentChapter.id, e.target.value)}
              className="text-xl font-semibold bg-transparent border-none outline-none flex-1 focus:bg-gray-50 px-2 py-1 rounded"
            />
          )}
        </div>

        {/* Editor */}
        <div className="flex-1 overflow-y-auto">
          {currentChapter ? (
            <Editor
              content={currentChapter.content}
              onChange={updateChapterContent}
              placeholder="Commencez à écrire votre chapitre..."
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
                <p>Sélectionnez un chapitre pour commencer</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
