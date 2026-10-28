/* ================================================================
   Coloquio Interinstitucional de Matemáticas
   Datos de las hojas de cálculo e interacciones del sitio.
   ================================================================ */

"use strict";

// Registros tomados de “Próximas Charlas.xlsx”.
const upcomingTalks = [

  {
    date: "2026-11-11",
    speaker: "Pendiente",
    title: "Pendiente",
    photo: "platica_2026b_n_foto.jpeg",
    poster: "platica_2026b_n.jpeg",
    youtube: "Pendiente",
    period: "2026 II"
  },
  {
    date: "2026-11-25",
    speaker: "M.C. Jazmin Flores",
    title: "Pendiente",
    photo: "platica_2026b_n_foto.jpeg",
    poster: "platica_2026b_n.jpeg",
    youtube: "Pendiente",
    period: "2026 II"
  },
  {
    date: "2026-12-09",
    speaker: "Pendiente",
    title: "Pendiente",
    photo: "platica_2026b_n_foto.jpeg",
    poster: "platica_2026b_n.jpeg",
    youtube: "Pendiente",
    period: "2026 II"
  }
];

// Registros tomados de “Charlas anteriores.xlsx”.
const pastTalks = [
  { date: "2026-10-28", speaker: "Dr. Alfredo González-Calderón", title: "Compresión de memoria en ecuaciones diferenciales fraccionarias", photo: "platica_2026b_2_foto.jpg", poster: "platica_2026b_2.jpg", youtube: "https://www.youtube.com/watch?v=QEAolXFYpa4", period: "2026 II" },
  { date: "2026-10-14", speaker: "M.C. María Guadalupe Magaña Chávez", title: "Autómatas Celulares Perezosos: idempotencia y dinámica", photo: "platica_2026b_1_foto.jpg", poster: "platica_2026b_1.jpg", youtube: "https://www.youtube.com/watch?v=iTp6G-_ohWw", period: "2026 II" },
  { date: "2023-04-19", speaker: "Dr. Alonso Castillo Ramírez", title: "Una generalización de los autómatas celulares", photo: "platica_2023_1_foto.jpg", poster: "platica_2023_1.jpg", youtube: "https://www.youtube.com/watch?v=w68Ukzn_5m8&t=2768s", period: "2023 I" },
  { date: "2023-05-05", speaker: "Dra. Denisse García Beltrán", title: "Trivialidad de la Primera Cohomología de Poisson de Álgebras de Extensión Trivial", photo: "platica_2023_2_foto.jpg", poster: "platica_2023_2.jpg", youtube: "https://www.youtube.com/live/d6T-4vr7sa0?si=KMmI57zQHYEqleXy", period: "2023 I" },
  { date: "2023-05-17", speaker: "Dr. Noé Miranda Valle", title: "Definición de función continua su contraria y su inversa: Ejemplos y contraejemplos", photo: "platica_2023_3_foto.jpg", poster: "platica_2023_3.jpg", youtube: "https://www.youtube.com/live/-WqZWOmCK38?si=2wsK7YMjIBPN1Fjp", period: "2023 I" },
  { date: "2023-05-31", speaker: "Dr. David Baca Carrasco", title: "Modelación matemática de la Leptospirosis en ambientes no controlados", photo: "platica_2023_4_foto.jpg", poster: "platica_2023_4.jpg", youtube: "https://www.youtube.com/live/LEfkFuv0IzM?si=bPXnp2ad9U4dwKDw", period: "2023 I" },
  { date: "2023-06-14", speaker: "Dr. Alfredo Huicochea Moctezuma", title: "Extensiones algebraicas sobre modelos no estándar de los números racionales", photo: "platica_2023_5_foto.jpg", poster: "platica_2023_5.jpg", youtube: "https://www.youtube.com/live/xJftlcRANdw?si=b8Aof-M0IDLeqziA", period: "2023 I" },
  { date: "2023-06-28", speaker: "Dr. Manuel Adrian Acuña Zegarra", title: "El impacto del cambio de comportamiento sobre la modelación de epidemias: COVID-19 como caso de estudio", photo: "platica_2023_6_foto.jpg", poster: "platica_2023_6.jpg", youtube: "https://www.youtube.com/live/qsj32FMF_P8?si=m0xxWTKGAffXarbW", period: "2023 I" },
  { date: "2023-12-09", speaker: "Dr. Jesús Noyola Rodríguez", title: "Ondas viajeras en operadores fraccionarios locales", photo: "platica_2023b_1_foto.jpg", poster: "platica_2023b_1.jpg", youtube: "https://www.youtube.com/live/-yBb4GCyPwc?si=p84JhBqNhoOU-jWN", period: "2023 II" },
  { date: "2023-09-26", speaker: "M.C. María Guadalupe Magaña Chávez", title: "Autómatas celulares elementales y sus composiciones", photo: "platica_2023b_2_foto.jpg", poster: "platica_2023b_2.jpg", youtube: "https://www.youtube.com/live/D2jHpaVjQ4w?si=3ZaeeIbYz8mndRWH", period: "2023 II" },
  { date: "2023-10-10", speaker: "Dr. Luguis de los Santos Baños / Dr. Jair. J. Pineda Pineda", title: "Posgrados de matemáticas de la UdG y UAGro", photo: "platica_2023b_3_foto.jpg", poster: "platica_2023b_3.jpg", youtube: "https://www.youtube.com/live/FeWC5CDc9_E?si=vz8PSg-cqjxFDp31", period: "2023 II" },
  { date: "2023-11-21", speaker: "Dr. Rosalio Reyes", title: "Gráficas hiperbólicas de Gromov", photo: "platica_2023b_4_foto.jpg", poster: "platica_2023b_4.jpg", youtube: "https://www.youtube.com/live/B1CRYRu8-A8?si=S8woclz8HGo11oVf", period: "2023 II" },
  { date: "2023-11-28", speaker: "Dra. Carolina Espinoza Villalva", title: "Funciones Características en Espacios de John-Nirenberg con Exponente p", photo: "platica_2023b_5_foto.jpg", poster: "platica_2023b_5.jpg", youtube: "https://www.youtube.com/live/LJMuPrSdFS4?si=JN-BAnhsPkO0LD3n", period: "2023 II" },
  { date: "2023-12-12", speaker: "Dra. Saraí Hernández Torres", title: "Un tour alrededor de los árboles generadores uniformes", photo: "platica_2023b_6_foto.jpg", poster: "platica_2023b_6.jpg", youtube: "https://www.youtube.com/live/P2S9L5mlmTs?si=oEFR-WsDTNlsUqc_", period: "2023 II" },
  { date: "2024-02-27", speaker: "Dr. Miguel Ángel Evangelista Alvarado", title: "Aprendizaje de expresiones simbólicas de sistemas hamiltonianos", photo: "platica_2024_1_foto.jpg", poster: "platica_2024_1.jpg", youtube: "https://www.youtube.com/live/H4sC2o7N5z0?si=XsFMMWPeuRqhoHW0", period: "2024 I" },
  { date: "2024-12-03", speaker: "Dr. Jesus Jairo Rodríguez Padilla", title: "Inducibilidad de arritmias mediante distintos protocolos de estimulación", photo: "platica_2024_2_foto.jpg", poster: "platica_2024_2.jpg", youtube: "https://www.youtube.com/live/ptIqagmngwM?si=HsRLZYr3KIs2MT6O", period: "2024 I" },
  { date: "2024-09-04", speaker: "Dr. Gerardo Mauricio Toledo Acosta", title: "Una introducción a la teoría T", photo: "platica_2024_3_foto.jpg", poster: "platica_2024_3.jpg", youtube: "https://www.youtube.com/live/xQmeXgcNLK8?si=247Bm47w9Qrlxnjl", period: "2024 I" },
  { date: "2024-04-23", speaker: "Dra. Martha Lizbeth Shaid Sandoval Miranda", title: "Cuantales e idiomas en el estudio de anillos y módulos", photo: "platica_2024_4_foto.jpg", poster: "platica_2024_4.jpg", youtube: "https://www.youtube.com/live/wqVyoz9QqvE?si=nccKrWJ6ihHAsNxv", period: "2024 I" },
  { date: "2024-07-05", speaker: "Dra. María del Socorro García González", title: "Un vínculo histórico: Afecto y Matemáticas", photo: "platica_2024_5_foto.jpg", poster: "platica_2024_5.jpg", youtube: "https://www.youtube.com/live/YGItHItVty0?si=mjtDmnFH9zotTpQ3", period: "2024 I" },
  { date: "2024-05-21", speaker: "Dra. Gloria Angélica Moreno Durazno", title: "Cardiología, matemáticas y matemática educativa: la articulación en la interpretación de electrocardiogramas", photo: "platica_2024_6_foto.jpg", poster: "platica_2024_6.jpg", youtube: "https://www.youtube.com/live/UkvShj3nF0c?si=H-penOgezaNWpx4M", period: "2024 I" },
  { date: "2024-04-06", speaker: "Dr. Fernando I. Becerra López", title: "Propuesta evolutiva para encontrar una extensión cordal adecuada en problemas de optimización semidefinida positiva", photo: "platica_2024_7_foto.jpg", poster: "platica_2024_7.jpg", youtube: "https://www.youtube.com/live/JVf1soMPClM?si=AgqBr6RmijxTByD3", period: "2024 I" },
  { date: "2024-06-18", speaker: "Dr. Jair J. Pineda Pineda", title: "Redes bipartitas y calidad del agua", photo: "platica_2024_8_foto.jpg", poster: "platica_2024_8.jpg", youtube: "https://www.youtube.com/live/6SAAPhAk65Y?si=joZLkeMwlwyj_hBB", period: "2024 I" },
  { date: "2025-03-27", speaker: "Dr. Rafael Alcaraz Barrera", title: "Sistemas dinámicos abiertos, 2x mód 1 y una familia de perturbaciones", photo: "platica_2025_1_foto.jpg", poster: "platica_2025_1.jpg", youtube: "https://www.youtube.com/live/cMAqsPIAkPU?si=6Ud8M8KW7lOEuH1C", period: "2025 I" },
  { date: "2025-10-04", speaker: "Dra. Karla Flores Zarur", title: "Un mecanismo del primer precio para la asignación de bienes escasos", photo: "platica_2025_2_foto.jpg", poster: "platica_2025_2.jpg", youtube: "https://www.youtube.com/live/k5gHqXfOb0s?si=j-lE8l0l7v6rihAp", period: "2025 I" },
  { date: "2025-04-30", speaker: "Dr. José Manuel Islas Hernández", title: "Análisis de un modelo sencillo de acoplamiento de los mecanismos de transmisión ambiental y directa", photo: "platica_2025_3_foto.jpg", poster: "platica_2025_3.jpg", youtube: "https://www.youtube.com/live/Bsj2lpO8eWE?si=o2AoL2xlzyV2s_21", period: "2025 I" },
  { date: "2025-05-16", speaker: "Dr. Ludwin Ali Hernández Basilio", title: "El diferencial de una gráfica", photo: "platica_2025_4_foto.jpg", poster: "platica_2025_4.jpg", youtube: "https://www.youtube.com/live/GE8p2x6Krw4?si=vXVbfcRaImX1TgWM", period: "2025 I" },
  { date: "2025-05-29", speaker: "Dr. Mauricio Castro Enríquez", title: "Aproximación de un proceso de control markoviano en costo promedio con función de costos no acotada, kérnel débilmente continuo y espacios de estados y acciones de Borel", photo: "platica_2025_5_foto.jpg", poster: "platica_2025_5.jpg", youtube: "https://www.youtube.com/live/QJ-pAevsGJ8?si=6MS_9WzE2JQi_2VG", period: "2025 I" },
  { date: "2025-12-06", speaker: "M.C. Saylé Sigarreta Ricardo", title: "Energía por Vértices: Un Punto de Encuentro entre Teoríade Juegos y Química", photo: "platica_2025_6_foto.jpg", poster: "platica_2025_6.jpg", youtube: "https://www.youtube.com/live/bW5IiYm6trY?si=GuJQBY-43lMMs_bb", period: "2025 I" },
  { date: "2025-06-26", speaker: "Dra. María Elena Martínez Manzanares", title: "101 de Transición de la Academia a la Industria", photo: "platica_2025_7_foto.jpg", poster: "platica_2025_7.jpg", youtube: "https://www.youtube.com/live/IzAObrwykZg?si=g6hw05abtQGd3MLp", period: "2025 I" },
  { date: "2025-09-24", speaker: "Dra. Sarai Zárate Gálvez", title: "Modelos de Transporte Electrónico", photo: "platica_2025b_1_foto.jpg", poster: "platica_2025b_1.jpg", youtube: "https://www.youtube.com/live/Dd1cMkWiW6Q?si=Sc1ySb31ZLLrYyF7", period: "2025 II" },
  { date: "2025-08-10", speaker: "Dr. Omar Rosario Cayetano", title: "El diferencial en operadores unitarios en grafos", photo: "platica_2025b_2_foto.jpg", poster: "platica_2025b_2.jpg", youtube: "https://www.youtube.com/live/7R7K_0jVw2w?si=i1Q8rSm5x3f-Qddr", period: "2025 II" },
  { date: "2025-10-29", speaker: "Dra. Celia Martínez Lázaro", title: "Modelos matemáticos discretos: una ventana hacia el modelaje", photo: "platica_2025b_3_foto.jpg", poster: "platica_2025b_3.jpg", youtube: "https://www.youtube.com/live/NNTKxirjii8?si=oRe7J6dY7fHxnvRt", period: "2025 II" },
  { date: "2025-12-11", speaker: "M.C.Daniel Alfonso Santiesteban", title: "Problemas de Frontera para Ecuaciones de Dirac desde el Ánalisis de Clifford", photo: "platica_2025b_4_foto.jpg", poster: "platica_2025b_4.jpg", youtube: "https://www.youtube.com/live/F3TYHfSE4c0?si=JM2KLZXAcTdhSf4P", period: "2025 II" },
  { date: "2025-11-26", speaker: "M.C. José Ítalo Sánchez Bermudez", title: "La Desigualdad de Chebyshev en espacios de Banach y espacios de Hilbert", photo: "platica_2025b_5_foto.jpg", poster: "platica_2025b_5.jpg", youtube: "https://www.youtube.com/live/66fZYaJ6PSE?si=BcmB4iYCEOnIzR4k", period: "2025 II" },
  { date: "2025-10-12", speaker: "Dr. Francisco José López Hernández", title: "El problema de la semiconjugación en teoría de rotación", photo: "platica_2025b_6_foto.jpg", poster: "platica_2025b_6.jpg", youtube: "https://www.youtube.com/live/bUB8zsQMk5w?si=rpb-nHJhEd33XkzQ", period: "2025 II" },
  { date: "2026-04-28", speaker: "M.C. Luis Fernando Frausto Castro", title: "Simulaciones Mediante la Transformada Numérica de Laplace", photo: "platica_2026_1_foto.jpg", poster: "platica_2026_1.jpg", youtube: "https://www.youtube.com/live/ZT7xSsDgwuo?si=w5SC34DZn78QW99Y", period: "2026 I" },
  { date: "2026-12-05", speaker: "M.C. Susana Hernández Nuñez", title: "Estabilidad de juegos estocásticos suma cero respecto a métricas de probabilidad", photo: "platica_2026_2_foto.jpg", poster: "platica_2026_2.jpg", youtube: "https://www.youtube.com/live/dkGxC3XeFHM?si=8QOukgNFewp8eynv", period: "2026 I" },
  { date: "2026-05-26", speaker: "M.C. Francisco Seneca Bryant Morales", title: "Invarianza bajo homeomorfismos en el espacio de funciones integrables respecto de una medida vectorial", photo: "platica_2026_3_foto.jpg", poster: "platica_2026_3.jpg", youtube: "https://www.youtube.com/live/lMOBFpxv7go?si=y45nYaSZHLff3IDo", period: "2026 I" },
  { date: "2026-09-06", speaker: "Dr. Luis Xavier Vivas Cruz", title: "Ecuaciones diferenciales y sistemas algebraicos: solución exacta, discretización y métodos iterativos", photo: "platica_2026_4_foto.jpg", poster: "platica_2026_4.jpg", youtube: "https://www.youtube.com/live/C8xRoDfP2rU?si=PW-Ym2-9qdWaZDLI", period: "2026 I" },
  { date: "2026-06-23", speaker: "Dra. Mayra Rosalia Tocto Erazo", title: "Un modelo matemático para la dinámica de opinión colectiva", photo: "platica_2026_5_foto.jpg", poster: "platica_2026_5.jpg", youtube: "https://www.youtube.com/live/Sj7CNXvdKyI?si=4pEgCWswF-gwve6k", period: "2026 I" },
  { date: "2026-07-07", speaker: "M.C. Sandy Vel Bautista Peralta", title: "Un modelo discreto con periodo de latencia de infección de VIH con clasificación de hombres y mujeres", photo: "platica_2026_6_foto.jpg", poster: "platica_2026_6.jpg", youtube: "https://www.youtube.com/live/fCPkTcuhvMA?si=GVuBuV4i8e5wfSgw", period: "2026 I" }
];

