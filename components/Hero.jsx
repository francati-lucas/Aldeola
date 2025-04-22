import { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '../assets/unidade-fornecedora.jpg',
    '../assets/quem-somos.jpg',
    '../assets/unidade-jagua.jpg'
  ];

  // Pré-carregamento das imagens para evitar flashes
  useEffect(() => {
    backgroundImages.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="hero">
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Bem-vindo à Aldeola</h1>
          <h2>Onde cada torta conta uma história</h2>
          <p>Desfrute de cafés especiais, ambiente aconchegante e experiências únicas</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">Ver Cardápio</a>
            <a href="#contact" className="btn btn-secondary">Reservar Mesa</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 