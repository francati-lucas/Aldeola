import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Nossa História</h2>
          <div className="separator"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame"></div>
          </div>
          
          <div className="about-text">
            <h3>Tradição & Paixão</h3>
            <p>
              Fundada em 2010, a Aldeola nasceu da paixão de seus fundadores pelo café e pela gastronomia. 
              Nosso nome vem da combinação de "aldeia" e "ola" (saudação), representando nosso desejo de criar 
              um espaço acolhedor onde todos se sintam bem-vindos.
            </p>
            <p>
              Na Aldeola, selecionamos cuidadosamente grãos de café especiais de produtores locais, 
              preparamos alimentos frescos diariamente e criamos um ambiente que convida à conexão, 
              conversa e momentos especiais.
            </p>
            <p>
              Nossa missão é oferecer mais que café – queremos proporcionar experiências memoráveis 
              em cada visita, com atendimento caloroso e produtos de qualidade excepcional.
            </p>
          </div>
        </div>
        
        <div className="about-values-wrapper">
          <h3 className="values-title">Nossos Valores</h3>
          <div className="about-values">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="value-content">
                <h4>Qualidade</h4>
                <p>Ingredientes selecionados cuidadosamente para garantir o melhor sabor em cada xícara e prato servido.</p>
                <div className="value-detail-link">
                  <a href="#quality">Saiba mais <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="value-content">
                <h4>Sustentabilidade</h4>
                <p>Compromisso com práticas responsáveis, desde o cultivo dos grãos até a gestão de resíduos.</p>
                <div className="value-detail-link">
                  <a href="#sustainability">Saiba mais <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="value-content">
                <h4>Comunidade</h4>
                <p>Criamos espaços que fomentam conexões, valorizando relacionamentos e a cultura local.</p>
                <div className="value-detail-link">
                  <a href="#community">Saiba mais <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 