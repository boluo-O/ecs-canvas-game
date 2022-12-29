import * as THREE from 'three'

export default class ViewSystem {
	constructor(canvasCtx) {
		this.canvasCtx = canvasCtx
		this.container = []
		this.resourceContainer = {}
	}

	load(thing) {
		this.container.push(thing.view)
	}

	drawImage(img, view) {
		if (view.existence.x < 0) {
			view.existence.x = 0
		} else if (view.existence.x > this.canvasCtx.canvas.width - img.width) {
			view.existence.x = this.canvasCtx.canvas.width - img.width
		}
		if (view.existence.y < 0) {
			view.existence.y = 0
		} else if (
			view.existence.y >
			this.canvasCtx.canvas.height - img.height
		) {
			view.existence.y = this.canvasCtx.canvas.height - img.height
		}
		this.canvasCtx.drawImage(img, view.existence.x, view.existence.y)
	}

	renderView(view) {
		const type = view.type
		const renderTable = {
			image: () => {
				const src = view.src

				if (this.resourceContainer[src]) {
					this.drawImage(this.resourceContainer[src], view)
				} else {
					const img = new Image()
					img.src = src
					img.onload = () => {
						this.resourceContainer[src] = img
					}
				}
			},
			three_cube: () => {},
		}
		renderTable[type]()
	}

	render() {
		for (let i = 0; i < this.container.length; i++) {
			const view = this.container[i]
			this.renderView(view)
		}
	}
}
