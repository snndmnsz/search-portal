import React from "react";
import footer from "../../assets/images/footer.png";
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerItems}>
        <div className={styles.footerImage}>
          <img src={footer} alt="footer" />
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.title}>İletişim</div>
          <address className={styles.address}>
            <strong>Adres:</strong> Çifte Havuzlar Mah. Eski Londra Asfaltı Cad.
            Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
          </address>
          <div className={styles.email}>
            <strong>Email:</strong>{" "}
            <a href="mailto:bilgi@tesodev.com">bilgi@tesodev.com</a>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <img src={footer} alt="footer" />
      </div>
    </footer>
  );
}

export default Footer;
