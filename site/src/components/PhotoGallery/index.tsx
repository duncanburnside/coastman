import React, { useState, useMemo, useEffect } from 'react';
import styles from './styles.module.css';

interface PhotoItem {
  original: string;
  thumbnail: string;
  description?: string;
  category: string;
}

interface PhotoGalleryProps {
  photos: PhotoItem[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  
  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(photos.map(photo => photo.category))];
    return cats;
  }, [photos]);
  
  // Filter photos based on selected category
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All') {
      return photos;
    }
    return photos.filter(photo => photo.category === selectedCategory);
  }, [photos, selectedCategory]);
  


  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handleLightboxClose = () => {
    setLightboxIndex(-1);
  };

  const handlePrevious = () => {
    setLightboxIndex(prev => prev > 0 ? prev - 1 : filteredPhotos.length - 1);
  };

  const handleNext = () => {
    setLightboxIndex(prev => prev < filteredPhotos.length - 1 ? prev + 1 : 0);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex >= 0) {
        if (e.key === 'Escape') {
          handleLightboxClose();
        } else if (e.key === 'ArrowLeft') {
          handlePrevious();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <div className={styles.photoGallery}>
      {/* Category Filter */}
      <div className={styles.filterContainer}>
        <h3>Filter by Category:</h3>
        <div className={styles.filterButtons}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Photo Count */}
      <div className={styles.photoCount}>
        Showing {filteredPhotos.length} of {photos.length} photos
      </div>
      
      {/* Grid View */}
      {filteredPhotos.length > 0 ? (
        <>
          <div className={styles.gridContainer}>
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className={styles.gridItem}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={photo.thumbnail}
                  alt={`Photo ${index + 1}`}
                  className={styles.gridImage}
                />
              </div>
            ))}
          </div>
          
          {/* Custom Lightbox Overlay */}
          {lightboxIndex >= 0 && (
            <div className={styles.lightboxOverlay} onClick={handleLightboxClose}>
              <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.lightboxClose} onClick={handleLightboxClose}>
                  ×
                </button>
                <button className={styles.lightboxPrev} onClick={handlePrevious}>
                  ‹
                </button>
                <button className={styles.lightboxNext} onClick={handleNext}>
                  ›
                </button>
                <img
                  src={filteredPhotos[lightboxIndex].original}
                  alt={`Photo ${lightboxIndex + 1}`}
                  className={styles.lightboxImage}
                />
                <div className={styles.lightboxCounter}>
                  {lightboxIndex + 1} of {filteredPhotos.length}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.noPhotos}>
          No photos found in the selected category.
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
