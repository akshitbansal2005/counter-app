import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Loading only necessary features

const Design = ({ theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initializing the particles engine only once
    const initParticlesEngine = async (engine) => {
      await loadSlim(engine);
      setInit(true);
    };

    initParticlesEngine(Particles.engine);
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          backgroundImage: 'url("https://example.com/your-background-image.jpg")', // Replace with your background image URL
          backgroundSize: "cover", // Ensure the image covers the whole background
          backgroundPosition: "center",
        }}
      >
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "transparent", // Ensuring particles are on top of the background image
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: theme === "dark" ? "#ffffff" : "#000000", // White for dark mode, black for light mode
                },
                links: {
                  color: theme === "dark" ? "#ffffff" : "#000000", // Same for links
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Design;
