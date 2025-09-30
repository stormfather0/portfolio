// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />;
// };

// const ReactLogoModel = () => {
//   return (
//     <div className="w-full h-[500px]">
//       <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Suspense fallback={null}>
//           <Model url=".assets/react_logo.glb" />
//         </Suspense>
//         <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />
//       </Canvas>
//     </div>
//   );
// };

// export default ReactLogoModel;