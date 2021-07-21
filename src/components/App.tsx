import * as React from 'react'
import { GroupProps, MeshProps, useFrame, useThree } from '@react-three/fiber'
import Box from './Box'

function App() {
  const three = useThree()
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 })
  const group = React.useRef<GroupProps>()
  const box2 = React.useRef<MeshProps>()

  React.useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX / three.size.width - 0.5
      const y = -(e.clientY / three.size.height - 0.5)
      setCursor({ x, y })
    }
    window.addEventListener('mousemove', updateCursor)
    return () => window.removeEventListener('mousemove', updateCursor)
  }, [])

  useFrame(() => {
    three.camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    three.camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    three.camera.position.y = cursor.y * 20
    three.camera.lookAt(group.current?.position)
  })

  useFrame(() => {
    if (!box2.current) return
    box2.current.position.x = Math.sin(three.clock.elapsedTime) * 1.8
    box2.current.position.y = Math.cos(three.clock.elapsedTime) * 1.2
  })

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group ref={group}>
        <Box position={[1, 1, 1]} />
        <Box position={[0, 1, 1]} rotation={[10, 2, 5]} ref={box2} />
      </group>
    </>
  )
}

export default App
