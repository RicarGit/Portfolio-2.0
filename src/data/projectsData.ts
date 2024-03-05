import dogsSocialMediaThumb from "/public/dogsSocialMediaThumb.jpg"
import wildbeastThumb from "/public/wildbeastThumb.jpg"
import galeriaFotosThumb from "/public/galeriaFotosThumb.jpg"
import devMemoryThumb from "/public/devMemoryThumb.jpg"
import calculadoraIMCThumb from "/public/calculadoraIMCThumb.jpg"
import albumFotosThumb from "/public/albumFotosThumb.jpg"

import dogsSocialMedia from "/public/dogsSocialMedia.png"
import wildbeast from "/public/wildbeast.png"
import galeriaFotos from "/public/galeriaFotos.png"
import devMemory from "/public/devMemory.png"
import calculadoraIMC from "/public/calculadoraIMC.png"
import albumFotos from "/public/albumFotos.png"

export const projetsData = [
  {
    projectName: 'Dogs Social Media',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue non tellus pharetra laoreet. Sed venenatis aliquet scelerisque. Integer aliquet cursus est, ac placerat neque tempor eleifend. Nulla non facilisis neque, at venenatis turpis, Nulla non facilisis neque, at venenatis turpis.',
    techs: ['html', 'css', 'react'],
    libs: [''],
    codeLink: '/',
    deployLink: '/',
    thumbImage: dogsSocialMediaThumb,
    projectImage: dogsSocialMedia
  },
  {
    projectName: 'Wildbeast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue non tellus pharetra laoreet. Sed venenatis aliquet scelerisque. Integer aliquet cursus est, ac placerat neque tempor eleifend. Nulla non facilisis neque, at venenatis turpis, Nulla non facilisis neque, at venenatis turpis.',
    techs: [''],
    libs: [''],
    codeLink: '/',
    deployLink: '/',
    thumbImage: wildbeastThumb,
    projectImage: wildbeast
  },
  {
    projectName: 'Galeria de Fotos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue non tellus pharetra laoreet. Sed venenatis aliquet scelerisque. Integer aliquet cursus est, ac placerat neque tempor eleifend. Nulla non facilisis neque, at venenatis turpis, Nulla non facilisis neque, at venenatis turpis.',
    techs: [''],
    libs: [''],
    codeLink: '/',
    deployLink: '/',
    thumbImage: galeriaFotosThumb,
    projectImage: galeriaFotos
  },
  {
    projectName: 'DevMemory',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue non tellus pharetra laoreet. Sed venenatis aliquet scelerisque. Integer aliquet cursus est, ac placerat neque tempor eleifend. Nulla non facilisis neque, at venenatis turpis, Nulla non facilisis neque, at venenatis turpis.',
    techs: [''],
    libs: [''],
    codeLink: '/',
    deployLink: '/',
    thumbImage: devMemoryThumb,
    projectImage: devMemory
  },
  {
    projectName: 'Calculadora de IMC',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue non tellus pharetra laoreet. Sed venenatis aliquet scelerisque. Integer aliquet cursus est, ac placerat neque tempor eleifend. Nulla non facilisis neque, at venenatis turpis, Nulla non facilisis neque, at venenatis turpis.',
    techs: [''],
    libs: [''],
    codeLink: '/',
    deployLink: '/',
    thumbImage: calculadoraIMCThumb,
    projectImage: calculadoraIMC
  },
  {
    projectName: 'Álbum de Fotos',
    description: `Projeto feito com o objetivo de criar 3 páginas de um álbum de fotos consumindo uma fake api, uma página listando todos os álguns, uma página contendo todas as fotos do álbum selcionado, e por último a página contendo a foto selecionada.
    
Minhas melhorias: estilo visual do projeto, botão voltar, botão para voltar ao topo da página, paginação simples.`,
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['styled comp.', 'axios', 'router dom'],
    codeLink: 'https://github.com/RicarGit/React-JSONPlaceholder-Albums-Project',
    deployLink: 'https://react-jsonplaceholder-albums-project.netlify.app ',
    thumbImage: albumFotosThumb,
    projectImage: albumFotos
  },
]