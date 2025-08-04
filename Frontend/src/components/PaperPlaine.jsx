import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const PaperPlane = () => {
  const ref = useRef();
  const { scene } = useGLTF('/PaperPlane.glb');
  const clock = useRef(0);

  useFrame(() => {
    if (ref.current) {
      clock.current += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.position.x = Math.sin(clock.current) * 2.5;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.4}
      position={[0, 0, 0]}
    />
  );
};

export default PaperPlane;
