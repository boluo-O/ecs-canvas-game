import { registerKeyboardEvents } from '../theWord.js'

// 移动
// 上下左右移动

const move = () => {
	
}
const container = []

const load = (thing) => {
	const { view } = thing
	container.push(thing)
	const speed = 10
	const g = 1

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
		Space: () => {
			// console.log('jump')
			// let jumpSpeed = 10
			// const originY = view.existence.y
			// view.existence.y -= jumpSpeed
			// jumpSpeed -= g
			thing.move.speedY = 10
			thing.move.originY = view.existence.y
			// while (originY > view.existence.y) {
				
			// 	jumpSpeed -= g
			// }
			// console.log('originY', originY)
			// console.log('view.existence.y',view.existence.y )
			// setTimeout(() => {
			// 	console.log('jumpSpeed', jumpSpeed)
			// 	// while (jumpSpeed <= 0 && (originY > view.existence.y)) {
			// 	// 	view.existence.y -= jumpSpeed
			// 	// 	jumpSpeed -= g
			// 	// }
				
			// }, 0)
		},
	}
	for (const key in keyboardEventsTable) {
		const callback = keyboardEventsTable[key]
		registerKeyboardEvents(key, callback)
	}
}
let speed = 0
const run = () => {
	container.forEach(thing => {
		if (thing.move.speedY !== undefined) {
			thing.view.existence.y += thing.move.speedY
			thing.move.speedY -= 1
			if (thing.move.originY < thing.view.existence.y) {
				
			}
		}
	})
}

export default {
	load,
	run,
}
