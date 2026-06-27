import Link from "next/link";
import { MdMenu } from "react-icons/md"; // Icono de hamburguesa
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MAGNA PERU
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.active}>
            INICIO
          </Link>
          <Link href="/#staff-preview">STAFF</Link>
          <Link href="/#servicios">SERVICIOS</Link>
          <Link href="/#clientes">CLIENTES</Link>
          <Link href="/#nosotros">NOSOTROS</Link>
          <Link href="/trabajaconnosotros">TRABAJA CON NOSOTROS</Link>
          <Link href="/cotizacion" className={styles.ctaButton}>
            COTIZAR
          </Link>
        </div>
        <button className={styles.menuButton} aria-label="Menú">
          <MdMenu size={28} color="var(--foreground)" />
        </button>
      </div>
    </nav>
  );
}
