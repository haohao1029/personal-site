import { useMatcapTexture, Center, Text3D, OrbitControls, PerspectiveCamera, Sparkles, Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Ground } from './Ground'
import { FloatingGrid } from './FloatingGrid'
import { RigidBody, Physics } from '@react-three/rapier'

const material = new THREE.MeshPhysicalMaterial({
    metalness: 0,
    roughness: 0,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
    transmission: 0.8, // Set the transmission to 0.8
    transmissionIntensity: 0.8, // Set the transmission intensity to 0.8
    color: 0xffffff,
});

function App() {
    const donuts = useRef([])
    const [matcapTexture] = useMatcapTexture('C7C7D7_4C4E5A_818393_6C6C74', 256)

    useEffect(() => {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true
        material.transparent = true
        material.matcap = matcapTexture
        material.needsUpdate = true

    }, [])

    return (
        <>

            {/* <Perf position="top-left" /> */}
            <Physics>
                <OrbitControls autoRotate makeDefault enableZoom={false} />
                <PerspectiveCamera makeDefault fov={50} position={[1, 1, 5]} />
                <color args={[0,0,0]} attach="background" />

                <RigidBody>
                    <Center>
                        <mesh castShadow position={[- 5, 15, 10]}  >
                            <Text3D

                                material={material}
                                font="./VT323_Regular.json"
                                size={0.75}
                                height={0.2}
                                curveSegments={12}
                                bevelEnabled
                                bevelThickness={0.02}
                                bevelSize={0.02}
                                bevelOffset={0}
                                bevelSegments={5}
                            >
                                DEVELOPER / DATA ANALYST
                            </Text3D>
                        </mesh>
                    </Center>
                </RigidBody>
                <spotLight
                    color={[1, 0.25, 0.7]}
                    intensity={1.5}
                    angle={0.6}
                    penumbra={0.5}
                    position={[5, 5, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <spotLight
                    color={[0.14, 0.5, 1]}
                    intensity={2}
                    angle={0.6}
                    penumbra={0.5}
                    position={[-5, 5, 0]}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <RigidBody type="fixed">
                    <mesh receiveShadow position-y={- 1.25}>
                        <Ground />
                        <FloatingGrid />
                    </mesh>
                </RigidBody>
            </Physics >
            <Sparkles
                size={6}
                scale={[8, 2, 4]}
                speed={0.2}
            />

        </>
    )
}

export default App
