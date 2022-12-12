import Rect from './Rect.js'
import viewSystem from './viewSystem.js'
import moveSystem from './move.js'

const keydowns = {}
const keyboardEventsTable = {}
// FPS
let fps = 0
let LAST_FRAME_TIME = 0
let LAST_SHOW_FPS_TIME = 0

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
function showFPS(){
    canvasCtx.fillStyle = "Green";
    canvasCtx.font      = "normal 16pt Arial";
    canvasCtx.fillText(fps + " fps", 10, 26);
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
    console.log('canvasCtx', canvasCtx.canvas.width)

	const start = (TIME) => {
        // think 如果利用类似react的diff算法重绘canvas性能会更好吗
        clearCanvas()   
        
        // FPS 计算
        showFPS()
        if (performance.now() > 1000 + LAST_SHOW_FPS_TIME) {
            fps = parseInt(1000 / (performance.now() - LAST_FRAME_TIME))
            LAST_SHOW_FPS_TIME = TIME
        }
        LAST_FRAME_TIME = TIME
 

        watchKeyEvents()
		viewSystem.animate()


		window.requestAnimationFrame(start)
	}

	start()
}
