import './PhotoCard.css'

function PhotoCard({ photo }) {
  return (
    <article className="photo-card">
      <img
        className="photo-card-image"
        src={photo.downloadUrl}
        alt={`Photo by ${photo.author}`}
      />

      <div className="photo-card-details">
        <p className="photo-card-author">{photo.author}</p>

        <button
          className="photo-card-favorite"
          type="button"
          aria-label={`Add photo by ${photo.author} to favourites`}
        >
            &#9825;
        </button>
      </div>
    </article>
  )
}
export default PhotoCard
