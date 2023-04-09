import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export function FloatingGrid() {
  const diffuse = useLoader(TextureLoader, "./grid-texture.png");

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping;
    diffuse.wrapT = RepeatWrapping;
    diffuse.repeat.set(30, 30);
  }, [diffuse]);



  return <>
      <mesh rotation-x={-Math.PI * 0.5} position={[0, 0, 0]}>
      <planeGeometry args={[35, 35]} />
      <meshBasicMaterial
        color={[1, 1, 1]}
        opacity={0.15}
        map={diffuse}
        alphaMap={diffuse}
        transparent={true}
      />
    </mesh>
  </>
}
