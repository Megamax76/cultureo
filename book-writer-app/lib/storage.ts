import { Book } from './types'

const STORAGE_KEY = 'book-writer-books'

export const getBooks = (): Book[] => {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

export const saveBooks = (books: Book[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
}

export const getBook = (id: string): Book | undefined => {
  const books = getBooks()
  return books.find(book => book.id === id)
}

export const saveBook = (book: Book) => {
  const books = getBooks()
  const index = books.findIndex(b => b.id === book.id)
  
  if (index >= 0) {
    books[index] = { ...book, updatedAt: new Date().toISOString() }
  } else {
    books.push(book)
  }
  
  saveBooks(books)
}

export const deleteBook = (id: string) => {
  const books = getBooks().filter(b => b.id !== id)
  saveBooks(books)
}
