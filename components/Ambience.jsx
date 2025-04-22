import '../styles/Ambience.css';

/*
 * Paleta de cores PANTONE utilizada:
 * - PANTONE 5767 C (Verde oliva): #5B7F47 - Cor principal para títulos e elementos de destaque
 * - PANTONE 5835 C (Verde musgo): #888C60 - Cor secundária para separadores e ícones
 * - PANTONE Cool Gray 9 C: #6D6E71 - Cor para textos secundários
 * - PANTONE 11-0601 Bright White: #F5F5F5 - Cor de fundo da seção
 */

const Ambience = () => {
  const featureItems = [
    {
      icon: "fas fa-beer",
      title: "Caneca Ultracongelada",
      description: "Servido em canecas ultracongeladas, perfeito para refrescar nos dias quentes",
      background: "../assets/unidade-jagua.jpg" // Imagem de fundo
    },
    {
      icon: "fas fa-chart-pie",
      title: "Tortas Artesanais",
      description: "Variedade de sabores produzidos diariamente com ingredientes selecionados",
      background: "../assets/quem-somos.jpg" // Imagem de fundo
    },
    {
      icon: "fas fa-birthday-cake",
      title: "Doces Irresistíveis",
      description: "Criações exclusivas para adoçar seu dia, impossível resistir",
      background: "../assets/unidade-fornecedora.jpg" // Imagem de fundo
    }
  ];

  return (
    <section id="ambience" className="ambience">
      <div className="container">
        <div className="section-header">
          <h2>Nosso Espaço</h2>
          <div className="separator"></div>
          <p className="section-subtitle">Um ambiente acolhedor para todos os momentos</p>
        </div>
        
        <div className="ambience-gallery">
          <div className="gallery-item large">
            <div className="gallery-image"></div>
            <div className="gallery-overlay">
              <h3>Ambiente Interno</h3>
              <p>Aconchegante e acolhedor</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image"></div>
            <div className="gallery-overlay">
              <h3>Terraço</h3>
              <p>Ar livre e natureza</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image"></div>
            <div className="gallery-overlay">
              <h3>Café Bar</h3>
              <p>Aprecie nossos cafés especiais</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <div className="gallery-image"></div>
            <div className="gallery-overlay">
              <h3>Espaço de Trabalho</h3>
              <p>Ideal para home office</p>
            </div>
          </div>
        </div>
        
        <div className="ambience-features">
          {featureItems.map((item, index) => (
            <div 
              key={index} 
              className="feature-item"
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <div className="feature-icon">
                  <i className={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambience; 