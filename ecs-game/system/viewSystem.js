const container = []
const resourceContainer = {}

const drawImage = (img, view) => {
	if (view.existence.x < 0) {
		view.existence.x = 0
	} else if (view.existence.x > canvasCtx.canvas.width - img.width) {
		view.existence.x = canvasCtx.canvas.width - img.width
	}
	if (view.existence.y < 0) {
		view.existence.y = 0
	} else if (view.existence.y > canvasCtx.canvas.height - img.height) {
		view.existence.y = canvasCtx.canvas.height - img.height
	}

	canvasCtx.drawImage(img, view.existence.x, view.existence.y)
}

const renderView = (view) => {
	const type = view.type
	const renderTable = {
		image: () => {
			const src = view.src

			if (resourceContainer[src]) {
				drawImage(resourceContainer[src], view)
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

const render = () => {
	for (let i = 0; i < container.length; i++) {
		const view = container[i]
		renderView(view)
	}
}

export default {
	add,
	render,
}
