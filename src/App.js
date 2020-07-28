import React from 'react';
import Header from './components/Header'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'

function App() {
  return (
    <>
      <Header />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Description"
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
    </> 
  );
}

export default App;
