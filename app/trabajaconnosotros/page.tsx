"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

export default function TrabajaConNosotros() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    work_history: "",
    languages: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const goToStep = (n: number) => {
    if (n >= 1 && n <= 3) {
      setStep(n);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successContainer}>
        <span className={styles.successIcon}>✅</span>
        <h3>Postulación Recibida</h3>
        <p>
          Gracias por tu interés en MAGNA PERU. Nuestro equipo de selección
          revisará tu perfil con el rigor que nos caracteriza y se pondrá en
          contacto contigo a la brevedad.
        </p>
        <button onClick={() => window.location.reload()}>
          VOLVER AL INICIO
        </button>
      </div>
    );
  }

  return (
    <div className={styles.mainGrid}>
      {/* Columna izquierda: texto motivacional + beneficios */}
      <div className={styles.leftSide}>
        <div className={styles.leftContent}>
          <h1>Eleva tu Potencial.</h1>
          <p>
            Únete a la agencia de hostelería corporativa más prestigiosa de
            Perú. Buscamos la excelencia en cada detalle.
          </p>
          <div className={styles.divider}>
            <span>EL ESTÁNDAR MAGNA</span>
          </div>

          {/* NUEVA SECCIÓN: ¿Por qué formar parte de Magna? */}
          <div className={styles.benefits}>
            <h3>¿Por qué formar parte de Magna?</h3>
            <p>
              Nuestro equipo es el reflejo de nuestra marca. Ofrecemos un
              entorno de crecimiento profesional, eventos del más alto nivel y
              una cultura de respeto mutuo.
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <span>✨</span>
                <h4>Eventos Premium</h4>
                <p>
                  Trabajas en los lanzamientos, convenciones y galas
                  corporativas más exclusivas del país.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <span>🤝</span>
                <h4>Red de Talento</h4>
                <p>
                  Conecta con profesionales de alto nivel y forma parte de una
                  comunidad de excelencia.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <span>📈</span>
                <h4>Crecimiento</h4>
                <p>
                  Programas de capacitación constante en etiqueta corporativa y
                  relaciones públicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Columna derecha: formulario multi-step */}
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2>Postulación de Talento</h2>
            <p className={styles.stepsNote}>
              Completa los 3 pasos para postularte
            </p>
            <div className={styles.stepIndicators}>
              <div className={step >= 1 ? styles.activeStep : ""} />
              <div className={step >= 2 ? styles.activeStep : ""} />
              <div className={step >= 3 ? styles.activeStep : ""} />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* PASO 1 */}
            <div
              className={`${styles.step} ${step === 1 ? styles.visible : ""}`}
            >
              <div className={styles.field}>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder=" "
                  value={formData.fullname}
                  onChange={handleChange}
                />
                <label htmlFor="fullname">NOMBRE COMPLETO</label>
              </div>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">CORREO ELECTRÓNICO</label>
                </div>
                <div className={styles.field}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone">TELÉFONO / WHATSAPP</label>
                </div>
              </div>
              <div className={styles.field}>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder=" "
                  value={formData.location}
                  onChange={handleChange}
                />
                <label htmlFor="location">CIUDAD DE RESIDENCIA</label>
              </div>
              <button
                type="button"
                onClick={() => goToStep(2)}
                className={styles.nextButton}
              >
                <span>SIGUIENTE: EXPERIENCIA LABORAL</span>
                <MdArrowForward size={20} />
              </button>
            </div>

            {/* PASO 2 */}
            <div
              className={`${styles.step} ${step === 2 ? styles.visible : ""}`}
            >
              <div className={styles.field}>
                <textarea
                  id="work_history"
                  name="work_history"
                  placeholder=" "
                  value={formData.work_history}
                  onChange={handleChange}
                  rows={6}
                />
                <label htmlFor="work_history">EXPERIENCIA LABORAL</label>
                <div className={styles.hint}>
                  <span>Marcas, tipos de eventos, años en el sector</span>
                  <span>ESTRUCTURAR POR EXPERIENCIAS</span>
                </div>
              </div>
              <div className={styles.field}>
                <input
                  id="languages"
                  name="languages"
                  type="text"
                  placeholder=" "
                  value={formData.languages}
                  onChange={handleChange}
                />
                <label htmlFor="languages">IDIOMAS Y NIVEL</label>
              </div>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  className={styles.backButton}
                >
                  <MdArrowBack size={20} />
                  VOLVER
                </button>
                <button
                  type="button"
                  onClick={() => goToStep(3)}
                  className={styles.nextButton}
                >
                  <span>SIGUIENTE: FOTOS Y CV</span>
                  <MdArrowForward size={20} />
                </button>
              </div>
            </div>

            {/* PASO 3 */}
            <div
              className={`${styles.step} ${step === 3 ? styles.visible : ""}`}
            >
              <div className={styles.photoSection}>
                <p>GALERÍA DE FOTOS PROFESIONALES</p>
                <div className={styles.photoGrid}>
                  <div className={styles.photoSlot}>
                    <input type="file" accept="image/*" />
                    <span>📸</span>
                    <p>ROSTRO</p>
                  </div>
                  <div className={styles.photoSlot}>
                    <input type="file" accept="image/*" />
                    <span>🧑</span>
                    <p>MEDIO CUERPO</p>
                  </div>
                  <div className={styles.photoSlot}>
                    <input type="file" accept="image/*" />
                    <span>🚶</span>
                    <p>CUERPO COMPLETO</p>
                  </div>
                </div>
              </div>

              <div className={styles.cvSection}>
                <p>CURRÍCULUM VITAE</p>
                <div className={styles.cvDrop}>
                  <input type="file" accept=".pdf,.doc,.docx" />
                  <span>📄</span>
                  <div>
                    <span>CARGAR ARCHIVO</span>
                    <p>Adjuntar CV en formato PDF (Máx 5MB)</p>
                  </div>
                </div>
              </div>

              <div className={styles.terms}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="terms">
                  Acepto la <a href="#">Política de Privacidad</a> y autorizo el
                  tratamiento de mis datos para procesos de selección
                  corporativa.
                </label>
              </div>

              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className={styles.backButton}
                >
                  <MdArrowBack size={20} />
                  VOLVER
                </button>
                <button type="submit" className={styles.submitButton}>
                  ENVIAR POSTULACIÓN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
