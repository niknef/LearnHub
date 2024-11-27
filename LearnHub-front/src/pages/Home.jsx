import React from 'react';

const Home = () => {
    return (
        <div className="container my-5">
            {/* Bienvenida */}
            <section className="row align-items-center">
                {/* Texto de bienvenida */}
                <div className="col-lg-6 col-md-12 text-md-start text-center">
                    <h2 className="text-custom fw-bold display-4">¡Bienvenido a LearnHub!</h2>
                    <p className="lead text-muted">
                        Aprende, crece y alcanza tus metas con los mejores cursos, tecnologías y herramientas de desarrollo web. Nuestra plataforma te conecta con expertos y te ofrece los recursos necesarios para triunfar.
                    </p>
                    <p className="lead text-muted">
                        Descubre categorías especializadas, cursos diseñados para todos los niveles y tecnologías de vanguardia que te ayudarán a destacarte en el mundo digital.
                    </p>
                    
                </div>

                {/* Imagen de bienvenida */}
                <div className="col-lg-6 col-md-12 text-center">
                    <img 
                        src="/img/banner.png" 
                        alt="Banner LearnHub - Aprende con nosotros" 
                        className="img-fluid"
                        
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