const pendingValue = "Pendiente";
const upcomingContainer = document.querySelector("#upcoming-talks");
const pastContainer = document.querySelector("#past-talks");
const posterModal = document.querySelector("#poster-modal");
const modalPoster = document.querySelector("#modal-poster");
const modalTitle = document.querySelector("#modal-title");
const modalCloseButton = document.querySelector(".modal-close");

/** Convierte una fecha ISO a una fecha larga en español sin desfase horario. */
function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
}

/** Obtiene un número comparable a partir de periodos como “2026 II”. */
function periodRank(period) {
  const [yearText, semester = "I"] = period.trim().split(/\s+/);
  const semesterValue = semester === "II" ? 2 : 1;
  return Number(yearText) * 10 + semesterValue;
}

/** Crea una tarjeta accesible para una charla. */
function createTalkCard(talk, isFirstUpcoming = false) {
  const article = document.createElement("article");
  article.className = "talk-card";

  const media = document.createElement("div");
  media.className = "talk-card__media";

  const frame = document.createElement("div");
  frame.className = "talk-card__photo-frame";

  const photo = document.createElement("img");
  photo.className = "talk-card__photo";
  photo.src = `img/${talk.photo}`;
  photo.alt = talk.speaker === pendingValue ? "Ponente por anunciar" : `Fotografía de ${talk.speaker}`;
  photo.loading = isFirstUpcoming ? "eager" : "lazy";
  photo.decoding = "async";
  photo.dataset.fallback = "img/placeholder-charla.png";
  frame.append(photo);
  media.append(frame);

  const body = document.createElement("div");
  body.className = "talk-card__body";

  const date = document.createElement("p");
  date.className = "talk-card__date";
  date.textContent = formatDate(talk.date);

  // El nombre funciona como enlace progresivo: abre el cartel con JS y,
  // si JavaScript no está disponible, abre directamente la imagen local.
  const speaker = document.createElement("a");
  speaker.className = "speaker-link";
  speaker.href = `img/${talk.poster}`;
  speaker.dataset.poster = `img/${talk.poster}`;
  speaker.dataset.speaker = talk.speaker === pendingValue ? "Ponente por anunciar" : talk.speaker;
  speaker.dataset.title = talk.title === pendingValue ? "Título por anunciar" : talk.title;
  speaker.textContent = talk.speaker === pendingValue ? "Ponente por anunciar" : talk.speaker;
  speaker.setAttribute("aria-haspopup", "dialog");

  let title;
  if (talk.youtube && talk.youtube !== pendingValue) {
    title = document.createElement("a");
    title.href = talk.youtube;
    title.target = "_blank";
    title.rel = "noopener noreferrer";
    title.className = "talk-title";
    title.textContent = talk.title;
    title.setAttribute("aria-label", `${talk.title}. Abrir video en YouTube`);
  } else {
    title = document.createElement("span");
    title.className = "talk-title is-pending";
    title.textContent = talk.title === pendingValue ? "Título por anunciar" : talk.title;
  }

  const meta = document.createElement("p");
  meta.className = "talk-card__meta";
  meta.textContent = `Periodo ${talk.period}`;

  body.append(date, speaker, title, meta);
  article.append(media, body);
  return article;
}

