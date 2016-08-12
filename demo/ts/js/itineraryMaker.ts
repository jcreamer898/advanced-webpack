import { IStop, IItineraryMaker } from "../typings/index.d.ts";

export default class ItineraryMaker implements IItineraryMaker{
  stops: Array<IStop>;
  
  constructor() {
    this.stops = [];
  }

  add(stop: IStop) {
    this.stops.push(stop);
  }

  remove(stop: IStop) {
    const index = this.stops.indexOf(stop);
    this.stops.splice(index, 1);
  }
}
