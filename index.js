import TheWorld from './ecs-game/theWord.js'

const __main = () => {
	const world = new TheWorld({ selector: '#ecs-game-container' })

	const rect = world.createObject({
		name: 'rect',
		view: {
			type: 'image',
			src: './public/img/rect.png',
			hide: false,
			existence: {
				x: 100,
				y: 100,
			},
			碰撞: true,
		},
		move: {
			type: 'playerControl', // none | active | passive | playerControl
		},
	})
}

__main()
