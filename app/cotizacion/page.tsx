"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { MdPhone, MdEmail, MdArrowForward, MdCameraAlt } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Cotizacion() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "calc(80px + 2rem)", // ← ajustado para que no quede debajo del menú
        paddingBottom: "var(--spacing-margin-desktop)",
        // backgroundColor: "#1e1e1e",
      }}
    >
      <header className={styles.header}>
        <span className={styles.badge}>COTIZAMOS su Próximo Evento</span>
        <h1 className={styles.title}>
          Planificamos tu evento con el staff ideal para ti
        </h1>
        <p className={styles.description}>
          Diseñamos experiencias de hospitalidad de alto nivel. Complete el
          formulario para recibir una propuesta personalizada en menos de 24
          horas.
        </p>
      </header>

      <div className={styles.grid}>
        {/* Columna izquierda: información de contacto */}
        <div className={styles.contactInfo}>
          <div className={styles.contactChannels}>
            <h3>CANALES DE CONTACTO</h3>
            <a href="tel:+5112130000" className={styles.contactLink}>
              <MdPhone size={24} className={styles.iconCircle} />
              <div>
                <p className={styles.label}>TELÉFONO FIJO</p>
                <p className={styles.value}>(+511) 213 0000</p>
              </div>
            </a>
            <a
              href="mailto:contacto@magnaperu.com"
              className={styles.contactLink}
            >
              <MdEmail size={24} className={styles.iconCircle} />
              <div>
                <p className={styles.label}>EMAIL CORPORATIVO</p>
                <p className={styles.value}>contacto@magnaperu.com</p>
              </div>
            </a>
          </div>

          <div className={styles.social}>
            <h3>PRESENCIA DIGITAL</h3>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram">
                <MdCameraAlt size={24} />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://wa.me/51900000000" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.mapImage}>
              <Image
                src="/Corporativo/sanisidro.png"
                alt="Mapa de San Isidro, Lima"
                fill
                className={styles.mapImageContent}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className={styles.mapOverlay}>
              <div className={styles.divider} />
              <div>
                <p>Oficina Central</p>
                <p>Av. Javier Prado Este, San Isidro, Lima</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className={styles.formWrapper}>
          <div className="glass-card">
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div>
                  <label>Nombre de la Empresa</label>
                  <input
                    type="text"
                    className="input-underline"
                    placeholder="Ej. Corporación Magna"
                  />
                </div>
                <div>
                  <label>Persona de Contacto</label>
                  <input
                    type="text"
                    className="input-underline"
                    placeholder="Su nombre completo"
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    className="input-underline"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div>
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    className="input-underline"
                    placeholder="+51 --- --- ---"
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div>
                  <label>Servicio Deseado</label>
                  <select className="input-underline">
                    <option value="">Seleccione una opción</option>
                    <option value="hostess">Staff de Hostess Premium</option>
                    <option value="eventos">
                      Producción de Eventos Corporativos
                    </option>
                    <option value="concierge">Servicio de Concierge VIP</option>
                    <option value="seguridad">Seguridad Ejecutiva</option>
                  </select>
                </div>
                <div>
                  <label>Fecha Tentativa</label>
                  <input
                    type="date"
                    className="input-underline"
                    style={{ colorScheme: "dark" }}
                  />
                </div>
              </div>
              <div>
                <label>Requerimientos Específicos</label>
                <textarea
                  className="input-underline"
                  rows={4}
                  placeholder="Describa el perfil del personal, cantidad de invitados o detalles del evento..."
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                ENVIAR SOLICITUD DE COTIZACIÓN
                <MdArrowForward size={20} />
              </button>
              <p className={styles.legal}>
                AL ENVIAR ACEPTA NUESTRA POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE
                DATOS.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
