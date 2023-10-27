import EVENTS from "$lib/common/constants/events";
import { switchEvents } from "$lib/common/events";

class EventBus {
  handlers: Map<any, any>;

  constructor() {
    this.handlers = new Map();
  }

  on(event: string, handler: any) {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event).push(handler);
  }

  off(event: string, handler: any) {
    if (this.handlers.has(event)) {
      const handlers = this.handlers.get(event);
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }

  emit(event: string, payload: any) {
    if (this.handlers.has(event)) {
      for (const handler of this.handlers.get(event)) {
        handler(event, payload);
      }
    } else {
      console.log(`Unhandled event: ${event}`);
    }
  }
}6

const eventBus = new EventBus();

for( const key in EVENTS ){
  // @ts-ignore
    eventBus.on(EVENTS[key], switchEvents);
}


export function dispatchEvent<T>(event: string, data: T, func: typeof eventBus = eventBus): void{
  eventBus.emit(event, data);
}

export { eventBus };
