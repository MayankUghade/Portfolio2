"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

const GlobeComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    const canvas = canvasRef.current;

    if (!canvas) return;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: canvas.offsetWidth * 2,
      height: canvas.offsetHeight * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.5, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.1 }, // New York
        { location: [20.5937, 78.9629], size: 0.1 }, // India
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005; // Reduce the speed
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center relative top-19">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[320px] max-h-[320px]"
        width="1000"
        height="1000"
      ></canvas>
    </div>
  );
};

export default GlobeComponent;
