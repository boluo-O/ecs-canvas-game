const keyboardEventsTable = {
    'ArrowRight': () => {
        thing.view.existence.x += speed
    },
    'ArrowLeft': () => {
        thing.view.existence.x -= speed
    },
    'ArrowUp': () => {
        thing.view.existence.y -= speed
    },
    'ArrowDown': () => {
        thing.view.existence.y += speed
    },
}

const keyDown = {}

const move = (thing) => {
	const speed = 10
	console.log('thing', thing)


}

export default move