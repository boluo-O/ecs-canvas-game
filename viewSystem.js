const container = []

const renderView = (view) => {
	const type = view.type
	const renderTable = {
		image: () => {
			const img = new Image()
			img.src = view.src

			img.onload = () => {
				clearCanvas()
				canvasCtx.drawImage(img, view.existence.x, view.existence.y)
			}
		},
	}
	renderTable[type]()
}

const add = (thing) => {
	container.push(thing)
}

const clearCanvas = () => {
	// console.log('clear')
	canvasCtx.clearRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height)
}

// const initSource = (thing) => {
//     const type = view.type
// 	const renderTable = {
// 		image: () => {
// 			const img = new Image()
// 			img.src = view.src
// 			img.onload = () => {
//                 // console.log('draw')
//                 clearCanvas()
// 				canvasCtx.drawImage(img, view.existence.x, view.existence.y)
// 			}
// 		},
// 	}
//     renderTable[type]()
// }

// const initAllSource = () => {
//     for (let i = 0; i < container.length; i++) {
//         const thing = container[i]
//         // thing && console.log(thing.view.existence.x)
//         // renderView(thing.view)
//     }
// }

const run = () => {
	for (let i = 0; i < container.length; i++) {
		const thing = container[i]
		renderView(thing.view)
	}
	// clearCanvas()
}

export default {
	add,
	run,
}
