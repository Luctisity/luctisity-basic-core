import { Action } from "../actions";

import { EventListenersChannel } from "../../events/eventManager";
import { EVOUT_NODE_ASK, EVOUT_NODE_SAY } from "../../events/events";

export const wait = (action: Action) => {
    console.log("waiting " + action.duration + "s...");
}


export const say = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, false, false);
}

export const sayFor = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, false, true);
}

export const think = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, true, false);
}

export const thinkFor = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, true, true);
}

export const ask = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_NODE_ASK, action.target, action.content, action.inline);
}