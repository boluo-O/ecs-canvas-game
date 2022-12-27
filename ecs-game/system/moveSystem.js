export default class MoveSystem {
	constructor(canvasCtx, registerKeyboardEvents) {
		this.canvasCtx = canvasCtx
		this.registerKeyboardEvents = registerKeyboardEvents
		this.container = []
		this.speed = 0
		this.g = 1
	}

	load(thing) {
		const { view } = thing
		this.container.push(thing)
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
			Space: () => {},
		}
		for (const key in keyboardEventsTable) {
			const callback = keyboardEventsTable[key]
			this.registerKeyboardEvents(key, callback)
		}
	}

	run() {
		this.container.forEach((thing) => {
			if (thing.move.speedY !== undefined) {
				thing.view.existence.y += thing.move.speedY
				thing.move.speedY -= 1
				if (thing.move.originY < thing.view.existence.y) {
				}
			}
		})
	}
}
