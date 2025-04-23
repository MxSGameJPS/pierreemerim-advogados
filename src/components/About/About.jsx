import React from "react";
import styles from "./About.module.css";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={styles.aboutContent + " container"}>
        <div
          ref={textRef}
          className={`${styles.aboutText} animate ${
            textIsVisible ? "visible fadeInLeft" : "fadeInLeft"
          }`}
        >
          <h2>
            Sobre <span>Nós</span>
          </h2>
          <p>
            Bem-vindo ao escritório Pierre & Merim Advogados, um time de
            profissionais altamente qualificados e comprometidos com a
            excelência jurídica. Nossa trajetória é marcada pela busca constante
            de soluções inovadoras e eficazes para nossos clientes.
          </p>
          <p>
            Com uma equipe multidisciplinar, oferecemos atendimento
            personalizado e estratégico para cada caso. Nosso compromisso é
            compreender as necessidades específicas de nossos clientes e
            proporcionar a segurança jurídica necessária para suas decisões.
          </p>
          <p>
            Atuamos com ética, transparência e dedicação, mantendo sempre a
            excelência e o profissionalismo como pilares fundamentais de nossa
            prática. Nosso objetivo é construir relacionamentos duradouros
            baseados na confiança e nos resultados positivos.
          </p>
        </div>
        <div
          ref={imageRef}
          className={`${styles.aboutImageContainer} animate ${
            imageIsVisible ? "visible fadeInRight" : "fadeInRight"
          }`}
        >
          {/* Substitua este comentário por uma imagem real do escritório */}
          <img
            src="/images/escritorio.jpg"
            alt="Escritório Pierre & Merim Advogados"
            className={styles.aboutImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "/images/escritorio.jpg";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
