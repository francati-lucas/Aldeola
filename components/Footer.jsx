import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Aldeola</h3>
            <p>Café & Bistrô</p>
            <p>Rua das Flores, 123 - Centro</p>
            <p>São Paulo - SP</p>
            <p>Tel: (11) 99999-9999</p>
          </div>
          
          <div className="footer-hours">
            <h4>Horário de Funcionamento</h4>
            <p>Segunda a Sexta: 08h às 20h</p>
            <p>Sábados: 09h às 18h</p>
            <p>Domingos: 10h às 16h</p>
          </div>
          
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Aldeola Café & Bistrô. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 