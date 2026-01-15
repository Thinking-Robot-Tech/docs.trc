import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function CourseCard({id, title, description, image, color}) {
  const linkTo = `/${id}/intro`;

  return (
    <Link to={linkTo} className={styles.courseCard}>
      <div className={styles.cardImageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.cardImage}
          onError={(e) => {
            e.target.style.display='none'; 
            e.target.parentNode.style.backgroundColor = color || '#333';
          }}
        />
      </div>
      <div className={styles.cardContent}>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDesc}>{description}</p>
        <div className={styles.cardFooter}>
           Start Learning <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroHeader}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Thinking Robot
        </Heading>
        <p className={styles.heroSubtitle}>
            Build. Learn. Create.
        </p>
        
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="https://thinkingrobot.in"
            style={{backgroundColor: '#ff4757', color: 'white', border: 'none', padding: '0.8rem 2rem'}}>
            🛍️ Explore Shop
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog"
            style={{padding: '0.8rem 2rem'}}>
            Read Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const courses = siteConfig.customFields?.courses || [];

  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Thinking Robot - Embedded Systems, IoT, and Robotics Tutorials">
      
      {/* GLOBAL GRID BACKGROUND - Covers the whole page */}
      <div className={styles.globalGrid}></div>

      <div className={styles.mainWrapper}>
        <HomepageHeader />
        
        <main>
          <div className={styles.coursesSection}>
              <div className={styles.cardContainer}>
                {courses.map((course, idx) => (
                  <CourseCard key={idx} {...course} />
                ))}
              </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}