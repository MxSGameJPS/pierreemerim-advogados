import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Assessoria Jurídica <span>Especializada</span> para Você e sua Empresa
        </h1>
        <p className={styles.heroSubtitle}>
          Advocacia com foco em resultados, agilidade e atendimento personalizado.
        </p>
        <a href="#contact" className={styles.ctaButton}>
          Entre em Contato
        </a>
      </div>
    </section>
  );
}

export default Hero; 