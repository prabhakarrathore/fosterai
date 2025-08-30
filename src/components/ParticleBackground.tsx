// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { useEffect, useState } from "react";
// import { loadSlim } from "@tsparticles/slim";
// import type { ISourceOptions } from "@tsparticles/engine";


// const ParticlesComponent = ({ props }: any) => {

//   const [init, setInit] = useState(false);
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = async (container?: Container): Promise<void> => {
//     console.log(container);
//   };


//   const options: ISourceOptions = {
//     particles: {
//       number: {
//         value: 50,
//         density: {
//           enable: true,
//           area: 800
//         }
//       },
//       color: {
//         value: "#ffffff"
//       },
//       shape: {
//         type: "circle"
//       },
//       opacity: {
//         value: 0.5
//       },
//       size: {
//         value: { min: 1, max: 5 }
//       },
//       links: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: "right",
//         random: false,
//         straight: false,
//         outModes: {
//           default: "out"
//         }
//       }
//     },
//     detectRetina: true
//   };


//   // return <Particles id={props.id} init={particlesLoaded} options={options} />;
//   return <Particles id={props.id} init={engineInit} loaded={particlesLoaded} options={options} />;

// };

// export default ParticlesComponent;
import { useEffect } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

interface IParticlesProps {
  id?: string;
  options?: ISourceOptions;
  style?: React.CSSProperties;
  className?: string;
  particlesLoaded?: (container?: Container) => void | Promise<void>;
}

const defaultOptions: ISourceOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        width: 800,
        height: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 5 },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "right",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  detectRetina: true,
};

const ParticlesComponent = ({
  id = "tsparticles",
  options,
  style,
  className,
}: IParticlesProps) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id={id}
      options={options ?? defaultOptions}
      style={style}
      className={className}
    />
  );
};

export default ParticlesComponent;
