import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

interface CoverImageProps {
  src: string;
  alt?: string;
  maxHeight?: number;
}

const CoverImage: React.FC<CoverImageProps> = ({ 
  src, 
  alt = 'Cover image', 
  maxHeight = 250 
}) => {
  const { siteConfig } = useDocusaurusContext();
  
  // Handle both relative and absolute URLs
  const imageSrc = src.startsWith('http') ? src : `${siteConfig.baseUrl}${src}`;
  
  return (
    <div className={styles.coverImageContainer} style={{ maxHeight: `${maxHeight}px` }}>
      <img 
        src={imageSrc} 
        alt={alt}
        className={styles.coverImage}
      />
    </div>
  );
};

export default CoverImage;