/** Muestra próximas charlas en orden cronológico. */
function renderUpcomingTalks() {
  const orderedTalks = [...upcomingTalks].sort((a, b) => a.date.localeCompare(b.date));
  const fragment = document.createDocumentFragment();
  orderedTalks.forEach((talk, index) => fragment.append(createTalkCard(talk, index === 0)));
  upcomingContainer.replaceChildren(fragment);
}

/** Agrupa el archivo por periodo y coloca primero el periodo y la fecha más recientes. */
function renderPastTalks() {
  const grouped = pastTalks.reduce((periods, talk) => {
    if (!periods.has(talk.period)) periods.set(talk.period, []);
    periods.get(talk.period).push(talk);
    return periods;
  }, new Map());

  const periods = [...grouped.keys()].sort((a, b) => periodRank(b) - periodRank(a));
  const fragment = document.createDocumentFragment();

  periods.forEach((period, index) => {
    const details = document.createElement("details");
    details.className = "period-group";
    details.open = index === 0;

    const summary = document.createElement("summary");
    const title = document.createElement("strong");
    title.textContent = `Periodo ${period}`;
    const count = document.createElement("span");
    const total = grouped.get(period).length;
    count.textContent = `${total} ${total === 1 ? "charla" : "charlas"}`;
    summary.append(title, count);

    const content = document.createElement("div");
    content.className = "period-group__content";
    const grid = document.createElement("div");
    grid.className = "talk-grid";

    grouped.get(period)
      .sort((a, b) => b.date.localeCompare(a.date))
      .forEach((talk) => grid.append(createTalkCard(talk)));

    content.append(grid);
    details.append(summary, content);
    fragment.append(details);
  });

  pastContainer.replaceChildren(fragment);
}

