import React, { useState } from "react";
import styles from "./Contact.module.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: titleRef, inView: titleIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: infoRef, inView: infoIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: formRef, inView: formIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: mapRef, inView: mapIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Formulário (simulação):", formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const mapAddress =
    "Avenida Paraguassú, 1711 - Sala 103 - Centro, Imbé, RS, Brazil";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapAddress
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h2
          ref={titleRef}
          className={`${styles.contactTitle} animate ${
            titleIsVisible ? "visible fadeInUp" : "fadeInUp"
          }`}
        >
          Entre em Contato
        </h2>
        <div className={styles.contactContent}>
          <div
            ref={infoRef}
            className={`${styles.contactInfoMapColumn} animate ${
              infoIsVisible ? "visible fadeInLeft" : "fadeInLeft"
            }`}
          >
            <div className={styles.contactInfo}>
              <h3>Informações de Contato</h3>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt />
                <span>{mapAddress}</span>
              </div>
              <div className={styles.infoItem}>
                <FaPhoneAlt />
                <span>(61) 99622-1136</span>
              </div>
              <div className={styles.infoItem}>
                <FaEnvelope />
                <span>contato@pierreemerim.adv.br</span>
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/pierreemerim_advogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/pierreemerimeadvogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div
              ref={mapRef}
              className={`${styles.mapContainer} animate ${
                mapIsVisible ? "visible fadeInUp" : "fadeInUp"
              }`}
            >
              <h3>Localização</h3>
              <iframe
                src={mapUrl}
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${mapAddress}`}
              ></iframe>
            </div>
          </div>
          <div
            ref={formRef}
            className={`${styles.contactFormContainer} animate ${
              formIsVisible ? "visible fadeInRight" : "fadeInRight"
            }`}
          >
            <h3>Envie sua Mensagem</h3>
            {formSubmitted ? (
              <div className={styles.formSuccess}>
                <p>Sua mensagem foi enviada com sucesso!</p>
                <p>Entraremos em contato em breve.</p>
                <button
                  className={styles.submitButton}
                  onClick={() => setFormSubmitted(false)}
                  style={{ marginTop: "1rem" }}
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label htmlFor="name">Nome Completo:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label htmlFor="email">Seu Melhor Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label htmlFor="subject">Assunto Principal:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label htmlFor="message">Sua Mensagem:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  disabled={isSubmitting}
                ></textarea>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
