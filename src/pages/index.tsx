import type {ReactNode} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function VideoLightbox({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
  if (!isOpen) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.lightboxClose} onClick={onClose}>
          ×
        </button>
        <iframe 
          className={styles.lightboxVideo}
          src="https://player.vimeo.com/video/1126286800?autoplay=1&muted=1"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

function TeamHeroSection() {
  return (
    <section className={styles.teamHero}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className={styles.imageContainer}>
              <img 
                src="/img/coastman-team.jpg" 
                alt="CoastMan Africa Team" 
                className={styles.teamImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayText}>
                  <img 
                    src="/img/logo-text-temp.svg" 
                    alt="COASTMAN" 
                    className={styles.logoImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const partnerLogos = [
    { src: '/img/logos/webp/acecor.webp', alt: 'ACECoR Logo', link: 'https://acecor.ucc.edu.gh/' },
    { src: '/img/logos/webp/nfrf.webp', alt: 'NFRF Logo', link: 'https://sshrc-crsh.canada.ca/funding-financement/nfrf-fnfr/index-eng.aspx' },
    { src: '/img/logos/webp/dundee.webp', alt: 'University of Dundee Logo', link: 'https://www.dundee.ac.uk/' },
    { src: '/img/logos/webp/nibio.webp', alt: 'NIBIO Logo', link: 'https://www.nibio.no/en' },
    { src: '/img/logos/webp/ubc.webp', alt: 'University of British Columbia Logo', link: 'https://www.ubc.ca/' },
    { src: '/img/logos/webp/rcn.webp', alt: 'Research Council of Norway Logo', link: 'https://www.forskningsradet.no/en/' },
    { src: '/img/logos/webp/ukri.webp', alt: 'UKRI Logo', link: 'https://www.ukri.org/councils/esrc/' },
    { src: '/img/logos/webp/nmbu.webp', alt: 'NMBU Logo', link: 'https://www.nmbu.no/' },
    { src: '/img/logos/webp/nrf.webp', alt: 'NRF Logo', link: 'https://www.nrf.ac.za/' }
  ];

  return (
    <section className={styles.partners}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
           
          </div>
        </div>
        <div className={styles.logoGrid}>
          {partnerLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logoImage}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.descriptionContent}>
              <h2>Helping vulnerable coastal African communities through co-produced, data-driven management strategies.</h2>
              <p>
                The <strong>CoastMan project</strong> aims to create a decision support system (DSS) that helps restore and conserve these ecosystems. The project involves dynamic mapping of mangrove habitat loss risks, supporting local resilience, designing sustainable livelihood strategies, and developing the DSS. Ultimately, this effort will enhance the adaptive capacities of vulnerable coastal communities and promote climate action for mangrove restoration and conservation.
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/about">
                  Learn More
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/videos">
                  Media
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.heroImage}>
              <div 
                className={styles.videoThumbnail}
                onClick={() => setIsVideoOpen(true)}
              >
                <img 
                  src="/img/video-overlay.jpg" 
                  alt="Mangrove roots ecosystem" 
                  className={styles.heroImageContent}
                />
                <div className={styles.playButton}>
                  <div className={styles.playIcon}>▶</div>
                </div>
              </div>
            </div>
            <p className={styles.videoCaption}>
             Video: Dr. Rashid Sumaila and Dr. Terry Sunderland Introduce the Coastman Project
            </p>
          </div>
        </div>
      </div>
      <VideoLightbox 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </header>
  );
}


function WorkPackagesSection() {
  const workPackages = [
    {
      id: 'wp1',
      title: 'WP1',
      description: 'Mapping drivers and risks of mangrove habitat loss',
      link: '/work-packages/wp1',
      color: 'dark-olive'
    },
    {
      id: 'wp2', 
      title: 'WP2',
      description: 'Social Dynamics and Future Trajectories of Mangrove-Dependent Communities',
      link: '/work-packages/wp2',
      color: 'teal'
    },
    {
      id: 'wp3',
      title: 'WP3', 
      description: 'Policy and Governance: Fishing in mangroves, land tenure, and habitat loss',
      link: '/work-packages/wp3',
      color: 'sage-green'
    },
    {
      id: 'wp4',
      title: 'WP4',
      description: 'Multi-criteria framework for mangrove restoration and conservation', 
      link: '/work-packages/wp4',
      color: 'cream'
    },
    {
      id: 'wp5',
      title: 'WP5',
      description: 'Co-developing a Decision Support System (DSS)',
      link: '/work-packages/wp5',
      color: 'sage-green'
    },
    {
      id: 'wp6',
      title: 'WP6',
      description: 'Co-production and Dissemination',
      link: '/work-packages/wp6',
      color: 'teal'
    }
  ];

  return (
    <section className={styles.workPackages}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className="text--center margin-bottom--lg">
              Work Packages
            </Heading>
          </div>
        </div>
        <div className={styles.wpGrid}>
          {workPackages.map((wp) => (
            <Link key={wp.id} to={wp.link} className={styles.wpCardLink}>
              <div className={`${styles.wpCard} ${styles[wp.color]}`} style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%), url(/img/wp/${wp.id}.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <Heading as="h3" className={styles.wpTitle}>{wp.title}</Heading>
                <div className={styles.wpBottomContent}>
                  <div className={styles.wpTextContainer}>
                    <p className={styles.wpDescription}>{wp.description}</p>
                    <span className={styles.wpChevron}>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home(): ReactNode {
  return (
    <Layout
      title="CoastMan Africa - Decision Support System for Coastal Mangrove Conservation"
      description="Co-developing Decision Support System for Coastal Mangrove-based Socioecological Systems in Eastern and Western Africa">
      <TeamHeroSection />
      <PartnersSection />
      <HomepageHeader />
      <main>
        <WorkPackagesSection />
      </main>
    </Layout>
  );
}
