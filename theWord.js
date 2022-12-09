import Rect from './Rect.js'
import viewSystem from './viewSystem.js'
import moveSystem from './move.js'

const register = (thing) => {
	if (thing.view) {
		viewSystem.add(thing)
	}
}



const keydowns = {}

const theWorld = (selector) => {
	const canvasCtx = document.querySelector(selector).getContext('2d')
	window.canvasCtx = canvasCtx
	const rect = Rect()

	register(rect)
	if (rect.move) {
		moveSystem(rect)
	}
    const speed = 5
    const keyboardEventsTable = {
        'ArrowRight': () => {
            rect.view.existence.x += speed
        },
        'ArrowLeft': () => {
            rect.view.existence.x -= speed
        },
        'ArrowUp': () => {
            rect.view.existence.y -= speed
        },
        'ArrowDown': () => {
            rect.view.existence.y += speed
        },
    }

    window.addEventListener('keydown', (e) => {
        const key = e.key
        keydowns[key] = true
    })
    window.addEventListener('keyup', (e) => {
        const key = e.key
        keydowns[key] = false
    })

	const run = () => {
		viewSystem.run()

        const keys = Object.keys(keyboardEventsTable)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            if(keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                keyboardEventsTable[key]()
            }
        }

		window.requestAnimationFrame(run)
	}

	run()
}

export default theWorld
