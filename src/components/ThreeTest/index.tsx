import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'

import draw from './draw'

const renderer = new THREE.WebGLRenderer()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
camera.position.z = 5

const ThreeTest = () => {
	const [positionX, setPositionX] = useState(0)
	const [positionY, setPositionY] = useState(0)
	const positionXRef = useRef(0)
	const positionYRef = useRef(0)

	const __main = () => {
		// const controls = new OrbitControls(camera, renderer.domElement)
	}
	const animate = () => {
		function animate() {
			requestAnimationFrame(animate)
			// console.log('animate ositionX', positionX)
			cube.rotation.x = positionXRef.current * 0.01
			cube.rotation.y = positionYRef.current * 0.01
			// cube.rotation.y += 0.01

			renderer.render(scene, camera)
		}
		animate()
	}

	useEffect(() => {
		positionXRef.current = positionX
	}, [positionX])
	useEffect(() => {
		positionYRef.current = positionY
	}, [positionY])

	useEffect(() => {
		animate()
	}, [])

	return (
		<div>
			<input
				type="range"
				name=""
				id=""
				value={positionX}
				onChange={(e) => setPositionX(e.target.value)}
			/>
			<input
				type="range"
				name=""
				id=""
				value={positionY}
				onChange={(e) => setPositionY(e.target.value)}
			/>
		</div>
	)
}

export default ThreeTest
