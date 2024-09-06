import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/foreclosed-property-eviction-house-expropriation-260nw-2200285493.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        margin: '0',
        padding: '0',
      }}
    >
      <h1 className="text-4xl font-bold pt-32">Bienvenido a <span className='text-yellow-300'>SquatterBuster</span></h1>
      <p className="mt-44 mx-36 font-semibold text-blue-700">Desde aquí podrás notificar que tu vivienda se encuentra ocupada ilegalmente y solicitar a través de nuestros profesionales para que pongan en marcha el desahucio y desalojo de la vivienda legalmente con la mayor celeridad posible y a un precio asequible para ti.</p>
    </div>
  );
};

export default Home;
