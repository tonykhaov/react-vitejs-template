import type { MeshProps } from '@react-three/fiber'
import * as React from 'react'

const Box = React.forwardRef<React.ReactNode, MeshProps>((props, ref) => {
  const [hover, setHover] = React.useState(false)
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
    </mesh>
  )
})

export default Box
