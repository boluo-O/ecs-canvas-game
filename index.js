import TheWorld from './ecs-game/theWord.js'

const __main = () => {
	const world = new TheWorld({
		type: '3d',
		camera: {
			fov: 75,
			aspect: window.innerWidth / window.innerHeight,
			near: 0.1,
			far: 1000,
			position: {
				z: 5,
			},
		},
		sceneSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		containerSelector: '.ecs-game-container',
	})

	const rect = world.createObject({
		name: 'rect',
		view: {
			type: 'three_cube',
			hide: false,
			color: 0xffff00,
			position: {
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
