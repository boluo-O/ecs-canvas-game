import ViewSystem from './system/viewSystem.js'
import MoveSystem from './system/moveSystem.js'

const FPS = (canvasCtx) => {
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

export default class TheWorld {
	constructor({ selector }) {
		this.canvasCtx = document.querySelector(selector).getContext('2d')
		this.fps = FPS(this.canvasCtx)
		this.keydowns = {}
		this.keyboardEventsTable = {}
		this.viewSystem = new ViewSystem(this.canvasCtx)
		this.moveSystem = new MoveSystem(
			this.canvasCtx,
			this.registerKeyboardEvents
		)
		this.cacheKeydown()
		this.start()
	}

	cacheKeydown() {
		window.addEventListener('keydown', (e) => {
			e.preventDefault()
			const key = e.code
			this.keydowns[key] = true
		})
		window.addEventListener('keyup', (e) => {
			e.preventDefault()
			const key = e.code
			this.keydowns[key] = false
		})
	}

	watchKeyEvents(cacheKeydown) {
		const keys = Object.keys(this.keyboardEventsTable)
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i]
			if (this.keydowns[key]) {
				this.keyboardEventsTable[key]()
			}
		}
	}

	registerKeyboardEvents = (key, callback) => {
		this.keyboardEventsTable[key] = callback
	}

	createObject(thing) {
		if (thing.view) {
			this.viewSystem.load(thing)
		}
		if (thing.move) {
			this.moveSystem.load(thing)
		}
		return thing
	}

	clearCanvas() {
		this.canvasCtx.clearRect(
			0,
			0,
			this.canvasCtx.canvas.width,
			this.canvasCtx.canvas.height
		)
	}

	start = (TIME) => {
		// think 如果利用类似react的diff算法重绘canvas性能会更好吗
		this.clearCanvas()

		// 键盘事件 （抽出事件系统？）
		this.watchKeyEvents(this.cacheKeydown)

		// FPS 也许有更好的实现，现在感觉和oop没啥区别
		this.fps.tick(TIME)
		this.fps.show()

		this.viewSystem.render()

		this.moveSystem.run()

		window.requestAnimationFrame(this.start)
	}
}
