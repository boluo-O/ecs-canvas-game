import { registerKeyboardEvents } from '../theWord.js'

// 移动
// 上下左右移动

const moveSystem = (thing) => {
	const { view } = thing
	const speed = 10

	const keyboardEventsTable = {
		ArrowRight: () => {
			view.existence.x += speed
		},
		ArrowLeft: () => {
			view.existence.x -= speed
		},
		ArrowUp: () => {
			view.existence.y -= speed
		},
		ArrowDown: () => {
			view.existence.y += speed
		},
	}
	for (const key in keyboardEventsTable) {
		const callback = keyboardEventsTable[key]
		registerKeyboardEvents(key, callback)
	}
}

export default moveSystem
