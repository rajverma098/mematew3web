// AnimatedImage.jsx
const GlobeSpin = () => {
  return (
    <div>
      <style jsx>{`
        @keyframes globeSpin {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        
        .globe-image {
          animation: globeSpin 3s ease-in-out infinite;
          width: 200px;
          position: absolute;
          top: 20px;
          right: 150px;
        }
      `}</style>
      
      <img 
        src="/dark/assets/imgs/header/glob-img.png" 
        alt=""
        className="globe-image"
      />
    </div>
  );
};

export default GlobeSpin;