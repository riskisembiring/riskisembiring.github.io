import React from 'react';
import './Gallery.css';

const photos = [
  'images/bakung.jpg',
  'images/bakung.jpg',
];

function Gallery() {
  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <div key={index} className="gallery-item">
          <img src={photo} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;