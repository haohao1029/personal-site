import { useMatcapTexture, Center, Text3D, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useControls } from 'leva'
import { Ground } from './Ground'
import { FloatingGrid } from './FloatingGrid'
import { RigidBody, Physics } from '@react-three/rapier'
const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const sphereGeometry = new THREE.SphereGeometry(0.05)
const sphereMaterial = new THREE.MeshMatcapMaterial()

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
    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
        envMapIntensity: { value: 7, min: 0, max: 12 },
        envMapHeight: { value: 7, min: 0, max: 100 },
        envMapRadius: { value: 28, min: 10, max: 1000 },
        envMapScale: { value: 100, min: 10, max: 1000 }
    })

    useEffect(() => {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])

    return (
        <>
            <Physics>

                <Perf position="top-left" />
                <OrbitControls makeDefault />
                <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
                <color args={[0, 0, 0]} attach="background" />

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
                                GAN JING HAO
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
        </>
    )
}

export default App
