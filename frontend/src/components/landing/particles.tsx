"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine);
      console.log("tsParticles loaded successfully.");
    } catch (error) {
      console.error("Error loading tsParticles:", error);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            speed: 5,
            direction: "top",
            outModes: { default: "out" },
          },
        },
        background: { color: "#000000" },
      }}
    />
  );
};

export default ParticlesBackground;
