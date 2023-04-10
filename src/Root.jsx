import { Canvas } from '@react-three/fiber'
import App from './App'
import { NavLink, Outlet } from 'react-router-dom'
export function Root() {
    return (
        <>
            <header>
                <h1 className="logo">Kingsley Gan</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-me">About Us</NavLink>
                </nav>
            </header>
            <Outlet />

            <div style={{ height: "100vh", width: "100wh" }}>
                <Canvas
                    camera={{
                        fov: 35,
                        near: 0.1,
                        far: 2000,
                        position: [-3, 1.5, 4]
                    }}
                >
                    <App />
                </Canvas>
            </div>
        </>
    );
}