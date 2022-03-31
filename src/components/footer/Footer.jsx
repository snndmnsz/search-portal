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
        <div className={styles.googleMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24096.490178980624!2d29.064760409656248!3d40.980139125415384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7b749c9ecdf%3A0x41ebb6401d7dbb82!2zS2FkxLFrw7Z5LCBTYWhyYXnEsSBDZWRpdCwgMzQ3MzQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1648754009089!5m2!1str!2str"
            frameBorder="0"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
