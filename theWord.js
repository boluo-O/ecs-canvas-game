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

const FPS = () => {
    let fps = 0
    let LAST_FRAME_TIME = 0
    let LAST_SHOW_FPS_TIME = 0
    let TICK_INTERVAL = 1000    // ms 每次计算fps间隔时间，默认1000 ms

    return {
        tick: (TIME) => {
            if (performance.now() > TICK_INTERVAL + LAST_SHOW_FPS_TIME) {
                fps = parseInt(1000 / (performance.now() - LAST_FRAME_TIME))
                LAST_SHOW_FPS_TIME = TIME
            }
            LAST_FRAME_TIME = TIME
        },
        show: () => {
            canvasCtx.fillStyle = "Green";
            canvasCtx.font      = "normal 16pt Arial";
            canvasCtx.fillText(fps + " fps", 10, 26);
        }
    }
}

export const theWorld = (selector) => {
	const canvasCtx = document.querySelector(selector).getContext('2d')
	window.canvasCtx = canvasCtx
	const rect = Rect()
    const fps = FPS()

	addObject(rect)
	if (rect.move) {
		moveSystem(rect)
	}

    cacheKeydown()

	const start = (TIME) => {
        // think 如果利用类似react的diff算法重绘canvas性能会更好吗
        clearCanvas()   
        
        // FPS 计算
        fps.tick(TIME)
        fps.show()

        watchKeyEvents()
		viewSystem.render()


		window.requestAnimationFrame(start)
	}

	start()
}
