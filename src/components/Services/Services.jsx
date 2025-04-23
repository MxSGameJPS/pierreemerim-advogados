import React from "react";
import styles from "./Services.module.css";
import {
  FaGavel,
  FaBriefcase,
  FaUsers,
  FaBuilding,
  FaLandmark,
  FaBalanceScale,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Dados das áreas de atuação
const servicesData = [
  {
    icon: <FaGavel />,
    title: "Direito Civil",
    description:
      "Assessoria completa em questões cíveis, incluindo contratos, responsabilidade civil, indenizações e direitos do consumidor.",
  },
  {
    icon: <FaBriefcase />,
    title: "Direito Empresarial",
    description:
      "Apoio jurídico para empresas em formação, operação, contratos comerciais e resolução de conflitos societários.",
  },
  {
    icon: <FaUsers />,
    title: "Direito de Família",
    description:
      "Suporte em divórcios, inventários, guarda de filhos, pensão alimentícia e outros assuntos familiares.",
  },
  {
    icon: <FaBuilding />,
    title: "Direito Imobiliário",
    description:
      "Orientação em transações imobiliárias, locações, condomínios e questões de usucapião.",
  },
  {
    icon: <FaLandmark />,
    title: "Direito Administrativo",
    description:
      "Representação em processos administrativos, licitações e contratos com o poder público.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Direito Tributário",
    description:
      "Planejamento tributário, defesa em autuações fiscais e recuperação de tributos pagos indevidamente.",
  },
];

function Services() {
  const { ref: titleRef, inView: titleIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: gridRef, inView: gridIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <h2
          ref={titleRef}
          className={`text-center ${styles.servicesTitle} animate ${
            titleIsVisible ? "visible fadeInUp" : "fadeInUp"
          }`}
        >
          Áreas de Atuação
        </h2>
        <div ref={gridRef} className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div
              className={`${styles.serviceCard} animate fadeInUp ${
                gridIsVisible ? "visible" : ""
              }`}
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
