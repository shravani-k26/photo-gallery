import './PhotoCard.css'

function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <article className="photo-card">
      <img
        className="photo-card-image"
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
      />

      <div className="photo-card-details">
        <p className="photo-card-author">{photo.author}</p>

        <button
          className={`photo-card-favorite ${
            isFavorite ? 'is-favorite' : ''
          }`}
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={
            isFavorite
              ? `Remove photo by ${photo.author} from favourites`
              : `Add photo by ${photo.author} to favourites`
          }
          aria-pressed={isFavorite}
        >
          {isFavorite ? <span>&#9829;</span> : <span>&#9825;</span>}
        </button>
      </div>
    </article>
  )
}

export default PhotoCard
