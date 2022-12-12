const container = []
const resourceContainer = {}

const renderView = (view) => {
	const type = view.type
	const renderTable = {
		image: () => {
			const src = view.src

			if (resourceContainer[src]) {
				canvasCtx.drawImage(
					resourceContainer[src],
					view.existence.x,
					view.existence.y
				)
			} else {
				const img = new Image()
				img.src = src
				img.onload = () => {
					resourceContainer[src] = img
				}
			}
		},
	}
	renderTable[type]()
}

const add = (thing) => {
	container.push(thing.view)
}

const run = () => {
	for (let i = 0; i < container.length; i++) {
		const view = container[i]
		renderView(view)
	}
}

export default {
	add,
	run,
}
