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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAly2XPCYsGVvoF7-O0yNnafgvBh0zj6R1xbU5GCgyWge7QrT_EAQLo0xWgivJBQLKTx026UMOS7UQy2EwD8RMDOnqoTZG6ATezdAP781nCKFZH1Kd7CbJcLCyu0Sa_dyUpr_y2Q6dehQ7KNEiOdME1EolxIQy9GM0WqMgN-wBbfsCEDdjs5aaXN4a7pyVE_2jtmZBXajL1W_m8H2uEtg1Nxl6ZZquJjj9mb25Ff1gA11cfzr-N1ImKCIYVbTT-zqlfyQ8MdjqRl1I5)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBq6gVdHs12zNvteYrVaZPVh6vRfWWsBJZlxbv4DJp2H_2iNivOd8_F4DgDaWeYjsKBCUXmCJ-IJZ_sq3x43KioGK7w_d5p3pQiq78CoqGXxh5ytUr5tmOamCugumEkILqXgVEUOeQ7AoFf1SGBLHi9MxyECCSyCN5AIbo5LgY0Un3ZUYiJXET0Oj-M-7j4SFy-raxT3H-mbyXCFW8LmZU1PQVns-ndHo2KfgPp98CNFMgDwGKd78ohlbx39_CPTQ56xFWrqc5UzGeS)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDFtVhTqWWBMynEAAHmrXoNtOpMYmv4H9hqG0D-jcwUp9D_zocYiHZ8PUH1gq7Icn57WS8fgjNF1RHna6u-6O4FrtOqU97T1svIUdugd7Meb1-G_1mwb0gCZTggTEfbtNK0PsQjqrUexDOk43p-bl2NUb2PnAdiT2eZwRzLzM4rZTPTbTXWVWVJhU1U9eggEVq96PVNFMH3KktzPi9tNm5Qfq7ZTHX6z6Co1fA9SD1pzIN4M15u83NUnwRbzdwDAGwJWxYDVbS5KJLI)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuA90awX35m1sOZa_mFN0-XeSNh0xRGc6gHf_PB5H16PQ5qBmE3stZsynkoPcoqYag_S-cV3zWRIm80eMKmt9mZv2KHoukzj_gLHXPBJoGfhArttMKNLP-MLLcGKRgtf7M4yJLnZASo42hf7awa1FMBtZ0oAiiFM2eU8hk5FhRCjjETE0iUbj--s6gDkCgEaIJqISgSQgTDT7ieOZ4iJsDbfD-Puf1p3wcfJW3swCizFVY_iOXrgcjtpRBhTC5ve-OVAPJl7e-zpU6c6)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBHMMKQoArTcfw7Xmz9uxM7VAFhMYtjqy-zGNQsGjuf8bzAk1F702Z3FRuI6ocvc89KqDnp1i64xrDYROwTCwpyFhju9I6gea-4V9g_x9XarFwiLrnRnUMLNATkW5fcLBGhV8YovdLIY72HXAJrorWd9RxMQhT5g1Wdh5qM7r6pbgUSbHDIR1A40PsM6pZGUcmdiLQR7EGvbk3Glls45jbcITDVBgHUo8v0DSN2AKdl8YaaHdm-Ghqoy8zedjD21xSds3CZRn40DjBP)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCrjf39J75wkl8qqTzWJjDIgnkWE11hI44enwCiMB0gHi_ssfEK5eTUXrIK9KXvgsj6rExqszUQ9AyjuRRUm-08pZFTIBC20bCnEoGOoJnw3UsQApW0YRvm9omqIoaxVoRuPZJ5AzBl9sCFD_TmQpdWglWHwuclZ40Je_g-ix60_spKdChW3BLg0tq-lC_TAFsoTjpwGHdhPoIvDvf65YgOuN4QzGdLqPVZSH7wyYB1EOCY8OAQG4TTrPaWZRBPwsyrFKfNZE1IoNeW)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCYTgKMIQ3kb9_fN1sNi4WCBffAug3x0Hpb3gmIauEOarQZF1P3jaDmGGlYcuGiUY776Oz2FwJFq58QrPrP4szWk-3TV98ywooQipfbeNcFtPa8qMMmrLv4JujGNEgwDjEx3RODSPVJ3mYFHuDlJIwq1e3_IwXUnkbGjPEpkjyeAoVsvA3aGMtfoklQOXwdz0OEN782SF8pWcmzQZQwlmT-IIH24Ck4qGp6EhM3DCj1A5LqXZqb07lCBdbZ4n9E-Rz0x_npHRXxTt5A)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAtmV8PTyGu94JufiXFtWOxFFneO6epvj2xOEIytc0hi_-o6SyOoQ0ChLitOV3LduuBy68lLequzoVR06i8vEQcO3ZBnHlR82HQKeghv99xGDStN2z9AdbfBmxzu28-zm-gws5DkVzi-unn3jrE2KzU_Zifw1b0ckLjsSGHprjrramFKBiNSPstPJrfnPeZ3LENAD0dAz0h-fJsZAHtkf47TCrI0e5Qaf-n5wa1p4tTvaJPhJIZnjuoz8Q7mD2cXX7KnyotQQmmucaZ)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDJfdyXbLNbcur89-qqp1adns5dcqcNZp6XgqyH_2_fYOfQ53CUrnytx6vKZ45fNxEkV8uZU_wAcq3S3eWZArba3xWoGJZpre1Vr-mxxT1e1Zv_gSN8N1rDXZBjUHmVRrY2EbWaA7BuIuVwDMEscpyCvL6WyrdZjqn0IlGlId-9VNQAM_zOYcyfcJP6YQ5E69UZ7QI2PBwEiq4WXYkFklvQFrkaI0x9ESarA3tamj6wcbfKRwq1o_1Knjc6DsutnHAFI1lsaVNSCdTy)",
                }}
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
              <div
                className={styles.serviceImage}
                style={{
                  backgroundImage:
                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDR90uLjfL0QxlBEWnYiBUeMt7rp6vP1VWUHgeURUpJOvdRK0qEk2N_Rp_TVl4n83Crgp_khi9eunSEGOJh93pCzByYH4Imvcxw7M1nxYM1wkEHwCY2PBekZl-sYO3aSk2kRJNKr69bRFLTJjsVxhKNgM1GZEgjr6ROaJb77oNEki6Cw2qzR52TBAl_YU7R279bFYcu-50YQneMpYYtaE0Gh-F55yUAm9Nd7KnbaTjjFITjHp-B1j7tdtiDARhYPh6nX3JCwmi9TEY-)",
                }}
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
