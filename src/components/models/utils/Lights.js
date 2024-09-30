import { Environment, Lightformer } from '@react-three/drei'

const Lights = () => {
  return (
    <group name="lights">
      {}
      <Environment resolution={256}>
        <group>
          {}
          <Lightformer
            form="rect"
            intensity={5}
            position={[-1, 0, -10]}
            scale={10}
            color={'#495057'}
          />
          <Lightformer
            form="rect"
            intensity={1}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={5}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.02}
        color={'#f8f9fa'}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.02}
        color={'#f8f9fa'}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 0.01}
      />
    </group>
  )
}

export default Lights
