import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { MdVerified, MdSchool } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          {/* <span className={styles.heroBadge}>MAGNA PERU S.A.C</span> */}
          <h1 className={styles.heroTitle}>
            Presencia que impacta.
            <br />
            <span className={styles.heroSub}>Servicio que inspira.</span>
          </h1>
          <p className={styles.heroDescription}>
            Elevamos el estándar de hospitalidad corporativa en el Perú. Staff
            de élite para los eventos y marcas más exigentes del mercado
            nacional.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/cotizacion" className={styles.btnPrimary}>
              SOLICITAR COTIZACIÓN
            </Link>
            <Link href="#staff-preview" className={styles.btnSecondary}>
              VER STAFF
            </Link>
          </div>
          <div className={styles.trustIndicators}>
            <div>
              <span>500+</span>
              <span>Eventos Realizados</span>
            </div>
            <div>
              <span>200+</span>
              <span>Clientes Atendidos</span>
            </div>
            <div>
              <span>300+</span>
              <span>Staff Disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Preview */}
      <section className={styles.staffSection} id="staff-preview">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Nuestra Excelencia</span>
            <h2 className={styles.sectionTitle}>Staff Profesional</h2>
            <p className={styles.sectionDescription}>
              Explore nuestra galería central de talentos. Una selección curada
              de los perfiles más destacados de nuestra agencia.
            </p>
            <div className={styles.filterButtons}>
              <button className={styles.activeFilter}>TODOS</button>
              <button>CORPORATIVO</button>
              <button>BTL</button>
              <button>FERIAS</button>
              <button>CONGRESOS</button>
            </div>
          </div>
          <div className={styles.staffGrid}>
            {/* Card 1 */}
            <div className={styles.staffCard}>
              <Image
                src="/Staff/Alessandra-Valery-v2.png" // ← ruta local
                alt="Alessandra Valery"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.staffInfo}>
                <span>Corporativo / Protocolo</span>
                <h3>Alessandra Valery</h3>
                <a href="#">
                  SOLICITAR ESTE PERFIL{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`${styles.staffCard} ${styles.mt12}`}>
              <Image
                src="/Staff/Sebastian-Ruiz-v3.png" // ← ruta local
                alt="Sebastian Ruiz"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.staffInfo}>
                <span>Congresos / Ferias</span>
                <h3>Sebastian Ruiz</h3>
                <a href="#">
                  SOLICITAR ESTE PERFIL{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.staffCard}>
              <Image
                src="/Staff/Camila-Santoro-v2.png" // ← ruta local
                alt="Camila Santoro"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.staffInfo}>
                <span>BTL / Lanzamientos</span>
                <h3>Camila Santoro</h3>
                <a href="#">
                  SOLICITAR ESTE PERFIL{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.staffCard}>
              <Image
                src="/Staff/Santiago Mendez v2.png" // ← ruta local
                alt="Santiago Mendez"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.staffInfo}>
                <span>MAESTRO DE CEREMONIAS / GALA</span>
                <h3>Santiago Mendez</h3>
                <a href="#">
                  SOLICITAR ESTE PERFIL{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className={`${styles.staffCard} ${styles.mt12}`}>
              <Image
                src="/Staff/Daniel Ortega.png" // ← ruta local
                alt="Daniel Ortega"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.staffInfo}>
                <span>Congresos / Gala</span>
                <h3>Daniel Ortega</h3>
                <a href="#">
                  SOLICITAR ESTE PERFIL{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className={styles.staffCard}>
              <Image
                src="/Staff/Elena Petrov.png" // ← ruta local
                alt="Elena Petrov"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.staffInfo}>
                <span>BTL / Embajadora</span>
                <h3>Elena Petrov</h3>
                <a href="#">
                  SOLICITAR ESTE PERFIL{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.staffCTA}>
            <div>
              <h2>¿Busca un perfil específico?</h2>
              <p>Contamos con una base de datos de más de 500 profesionales.</p>
              <button className={styles.btnSecondary}>
                DESCARGAR PORTFOLIO COMPLETO
              </button>
            </div>
            <div className={styles.staffCTAImage} />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className={styles.servicesSection} id="servicios">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>SERVICIOS DE ÉLITE</span>
            <h2 className={styles.sectionTitle}>
              Excelencia Operativa en Cada Detalle
            </h2>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Anfitrionas_Corporativas.png" // ← ruta local
                alt="Daniel Ortega"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Anfitrionas Corporativas</h3>
                <p>
                  Protocolo y distinción para los eventos empresariales más
                  exclusivos.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Activaciones-BTL-V2.png" // ← ruta local
                alt="Activaciones BTL"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Activaciones BTL</h3>
                <p>
                  Impacto directo y experiencias memorables que conectan con su
                  audiencia.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Lanzamientos-de-Marca.png" // ← ruta local
                alt="Lanzamiento de Marca"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Lanzamientos de Marca</h3>
                <p>
                  Presentaciones impecables para el debut de sus productos más
                  esperados.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Impulsadoras.png" // ← ruta local
                alt="Impulsadoras"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Impulsadoras</h3>
                <p>
                  Dinamismo y persuasión en el punto de venta para potenciar sus
                  resultados.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/modelos-v2.png" // ← ruta local
                alt="Modelos"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Modelos</h3>
                <p>
                  Estética y profesionalismo para pasarelas, catálogos y eventos
                  de moda.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Promotoras.png" // ← ruta local
                alt="Promotoras"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Promotoras</h3>
                <p>
                  Comunicación efectiva y carisma para la difusión masiva de su
                  marca.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Ferias-congresos.png" // ← ruta local
                alt="Ferias y Congresos"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Ferias y Congresos</h3>
                <p>
                  Soporte logístico y atención bilingüe para eventos de gran
                  escala.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Recepcionistas.png" // ← ruta local
                alt="Recepcionistas"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Recepcionistas</h3>
                <p>
                  La primera impresión perfecta: elegancia y eficiencia en el
                  registro.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Imagen-Marca.png" // ← ruta local
                alt="Imagen de Marca"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Imagen de Marca</h3>
                <p>
                  Embajadores que personifican los valores y la estética de su
                  empresa.
                </p>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <Image
                src="/Servicio/Campañas-Públicitarias.png" // ← ruta local
                alt="Campañas Publicitarias"
                fill
                className={styles.staffImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.serviceContent}>
                <h3>Campañas Publicitarias</h3>
                <p>
                  Talento versátil para producciones audiovisuales y gráficas de
                  alto nivel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonialSection} id="clientes">
        <div className="container">
          <blockquote>
            &quot;Magna Peru ha transformado nuestra manera de presentar la
            marca. Su personal no solo es impecable, es proactivo y altamente
            profesional.&quot;
          </blockquote>
          <div className={styles.testimonialAuthor}>
            <div className={styles.divider} />
            <p>DIRECTOR DE MARKETING, RETAIL PREMIUM</p>
          </div>
          {/*           <div className={styles.brandLogos}>
            <span>L&apos;OREAL</span>
            <span>MERCEDES BENZ</span>
            <span>SAMSUNG</span>
            <span>SAGA FALABELLA</span>
            <span>INTERBANK</span>
          </div> */}
        </div>
      </section>

      {/* Nosotros */}
      <section className={styles.aboutSection} id="nosotros">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <span className={styles.sectionBadge}>NUESTRO ADN</span>
              <h2>Excelencia en cada Detalle</h2>
              <p>
                Nuestra agencia se distingue por ofrecer personal cuidadosamente
                seleccionado, con excelente imagen, puntualidad, actitud
                profesional y capacitación constante. Nos enfocamos en brindar
                un servicio personalizado, confiable y de alto nivel,
                adaptándonos a las necesidades de cada cliente para garantizar
                el éxito de cada evento.
              </p>
              <div className={styles.aboutFeatures}>
                <div>
                  <MdVerified size={32} color="var(--color-primary)" />
                  <div>
                    <h4>Selección Rigurosa</h4>
                    <p>
                      Evaluación exhaustiva de perfiles basada en aptitudes,
                      actitud y dominio de protocolos corporativos.
                    </p>
                  </div>
                </div>
                <div>
                  <MdSchool size={32} color="var(--color-primary)" />
                  <div>
                    <h4>Capacitación Continua</h4>
                    <p>
                      Programas internos de formación en atención al cliente,
                      etiqueta social y gestión de eventos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutImages}>
              <div className={styles.aboutImage1} />
              <div className={styles.aboutImage2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
