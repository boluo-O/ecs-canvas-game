import viewSystem from './system/viewSystem.js'
import moveSystem from './system/moveSystem.js'

const keydowns = {}
const keyboardEventsTable = {}

const cacheKeydown = () => {
	window.addEventListener('keydown', (e) => {
		e.preventDefault()
		const key = e.code
		// console.log('e', e)
		keydowns[key] = true
	})
	window.addEventListener('keyup', (e) => {
		e.preventDefault()
		const key = e.code
		keydowns[key] = false
	})
}

const watchKeyEvents = (cacheKeydown) => {
	// const { keydowns, keyboardEventsTable } = cacheKeydown
	const keys = Object.keys(keyboardEventsTable)
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i]
		if (keydowns[key]) {
			keyboardEventsTable[key]()
		}
	}
}

const clearCanvas = () => {
	canvasCtx.clearRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height)
}

export const registerKeyboardEvents = (key, callback) => {
	keyboardEventsTable[key] = callback
}

const FPS = () => {
	let fps = 0
	let LAST_FRAME_TIME = 0
	let LAST_SHOW_FPS_TIME = 0
	let TICK_INTERVAL = 1000 // ms 每次计算fps间隔时间，默认1000 ms

	return {
		tick: (TIME) => {
			if (performance.now() > TICK_INTERVAL + LAST_SHOW_FPS_TIME) {
				fps = parseInt(1000 / (performance.now() - LAST_FRAME_TIME))
				LAST_SHOW_FPS_TIME = TIME
			}
			LAST_FRAME_TIME = TIME
			// this.show()
		},
		show: () => {
			canvasCtx.fillStyle = 'Green'
			canvasCtx.font = 'normal 16pt Arial'
			canvasCtx.fillText(fps + ' fps', 10, 26)
		},
		getFps: () => {
			return fps
		},
		limit: (maxFps) => {},
	}
}

const createObject = (thing) => {
	if (thing.view) {
		viewSystem.load(thing)
	}
	if (thing.move) {
		moveSystem.load(thing)
	}
	return thing
}

export const theWorld = (selector) => {
	const canvasCtx = document.querySelector(selector).getContext('2d')
	window.canvasCtx = canvasCtx
	const fps = FPS()

	cacheKeydown()

	const start = (TIME) => {
		// think 如果利用类似react的diff算法重绘canvas性能会更好吗
		clearCanvas()

		// keybord Events watch 抽出输入事件系统？
		watchKeyEvents(cacheKeydown)

		// FPS 也许有更好的实现，现在感觉和oop没啥区别
		fps.tick(TIME)
		fps.show()

		// viewSystem
		viewSystem.render()

		moveSystem.run()

		window.requestAnimationFrame(start)
	}
	start()

	return {
		createObject,
	}
}
