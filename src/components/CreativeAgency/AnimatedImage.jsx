import GlobeSpin from "./GlobeSpin";

// AnimatedImage.jsx
const AnimatedImage = () => {
  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        
        .pulse-image {
          animation: pulse 2.5s ease-in-out infinite;
        }
      `}</style>
     <div style={{ position: 'relative', display: 'inline-block' }}>
        <GlobeSpin />
        <img 
          src="/dark/assets/imgs/header/banner-imgm.png" 
          alt=""
          className="pulse-image"
        />
      </div>
    </>
  );
};

export default AnimatedImage;