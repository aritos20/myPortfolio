import oxygen from './assets/oxygen-shop.png';
import HotelMiranda from './assets/hotel-miranda.png';
import Dashboard from './assets/dashboard-hotel.png';
import PhotoSnap from './assets/photo-snap.png';
import backend from './assets/backen.png';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://aritos20.github.io/myPortfolio',
  title: 'AG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aristidis Gianicopulos',
  role: 'Desarrollador Web Full-Stack',
  description:
    'Hola, soy Aristidis Gianicopulos, Desarrollador Web Full-Stack. Me considero una persona con ganas de nunca parar de aprender y adaptarme a distintos entornos para así poder enriquecerme en todos los aspectos. También me gusta el trabajo en equipo y poder formar parte de grupos de trabajo para así poder aportar mi pequeño grano de arena y que los demás me aporten a mi sus conocimientos',
  resume: 'https://drive.google.com/file/d/1qAS-YuxxWIuD9llmMd1i00-Qw_dmU-XN/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/agianico/',
    github: 'https://github.com/aritos20',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Hotel Miranda Web Page',
    description:
      'Página web de un hotel lujoso, es una MPA con distintos apartados y hecha por un diseño a partir de FIGMA',
    previewImg: HotelMiranda,
    stack: ['HTML', 'CSS', 'SASS', 'JavaScript'],
    sourceCode: 'https://github.com/aritos20/hotel-miranda-web-page',
    livePreview: 'https://aritos20.github.io/hotel-miranda-web-page/',
  },
  {
    name: 'Hotel Miranda Dashboard',
    description:
      'Página para poder gestionar el Back Office de un hotel desde las reservas hasta los empleados.',
    stack: ['React', 'Redux', 'Styled Components'],
    previewImg: Dashboard,
    sourceCode: 'https://github.com/aritos20/hotel-miranda-dashboard',
    livePreview: 'https://aritos20.github.io/hotel-miranda-dashboard/',
  },
  {
    name: 'Hotel Miranda Backend',
    description:
      'Es una API REST hecha con Node y Express para poder gestionar todos los datos y hacer la conexión con el Dashboard',
    stack: ['TypeScript', 'Node', 'Express', 'Mongo', 'JWT'],
    previewImg: backend,
    sourceCode: 'https://github.com/aritos20/hotel-miranda-backend',
  },
  {
    name: 'PhotoSnap',
    description:
      'Aplicación Web para buscar y descargar imagenes de Stock. las imágenes que se obtienen provienen de Unsplash mediante su API',
    stack: ['React', 'Redux', 'MUI'],
    previewImg: PhotoSnap,
    sourceCode: 'https://github.com/aritos20/photo-snap',
    livePreview: 'https://aritos20.github.io/photo-snap/',
  },
  {
    name: 'Oxygen Shop',
    description:
      'Landing Page básica hecha con HTML, CSS, SASS y JavaScript, es 100% responsive',
    stack: ['HTML', 'CSS', 'SASS', 'JavaScript'],
    previewImg: oxygen,
    sourceCode: 'https://github.com/aritos20/photo-snap',
    livePreview: 'https://aritos20.github.io/photo-snap/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'NodeJS', 
  'Express',
  'MongoDB',
  'MySql',
  'Git',
  'Jest',
  'Figma',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'agianicopulos@gmail.com',
}

export { header, about, projects, skills, contact }