/** Sustituye imágenes ausentes por marcadores locales, sin solicitar recursos externos. */
function enableImageFallbacks() {
  document.addEventListener("error", (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.dataset.fallback) return;
    if (image.getAttribute("src") === image.dataset.fallback) return;
    image.src = image.dataset.fallback;
  }, true);
}

/** Abre el cartel de la charla dentro del elemento dialog. */
function openPoster(link) {
  const speaker = link.dataset.speaker;
  const title = link.dataset.title;
  modalTitle.textContent = speaker;
  modalPoster.src = link.dataset.poster;
  modalPoster.alt = `Cartel de la charla “${title}”, presentada por ${speaker}`;
  modalPoster.dataset.fallback = "img/placeholder-cartel.png";

  if (typeof posterModal.showModal === "function") {
    posterModal.showModal();
  } else {
    posterModal.setAttribute("open", "");
  }
  document.body.classList.add("modal-open");
}

function closePoster() {
  if (typeof posterModal.close === "function" && posterModal.open) {
    posterModal.close();
  } else {
    posterModal.removeAttribute("open");
  }
  document.body.classList.remove("modal-open");
}

// Delegación de eventos para los enlaces de nombres creados dinámicamente.
document.addEventListener("click", (event) => {
  const posterLink = event.target.closest("[data-poster]");
  if (!posterLink) return;
  event.preventDefault();
  openPoster(posterLink);
});

