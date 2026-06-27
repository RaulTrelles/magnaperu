import Link from "next/link";
import styles from "./Footer.module.css";
import { MdPhone, MdEmail, MdPublic, MdShare } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container grid grid-cols-3">
        {/* Columna 1: Descripción */}
        <div className={styles.about}>
          <div className={styles.logo}>MAGNA PERU</div>
          <p className={styles.description}>
            Expertos en personal de élite para eventos corporativos y
            activaciones de marca. Presencia nacional con estándares globales.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div className={styles.links}>
          <h4>EXPLORA</h4>
          <Link href="#">TÉRMINOS Y CONDICIONES</Link>
          <Link href="#">POLÍTICA DE PRIVACIDAD</Link>
          <Link href="#">CONTACTO</Link>
        </div>

        {/* Columna 3: Contacto */}
        <div className={styles.contact}>
          <h4>CONTACTO</h4>
          <p className={styles.address}>San Isidro, Lima - Perú</p>

          <p className={styles.contactItem}>
            <MdPhone size={24} color="var(--color-primary)" />
            <span>+51 987 654 321</span>
          </p>

          <p className={styles.contactItem}>
            <MdEmail size={24} color="var(--color-primary)" />
            <span>contacto@magnaperu.com</span>
          </p>

          <div className={styles.social}>
            <MdPublic size={32} color="var(--color-primary)" />
            <MdShare size={32} color="var(--color-primary)" />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2026 MAGNA PERU SAC. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
