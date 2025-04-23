import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const whatsappNumber = '5551996161978'; // Número com código do país, sem + ou espaços
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent + " container"}>
        <div className={styles.footerInfo}>
          {/* Usar a logo com fundo branco aqui, pois o footer é preto */}
          <img
            src="/images/logo-fundo-branco.jpg"
            alt="Pierre & Merim Advogados Logo"
            className={styles.footerLogo}
          />
          <p>
          Avenida Paraguassú, nº 1711 - Sala 103 - Centro, <br/>Imbé, RS, Brazil</p>
          <p>Telefone: (51) 2192-0050</p>
          <p>Email: contato@pierreemerim.adv.br</p>
        </div>
        <div className={styles.footerLinks}>
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre Nós</a>
            </li>
            <li>
              <a href="#services">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
            {/* Adicionar link para política de privacidade se necessário */}
          </ul>
        </div>
        <div className={styles.footerSocial}>
          <h4>Conecte-se</h4>
          <a
            href="https://www.instagram.com/pierreemerim_advogados/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/pierreemerimeadvogados/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>
          {/* Adicionar outras redes se houver */}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Pierre & Merim Advogados. Todos os
          direitos reservados.
        </p>
        {/* Adicionar OAB se necessário */}
      </div>
    </footer>
  );
}

export default Footer;
