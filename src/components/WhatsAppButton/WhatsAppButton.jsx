import React from "react";
import styles from "./WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "5551996161978"; // Seu número com código do país
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os serviços jurídicos."
  ); // Mensagem inicial (opcional)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;
