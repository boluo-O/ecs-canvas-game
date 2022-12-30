// 实体类
// class Entity {
// 	public components: Component[] = [];

// 	public addComponent(component: Component) {
// 	  this.components.push(component);
// 	}
//   }

//   // 组件基类
//   abstract class Component {
// 	public entity: Entity;
//   }

//   // 小球组件
//   class BallComponent extends Component {
// 	public x: number = 0;
// 	public y: number = 0;
// 	public radius: number = 10;
// 	public speed: number = 5;

// 	public move(dx: number, dy: number) {
// 	  this.x += dx * this.speed;
// 	  this.y += dy * this.speed;
// 	}
//   }

//   // 绘图组件
//   class DrawComponent extends Component {
// 	public color: string = '#000000';

// 	public draw(context: CanvasRenderingContext2D) {
// 	  const ball = this.entity.components.find((c) => c instanceof BallComponent) as BallComponent;
// 	  context.beginPath();
// 	  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
// 	  context.fillStyle = this.color;
// 	  context.fill();
// 	  context.closePath();
// 	}
//   }
// // 系统基类
// abstract class System {
// 	public abstract update(dt: number): void;
// 	}

// 	// 移动系统
// 	class MovementSystem extends System {
// 	public update(dt: number) {
// 	for (const entity of engine.entities) {
// 	const ball = entity.components.find((c) => c instanceof BallComponent) as BallComponent;
// 	if (!ball) continue;
// 	if (Keyboard.isDown(Key.Up)) {
// 		ball.move(0, -1);
// 	  }
// 	  if (Keyboard.isDown(Key.Down)) {
// 		ball.move(0, 1);
// 	  }
// 	  if (Keyboard.isDown(Key.Left)) {
// 		ball.move(-1, 0);
// 	  }
// 	  if (Keyboard.isDown(Key.Right)) {
// 		ball.move(1, 0);
// 	  }
// 	}

///////////////////////////////////////////////////////////////

// // 定义组件类型
// class PositionComponent {
// 	x: number = 0
// 	y: number = 0
// }

// class VelocityComponent {
// 	x: number = 0
// 	y: number = 0
// }

// class RenderComponent {
// 	color: string = ''
// }

// class InputComponent {
// 	up: boolean = false;
// 	down: boolean = false;
// 	left: boolean = false;
// 	right: boolean = false;
//   }

// // 定义实体类型
// class Entity {
// 	position: PositionComponent
// 	velocity: VelocityComponent
// 	render: RenderComponent
// 	input: InputComponent // 新添加的输入组件

// 	constructor() {
// 		this.position = new PositionComponent()
// 		this.velocity = new VelocityComponent()
// 		this.render = new RenderComponent()
// 		this.input = new InputComponent()
// 	}
// }

// // 定义系统
// class MovementSystem {
// 	update(dt: number, entities: Entity[]) {
// 		for (const entity of entities) {
// 			entity.position.x += entity.velocity.x * dt
// 			entity.position.y += entity.velocity.y * dt
// 		}
// 	}
// }

// class RenderSystem {
// 	context: CanvasRenderingContext2D

// 	constructor(context: CanvasRenderingContext2D) {
// 		this.context = context
// 	}

// 	update(entities: Entity[]) {
// 		for (const entity of entities) {
// 			this.context.fillStyle = entity.render.color
// 			this.context.fillRect(entity.position.x, entity.position.y, 10, 10)
// 		}
// 	}
// }

// class InputSystem {
// 	// 设置速度值
// 	speed: number = 100;

// 	update(dt: number, entities: Entity[]) {
// 	  // 监听键盘事件，更新实体的输入组件
// 	  document.addEventListener("keydown", (event) => {
// 		for (const entity of entities) {
// 		  switch (event.keyCode) {
// 			case 38: // up arrow
// 			  entity.input.up = true;
// 			  break;
// 			case 40: // down arrow
// 			  entity.input.down = true;
// 			  break;
// 			case 37: // left arrow
// 			  entity.input.left = true;
// 			  break;
// 			case 39: // right arrow
// 			  entity.input.right = true;
// 			  break;
// 		  }
// 		}
// 	  });

// 	  document.addEventListener("keyup", (event) => {
// 		for (const entity of entities) {
// 		  switch (event.keyCode) {
// 			case 38: // up arrow
// 			  entity.input.up = false;
// 			  break;
// 			case 40: // down arrow
// 			  entity.input.down = false;
// 			  break;
// 			case 37: // left arrow
// 			  entity.input.left = false;
// 			  break;
// 			case 39: // right arrow
// 			  entity.input.right = false;
// 			  break;
// 		  }
// 		}
// 	  });
// 	}
//   }

//   // 创建游戏循环
// class GameLoop {
// 	entities: Entity[];
// 	inputSystem: InputSystem;
// 	movementSystem: MovementSystem;
// 	renderSystem: RenderSystem;

// 	constructor(context: CanvasRenderingContext2D) {
// 	  this.entities = [];
// 	  this.inputSystem = new InputSystem();
// 	  this.movementSystem = new MovementSystem();
// 	  this.renderSystem = new RenderSystem(context);

// 	  // 创建实体
// 	  const entity = new Entity();
// 	  entity.position.x = 100;
// 	  entity.position.y = 100;
// 	  entity.render.color = "red";
// 	  this.entities.push(entity);
// 	}

// 	start() {
// 	  // 记录上一帧的时间
// 	  let lastTime = 0;

// 	  // 使用 requestAnimationFrame 函数循环游戏
// 	  const gameLoop = (time: number) => {
// 		// 计算两帧之间的时间差
// 		const dt = time - lastTime;
// 		lastTime = time;

// 		// 更新系统
// 		this.inputSystem.update(dt, this.entities);
// 		this.movementSystem.update(dt, this.entities);
// 		this.renderSystem.update(dt, this.entities);

// 		// 继续下一帧
// 		requestAnimationFrame(gameLoop);
// 	  };

// 	  requestAnimationFrame(gameLoop);
// 	}
//   }

// const __main = () => {
// 	const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
// const context = canvas.getContext("2d");
// const game = new GameLoop(context);
// game.start();
// }

// export default __main
/////////////////////////////////////////////////////////////////////////////////////////////////

// class Entity {
//     constructor() {
//       this.components = new Set();
//     }

//     addComponent(component) {
//       this.components.add(component);
//     }

//     removeComponent(component) {
//       this.components.delete(component);
//     }

//     hasComponent(componentType) {
//       for (const component of this.components) {
//         if (component instanceof componentType) {
//           return true;
//         }
//       }
//       return false;
//     }

//     getComponent(componentType) {
//       for (const component of this.components) {
//         if (component instanceof componentType) {
//           return component;
//         }
//       }
//       return null;
//     }
//   }

//   class Component {}

//   class System {
//     constructor() {
//       this.entities = new Set();
//     }

//     addEntity(entity) {
//       this.entities.add(entity);
//     }

//     removeEntity(entity) {
//       this.entities.delete(entity);
//     }

//     update(dt) {
//       for (const entity of this.entities) {
//         this.updateEntity(entity, dt);
//       }
//     }

//     updateEntity(entity, dt) {}
//   }
