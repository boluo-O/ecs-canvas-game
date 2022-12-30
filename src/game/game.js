const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

class PositionComponent extends Component {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
}

class VelocityComponent extends Component {
    constructor(dx, dy) {
      super();
      this.dx = dx;
      this.dy = dy;
    }
  }
  
  class SpriteComponent extends Component {
    constructor(sprite) {
      super();
      this.sprite = sprite;
    }
  }
  
  class MovementSystem extends System {
    updateEntity(entity, dt) {
      const position = entity.getComponent(PositionComponent);
      const velocity = entity.getComponent(VelocityComponent);
      position.x += velocity.dx * dt;
      position.y += velocity.dy * dt;
    }
  }
  
  class RenderSystem extends System {
    updateEntity(entity, dt) {
      const position = entity.getComponent(PositionComponent);
      const sprite = entity.getComponent(SpriteComponent);
      ctx.drawImage(sprite.image, position.x, position.y);
    }
  }
  
  const movementSystem = new MovementSystem();
  const renderSystem = new RenderSystem();
  
  const playerSprite = new Image();
  playerSprite.src = 'path/to/player/sprite.png';
  
  const player = new Entity();
  player.addComponent(new PositionComponent(100, 100));
  player.addComponent(new VelocityComponent(100, 100));
  player.addComponent(new SpriteComponent(playerSprite));
  movementSystem.addEntity(player);
  renderSystem.addEntity(player);
  
  function gameLoop(timestamp) {
    const dt = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    movementSystem.update(dt);
    renderSystem.update(dt);
    requestAnimationFrame(gameLoop);
}

let lastTimestamp = 0;
requestAnimationFrame(gameLoop);