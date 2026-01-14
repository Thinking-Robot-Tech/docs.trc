import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function CourseCard({id, title, description, image, color}) {
  return (
    <div className={styles.courseCard}>
      {image && (
        <div className={styles.cardImage} style={{borderBottom: `4px solid ${color}`}}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 style={{color: color}}>{title}</h3>
        <p>{description}</p>
        <Link
          className="button button--primary button--lg"
          to={`/${id}/intro`}
          style={{backgroundColor: color, borderColor: color}}>
          Start Learning →
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Welcome to Thinking Robot 🤖
        </Heading>
        <p className={styles.heroTagline}>
          Learn IoT, Robotics & Embedded Systems through hands-on projects
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const courses = siteConfig.customFields.courses;
  
  return (
    <Layout
      title="Home"
      description="Learn IoT, Robotics & Embedded Systems">
      <HomepageHeader />
      <main>
        <section className={styles.coursesSection}>
          <div className="container">
            <div className={styles.courseGrid}>
              {courses.map((course, idx) => (
                <CourseCard key={idx} {...course} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
