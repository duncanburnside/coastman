import React, { ReactNode } from 'react';
import Card from '@site/src/components/Card';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardImage from '@site/src/components/Card/CardImage';
import styles from './styles.module.css';

export interface CardGridItem {
  id: string;
  title: string;
  content: string;
  role?: string;
  coastmanRole?: string;
  institution?: string;
  link?: string;
  linkText?: string;
  image?: string;
  imageAlt?: string;
}

interface CardGridProps {
  items: CardGridItem[];
  className?: string;
}

const CardGrid: React.FC<CardGridProps> = ({ items, className }) => {
  return (
    <div className={`${styles.cardGrid} ${className || ''}`}>
      {items.map((item) => (
        <div key={item.id} className={styles.cardGridItem}>
          <Card shadow="lw" className={styles.card}>
            {item.image && (
              <CardImage
                cardImageUrl={item.image}
                alt={item.imageAlt || item.title}
              />
            )}
            <CardHeader>
              <h3>{item.title}</h3>
            </CardHeader>
            <CardBody className={styles.cardBody}>
              {item.role && (
                <p className={styles.role}>
                  {item.coastmanRole && (
                    <>
                      {item.coastmanRole}; {item.role}
                    </>
                  )}
                  {!item.coastmanRole && item.role}
                </p>
              )}
              {item.institution && <p className={styles.institution}>{item.institution}</p>}
              {item.content && <p>{item.content}</p>}
            </CardBody>
            {item.link && (
              <CardFooter>
                <a 
                  href={item.link} 
                  className="button button--primary"
                  {...(item.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.linkText || 'Learn More'}
                </a>
              </CardFooter>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