modalCloseButton.addEventListener("click", closePoster);
posterModal.addEventListener("close", () => document.body.classList.remove("modal-open"));
posterModal.addEventListener("cancel", () => document.body.classList.remove("modal-open"));
posterModal.addEventListener("click", (event) => {
  const bounds = posterModal.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closePoster();
});

// Menú adaptable para pantallas pequeñas.
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector(".sr-only").textContent = open ? "Cerrar menú" : "Abrir menú";
  navLinks.classList.toggle("is-open", open);
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) setMenu(false);
});

// El botón abre o cierra todos los periodos del archivo.
const togglePeriodsButton = document.querySelector("#toggle-periods");

function updatePeriodsButton() {
  const groups = [...document.querySelectorAll(".period-group")];
  const allOpen = groups.length > 0 && groups.every((group) => group.open);
  togglePeriodsButton.textContent = allOpen ? "Ocultar periodos" : "Mostrar todos los periodos";
  togglePeriodsButton.setAttribute("aria-expanded", String(allOpen));
}

togglePeriodsButton.addEventListener("click", () => {
  const groups = [...document.querySelectorAll(".period-group")];
  const shouldOpen = !groups.every((group) => group.open);
  groups.forEach((group) => { group.open = shouldOpen; });
  updatePeriodsButton();
});

pastContainer.addEventListener("toggle", updatePeriodsButton, true);

// Tema claro/oscuro, guardado únicamente en el dispositivo del visitante.
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");

function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-theme", dark);
  themeButton.setAttribute("aria-label", dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
  themeIcon.textContent = dark ? "☀" : "☾";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#071522" : "#11263d";
}

const savedTheme = localStorage.getItem("cim-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
applyTheme(savedTheme || preferredTheme);

themeButton.addEventListener("click", () => {
  const theme = document.body.classList.contains("dark-theme") ? "light" : "dark";
  applyTheme(theme);
  localStorage.setItem("cim-theme", theme);
});

// Botón flotante para regresar al encabezado cuando se recorre el archivo.
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 700);
}, { passive: true });
backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Inicialización de la interfaz.
renderUpcomingTalks();
renderPastTalks();
enableImageFallbacks();
updatePeriodsButton();
document.querySelector("#current-year").textContent = new Date().getFullYear();
