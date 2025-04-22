import '../styles/Locations.css';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Jaguariúna',
      address: 'Rua Cândido Bueno, 456 - Centro',
      coordinates: '-22.7046,-46.9857', // Coordenadas fictícias (latitude,longitude)
      phone: '(19) 99123-4567',
      image: '../assets/unidade-jagua.jpg',
      hours: 'Seg a Sex: 8h às 19h | Sáb e Dom: 9h às 17h'
    },
    {
      id: 2,
      name: 'Amparo',
      address: 'Av. Bernardino de Campos, 789 - Centro',
      coordinates: '-22.7012,-46.7644', // Coordenadas fictícias
      phone: '(19) 99234-5678',
      image: '../assets/quemsomos-empresa.jpg',
      hours: 'Seg a Sex: 8h às 19h | Sáb: 9h às 17h | Dom: 9h às 15h'
    },
    {
      id: 3,
      name: 'Pedreira',
      address: 'Rua XV de Novembro, 321 - Centro',
      coordinates: '-22.7413,-46.9025', // Coordenadas fictícias
      phone: '(19) 99345-6789',
      image: '../assets/unidade-fornecedora.jpg',
      hours: 'Seg a Sex: 8h30 às 18h30 | Sáb: 9h às 16h | Dom: Fechado'
    },
    {
      id: 4,
      name: 'Serra Negra',
      address: 'Av. João Gerosa, 123 - Centro',
      coordinates: '-22.6118,-46.7003', // Coordenadas fictícias
      phone: '(19) 99456-7890',
      image: '../assets/quem-somos.jpg',
      hours: 'Seg a Sex: 9h às 20h | Sáb e Dom: 10h às 19h'
    }
  ];

  // Função para criar URLs de navegação
  const getNavigationLinks = (coordinates, address) => {
    const encodedAddress = encodeURIComponent(address);
    return {
      google: `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`,
      waze: `https://waze.com/ul?ll=${coordinates}&navigate=yes`
    };
  };

  return (
    <section id="locations" className="locations">
      <div className="container">
        <div className="section-header">
          <h2>Nossas Unidades</h2>
          <div className="separator"></div>
          <p className="section-subtitle">Visite uma das nossas unidades e desfrute de momentos especiais</p>
        </div>
        
        <div className="locations-grid">
          {locations.map((location) => {
            const navLinks = getNavigationLinks(location.coordinates, location.address);
            return (
              <div key={location.id} className="location-card">
                <div className="location-image" style={{ backgroundImage: `url(${location.image})` }}>
                  <div className="location-overlay">
                    <h3>{location.name}</h3>
                  </div>
                </div>
                <div className="location-info">
                  <div className="location-address">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{location.address}</p>
                  </div>
                  <div className="location-hours">
                    <i className="far fa-clock"></i>
                    <p>{location.hours}</p>
                  </div>
                  <div className="location-navigation">
                    <p className="nav-label">Como chegar:</p>
                    <div className="navigation-options">
                      <a href={navLinks.google} target="_blank" rel="noopener noreferrer" className="nav-link google-maps">
                        <i className="fas fa-map"></i>
                        <span>Google Maps</span>
                      </a>
                      <a href={navLinks.waze} target="_blank" rel="noopener noreferrer" className="nav-link waze">
                        <i className="fas fa-location-arrow"></i>
                        <span>Waze</span>
                      </a>
                    </div>
                  </div>
                  <div className="location-contact">
                    <a href={`https://wa.me/${location.phone.replace(/\D/g, '')}`} className="whatsapp-link">
                      <i className="fab fa-whatsapp"></i>
                      <span>{location.phone}</span>
                    </a>
                  </div>
                  <div className="location-menu">
                    <a href={`#menu-${location.name.toLowerCase()}`} className="menu-link">
                      <i className="fas fa-utensils"></i>
                      <span>Ver Cardápio</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Locations; 