class Entity {
    constructor() {
      this.components = new Set();
    }
  
    addComponent(component) {
      this.components.add(component);
    }
  
    removeComponent(component) {
      this.components.delete(component);
    }
  
    hasComponent(componentType) {
      for (const component of this.components) {
        if (component instanceof componentType) {
          return true;
        }
      }
      return false;
    }
  
    getComponent(componentType) {
      for (const component of this.components) {
        if (component instanceof componentType) {
          return component;
        }
      }
      return null;
    }
  }
  
  class Component {}
  
  class System {
    constructor() {
      this.entities = new Set();
    }
  
    addEntity(entity) {
      this.entities.add(entity);
    }
  
    removeEntity(entity) {
      this.entities.delete(entity);
    }
  
    update(dt) {
      for (const entity of this.entities) {
        this.updateEntity(entity, dt);
      }
    }
  
    updateEntity(entity, dt) {}
  }