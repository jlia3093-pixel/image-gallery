function ImageCard({ image }) {
  return (
    <article className="image-card">
      <div className="image-wrapper">
        <img
          src={image.url}
          alt={image.title}
          loading="lazy"
        />
        <span className="image-category">
          {image.category}
        </span>
      </div>

      <div className="image-info">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </article>
  );
}

export default ImageCard;