
import Header from './Header'
import Footer from './Footer'
import PhotoCard from './PhotoCard'
import './PhotoGallery.css'

const samplePhotos = [
  {
    id: '1011',
    author: 'Nature Photographer',
    downloadUrl: 'https://picsum.photos/id/1011/600/400',
  },
  {
    id: '1015',
    author: 'Mountain Explorer',
    downloadUrl: 'https://picsum.photos/id/1015/600/400',
  },
  {
    id: '1025',
    author: 'Wildlife Photographer',
    downloadUrl: 'https://picsum.photos/id/1025/600/400',
  },
  {
    id: '1035',
    author: 'Travel Photographer',
    downloadUrl: 'https://picsum.photos/id/1035/600/400',
  },
  {
    id: '1040',
    author: 'Landscape Artist',
    downloadUrl: 'https://picsum.photos/id/1040/600/400',
  },
  {
    id: '106',
    author: 'Creative Explorer',
    downloadUrl: 'https://picsum.photos/id/106/600/400',
  },
  {
    id: '1074',
    author: 'City Photographer',
    downloadUrl: 'https://picsum.photos/id/1074/600/400',
  },
  {
    id: '1084',
    author: 'Nature Lover',
    downloadUrl: 'https://picsum.photos/id/1084/600/400',
  },
]

function PhotoGallery() {
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
              {samplePhotos.length} photos
            </span>
          </div>

          <div className="gallery-grid">
            {samplePhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PhotoGallery
