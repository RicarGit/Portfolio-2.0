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

export const projectsData = [
  {
    projectName: 'Dogs Social Media',
    description: 'Uma rede social para cachorros com sistema de criação de conta, login, senha perdida, posts, curtidas, views, comentários e gráfico de estatisticas.',
    myImprovements: 'Fiz o projeto todo em typescript, adicionei e aprendi a usar libs que nunca tinha usado, react-hook-form para controlar e validar os formulários, zod para validação dos formulários, zustand para criação de contexto global.',
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['victory', 'zod', 'zustand', 'hook form'],
    codeLink: 'https://github.com/RicarGit/Dogs-Social-Media',
    deployLink: 'https://dogs-sunday.netlify.app',
    thumbImage: dogsSocialMediaThumb,
    projectImage: dogsSocialMedia
  },
  {
    projectName: 'Wildbeast',
    description: 'Projeto feito com intuido de aprender sobre css grid layout, aprender sobre posicionamento, comportamento, alinhamento e responsividade, criando layouts usando flex-box em conjunto com grid para conseguir os melhores resultados.',
    myImprovements: '',
    techs: ['html', 'css grid'],
    libs: [''],
    codeLink: 'https://github.com/RicarGit/Grid-Wildbeast',
    deployLink: 'https://grid-wildbeasts.netlify.app',
    thumbImage: wildbeastThumb,
    projectImage: wildbeast
  },
  {
    projectName: 'Galeria de Fotos',
    description: 'Projeto feito com intuito de aprender a usar o banco de dados do firebase, utilizando o banco para armazenar e buscar imagens.',
    myImprovements: 'Design do input e botões, funções de baixar e deletar imagem, filtro no nome, tamanho e extensões das imagens usando Regex, exibição de sucesso e possiveis erros na hora de fazer upload da imagem e responsividade.',
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['styled comp.', 'jest', 'firebase'],
    codeLink: 'https://github.com/RicarGit/Gallery',
    deployLink: 'https://galeria-de-fotos-react.netlify.app',
    thumbImage: galeriaFotosThumb,
    projectImage: galeriaFotos
  },
  {
    projectName: 'DevMemory',
    description: 'Um jogo da memória feito para praticar um pouco de lógica, estados do react e eventos de click.',
    myImprovements: 'Todas as animações, adição de mais 8 cards, novas imagens dos cards, component de recorde que armazena o melhor tempo e menores movimentos do jogador no navegador do usuário, tema dark e responsividade.',
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['styled comp.'],
    codeLink: 'https://github.com/RicarGit/React-Memory-Game',
    deployLink: 'https://project-react-memory-game.netlify.app',
    thumbImage: devMemoryThumb,
    projectImage: devMemory
  },
  {
    projectName: 'Calculadora de IMC',
    description: 'Meu primeiro projeto feito em React, uma calculadora que mede seu IMC - índice de massa corporal, calculando os resultados baseados na altura e peso atual da pessoa, podendo retornar 4 possíveis resultados dependendo do valor do IMC.',
    myImprovements: 'Mudanças no design do botão voltar, tamanho dos components e conteúdos.',
    techs: ['html', 'css modules', 'react', 'ts'],
    libs: [''],
    codeLink: 'https://github.com/RicarGit/React-Project_Imc_Calculator',
    deployLink: 'https://react-imc-calculator.netlify.app',
    thumbImage: calculadoraIMCThumb,
    projectImage: calculadoraIMC
  },
  {
    projectName: 'Álbum de Fotos',
    description: 'Projeto feito com o objetivo de criar 3 páginas de um álbum de fotos consumindo uma fake api, uma página listando todos os álguns, uma página contendo todas as fotos do álbum selcionado, e por último a página contendo a foto selecionada.',
    myImprovements: 'Estilo visual do projeto, botão voltar, botão para voltar ao topo da página, paginação simples e responsividade.',
    techs: ['html', 'css', 'react', 'ts'],
    libs: ['styled comp.', 'axios', 'router dom'],
    codeLink: 'https://github.com/RicarGit/React-JSONPlaceholder-Albums-Project',
    deployLink: 'https://react-jsonplaceholder-albums-project.netlify.app ',
    thumbImage: albumFotosThumb,
    projectImage: albumFotos
  },
]