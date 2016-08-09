import { IStop, IItineraryMaker } from "../typings/index.d.ts";

export default class ItineraryMaker implements IItineraryMaker{
  stops: Array<IStop>;

  add(stop: IStop) {
    this.stops.push(stop);
  }

  remove(stop: IStop) {
    const index = this.stops.indexOf(stop);
    this.stops.splice(index, 1);
  }
}
