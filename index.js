import { theWorld } from './theWord.js'

const template = () => {
	let x = 10
	let y = 10
	let speed = 10
	const canvasCtx = document
		.querySelector('#ecs-game-container')
		.getContext('2d')
	const img = new Image()
	img.src = './thing.png'
	img.onload = () => {
		canvasCtx.drawImage(img, x, y)
	}

	window.addEventListener('keydown', (e) => {
		console.log('e', e)
		const key = e.key
		if (key === 'ArrowRight') {
			canvasCtx.clearRect(
				0,
				0,
				canvasCtx.canvas.width,
				canvasCtx.canvas.height
			)
			x += speed
			canvasCtx.drawImage(img, x, y)
		}
		if (key === 'ArrowLeft') {
			canvasCtx.clearRect(
				0,
				0,
				canvasCtx.canvas.width,
				canvasCtx.canvas.height
			)
			x -= speed
			canvasCtx.drawImage(img, x, y)
		}
		if (key === 'ArrowUp') {
			canvasCtx.clearRect(
				0,
				0,
				canvasCtx.canvas.width,
				canvasCtx.canvas.height
			)
			y -= speed
			canvasCtx.drawImage(img, x, y)
		}
		if (key === 'ArrowDown') {
			canvasCtx.clearRect(
				0,
				0,
				canvasCtx.canvas.width,
				canvasCtx.canvas.height
			)
			y += speed
			canvasCtx.drawImage(img, x, y)
		}
	})
}

const __main = () => {
	theWorld('#ecs-game-container')
	// theWorld()
}

__main()
