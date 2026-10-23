import { useEffect, useState } from 'react'

function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          'https://picsum.photos/v2/list?limit=30'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch photos')
        }

        const data = await response.json()
        setPhotos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  return { photos, loading, error }
}

export default useFetchPhotos