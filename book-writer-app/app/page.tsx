'use client'

import { useState, useEffect } from 'react'
import { Book } from '@/lib/types'
import { getBooks, deleteBook, saveBook } from '@/lib/storage'
import { initializeVibeCodingBook } from '@/lib/vibe-coding-content'
import { Plus, BookOpen, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  const [showNewBookForm, setShowNewBookForm] = useState(false)
  const [newBookTitle, setNewBookTitle] = useState('')
  const [newBookSubtitle, setNewBookSubtitle] = useState('')

  useEffect(() => {
    // Initialiser le livre Vibe Coding au premier chargement
    initializeVibeCodingBook()
    setBooks(getBooks())
  }, [])

  const createBook = () => {
    if (!newBookTitle.trim()) return

    const newBook: Book = {
      id: Date.now().toString(),
      title: newBookTitle,
      subtitle: newBookSubtitle,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      chapters: [{
        id: '1',
        title: 'Chapitre 1',
        content: '<h1>Chapitre 1</h1><p>Commencez à écrire ici...</p>',
        order: 1
      }]
    }

    saveBook(newBook)
    setBooks([...books, newBook])
    setNewBookTitle('')
    setNewBookSubtitle('')
    setShowNewBookForm(false)
  }

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      deleteBook(id)
      setBooks(books.filter(b => b.id !== id))
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-2">Book Writer</h1>
          <p className="text-gray-600 text-lg">Écrivez vos livres avec élégance</p>
        </div>

        {/* Bouton Nouveau Livre */}
        <div className="mb-8">
          {!showNewBookForm ? (
            <button
              onClick={() => setShowNewBookForm(true)}
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <Plus size={20} />
              Nouveau Livre
            </button>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Créer un nouveau livre</h3>
              <input
                type="text"
                placeholder="Titre du livre"
                value={newBookTitle}
                onChange={(e) => setNewBookTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-black"
                autoFocus
              />
              <input
                type="text"
                placeholder="Sous-titre (optionnel)"
                value={newBookSubtitle}
                onChange={(e) => setNewBookSubtitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex gap-3">
                <button
                  onClick={createBook}
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                >
                  Créer
                </button>
                <button
                  onClick={() => {
                    setShowNewBookForm(false)
                    setNewBookTitle('')
                    setNewBookSubtitle('')
                  }}
                  className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Liste des livres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length === 0 ? (
            <div className="col-span-full text-center py-16 text-gray-500">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
              <p>Aucun livre pour le moment.</p>
              <p className="text-sm">Créez votre premier livre pour commencer.</p>
            </div>
          ) : (
            books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <BookOpen size={24} className="text-gray-400" />
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="p-1 hover:bg-red-50 rounded text-red-600"
                      title="Supprimer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1 line-clamp-2">{book.title}</h3>
                {book.subtitle && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-1">{book.subtitle}</p>
                )}
                
                <div className="text-sm text-gray-500 mb-4">
                  {book.chapters.length} chapitre{book.chapters.length > 1 ? 's' : ''}
                </div>
                
                <Link
                  href={`/book/${book.id}`}
                  className="inline-flex items-center gap-2 text-black font-medium hover:underline"
                >
                  <Edit size={16} />
                  Écrire
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
