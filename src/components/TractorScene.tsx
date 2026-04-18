import React from 'react';
import './TractorScene.css';

const TractorScene: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Farms in Action</h2>
        <div className="w-24 h-1 bg-[#1a4d2e] mx-auto rounded-full"></div>
      </div>
      
      <div className="tractor-scene-container">
        {/* Sky Elements */}
        <div className="sun">
          <div className="sun-rays"></div>
        </div>
        
        <div className="cloud cloud-1" style={{ top: '60px', animationDuration: '40s' }}></div>
        <div className="cloud cloud-1" style={{ top: '120px', animationDuration: '35s', animationDelay: '-10s', scale: '0.7', opacity: '0.6' }}></div>
        <div className="cloud cloud-1" style={{ top: '40px', animationDuration: '50s', animationDelay: '-20s', scale: '1.2', opacity: '0.4' }}></div>

        {/* Hills */}
        <div className="hill hill-back"></div>
        <div className="hill hill-middle"></div>
        <div className="hill hill-front"></div>

        {/* Tractor */}
        <div className="tractor-wrapper">
          <div className="tractor">
            <div className="tractor-exhaust">
              <div className="smoke"></div>
              <div className="smoke" style={{ animationDelay: '0.3s' }}></div>
              <div className="smoke" style={{ animationDelay: '0.6s' }}></div>
            </div>
            <div className="tractor-cabin">
              <div className="cabin-window"></div>
            </div>
            <div className="tractor-body"></div>
            <div className="wheel wheel-front"></div>
            <div className="wheel wheel-back"></div>
          </div>
        </div>

        {/* Grass Blades for foreground detail */}
        <div className="grass-container">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="blade" 
              style={{ 
                height: `${10 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.5 + Math.random() * 0.5
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TractorScene;
