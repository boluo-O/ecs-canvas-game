import { theWorld } from './ecs-game/theWord.js'

const __main = () => {
	const world = theWorld('#ecs-game-container')

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
            playerControl: true,
        }
	})
}

__main()
