import Rect from './Rect.js'
import viewSystem from './viewSystem.js'
import moveSystem from './move.js'

const keydowns = {}
const keyboardEventsTable = {}

const addObject = (thing) => {
	if (thing.view) {
		viewSystem.add(thing)
	}
}

const cacheKeydown = () => {
    window.addEventListener('keydown', (e) => {
        e.preventDefault()
		const key = e.key
		keydowns[key] = true
	})
	window.addEventListener('keyup', (e) => {
        e.preventDefault()
		const key = e.key
		keydowns[key] = false
	})
}

const watchKeyEvents = () => {
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

export const theWorld = (selector) => {
	const canvasCtx = document.querySelector(selector).getContext('2d')
	window.canvasCtx = canvasCtx
	const rect = Rect()

	addObject(rect)
	if (rect.move) {
		moveSystem(rect)
	}

    cacheKeydown()

	const start = () => {
        clearCanvas()
		viewSystem.run()

        watchKeyEvents()

		window.requestAnimationFrame(start)
	}

	start()
}
