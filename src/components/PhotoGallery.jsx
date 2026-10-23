import Header from './Header'
import Footer from './Footer'
import PhotoCard from './PhotoCard'
import './PhotoGallery.css'
import { useState, useCallback, useMemo, useReducer, useEffect } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'


function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const photoId = action.photoId

      if (state.includes(photoId)) {
        return state.filter((id) => id !== photoId)
      }

      return [...state, photoId]
    }

    default:
      return state
  }
}

function PhotoGallery() {
    const { photos, loading, error } = useFetchPhotos()
      
    const [favorites, dispatch] = useReducer(
      favoritesReducer,
      [],
      () => {
        try {
          const savedFavorites = localStorage.getItem('photo-gallery-favorites')
          return savedFavorites ? JSON.parse(savedFavorites) : []
        } catch {
          return []
        }
      }
    )

    useEffect(() => {
      localStorage.setItem(
        'photo-gallery-favorites',
        JSON.stringify(favorites)
      )
    }, [favorites]) 

    const toggleFavorite = useCallback((photoId) => {
      dispatch({ type: 'TOGGLE_FAVORITE', photoId })
    }, [])

    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchChange = useCallback((event) => {
        setSearchQuery(event.target.value)
    }, [])
    const filteredPhotos = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()
        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(query)
        )}, [photos, searchQuery])
    
    if (loading) {
        return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-stone-50">
            <div className="relative flex h-20 w-20 items-center justify-center">
                <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-stone-200 border-t-indigo-600"></div>
                <div className="animate-pulse text-3xl">
                    &#128248;
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-lg font-semibold text-slate-800">
                    Loading your gallery
                </h2>
                <p className="mt-2 animate-pulse text-sm text-slate-500">
                    Fetching beautiful photos for you...
                </p>
            </div>
        </main>
        )
    }
    
    if (error) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-3xl">
                &#9888;
            </div>

            <h2 className="text-xl font-semibold text-slate-800">
                Oops! Something went wrong
            </h2>

            <p className="mt-2 max-w-md text-sm text-slate-600">
                We couldn't load the photos. Please check your internet connection
                and try again.
            </p>

            <p className="mt-3 text-xs text-slate-400">
                Error details: {error}
            </p>
        </main>
        )
    }

    return (
    <div className="gallery">
      <Header />

      <main>
        <section className="gallery-hero">
          <span className="gallery-eyebrow">
            YOUR DAILY DOSE OF INSPIRATION
          </span>

          <h1 className="gallery-title">
            Discover amazing <span>photos.</span>
          </h1>

          <p className="gallery-subtitle">
            Explore beautiful images from photographers around the world.
            Find inspiration, one photo at a time.
          </p>

          <label className="gallery-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search photos by author..."
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search photos by author"
            />
          </label>
        </section>

        <section className="gallery-content">
          <div className="gallery-section-heading">
            <div>
              <h2>Explore the collection</h2>
              <p>A little inspiration for your day.</p>
            </div>

            <span className="gallery-count">
              {filteredPhotos.length} photos
            </span>
          </div>

          <div className="gallery-grid">
            {filteredPhotos.length > 0 ? (
                filteredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  isFavorite={favorites.includes(photo.id)}
                  onToggleFavorite={toggleFavorite}
                />
             ))
            ) : (
            <p>No photographers found. Try another name.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PhotoGallery
