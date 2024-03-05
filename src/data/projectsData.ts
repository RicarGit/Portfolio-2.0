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
    description: `Projeto feito com intuito de aprender a usar o banco de dados do firebase, utilizando o banco para armazenar e buscar imagens.
    
Minhas melhorias: Design do input e botões, funções de baixar e deletar imagem, filtro no nome, tamanho e extensões das imagens usando Regex, exibição de sucesso e possiveis erros na hora de fazer upload da imagem e responsividade.`,
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['styled comp.', 'jest', 'firebase'],
    codeLink: 'https://github.com/RicarGit/Gallery',
    deployLink: 'https://galeria-de-fotos-react.netlify.app',
    thumbImage: galeriaFotosThumb,
    projectImage: galeriaFotos
  },
  {
    projectName: 'DevMemory',
    description: `Um jogo da memória feito para praticar um pouco de lógica, estados do react e eventos de click.
    
Minhas melhorias: Todas as animações, adição de mais 8 cards, imagens da frente dos cards com tema de comida, component de recorde que armazena o melhor tempo e menores movimentos do jogador no navegador do usuário, tema dark e responsividade.`,
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['styled comp.'],
    codeLink: 'https://github.com/RicarGit/React-Memory-Game',
    deployLink: 'https://project-react-memory-game.netlify.app',
    thumbImage: devMemoryThumb,
    projectImage: devMemory
  },
  {
    projectName: 'Calculadora de IMC',
    description: `Meu primeiro projeto feito em React, uma calculadora que mede seu IMC - índice de massa corporal, calculando os resultados baseados na altura e peso atual da pessoa, podendo retornar 4 possíveis resultados dependendo do valor do IMC.
    
Minhas melhorias: Mudanças no design do botão voltar, tamanho dos components e conteúdos.`,
    techs: ['html', 'css modules', 'react', 'ts'],
    libs: [''],
    codeLink: 'https://github.com/RicarGit/React-Project_Imc_Calculator',
    deployLink: 'https://react-imc-calculator.netlify.app',
    thumbImage: calculadoraIMCThumb,
    projectImage: calculadoraIMC
  },
  {
    projectName: 'Álbum de Fotos',
    description: `Projeto feito com o objetivo de criar 3 páginas de um álbum de fotos consumindo uma fake api, uma página listando todos os álguns, uma página contendo todas as fotos do álbum selcionado, e por último a página contendo a foto selecionada.
    
Minhas melhorias: Estilo visual do projeto, botão voltar, botão para voltar ao topo da página, paginação simples e responsividade.`,
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['styled comp.', 'axios', 'router dom'],
    codeLink: 'https://github.com/RicarGit/React-JSONPlaceholder-Albums-Project',
    deployLink: 'https://react-jsonplaceholder-albums-project.netlify.app ',
    thumbImage: albumFotosThumb,
    projectImage: albumFotos
  },
]