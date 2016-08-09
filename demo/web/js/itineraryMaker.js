export default class ItineraryMaker {
  stops = [];

  add(stop) {
    this.stops.push(stop);
  }

  remove(stop) {
    const index = this.stops.indexOf(stop);
    this.stops.splice(index, 1);
  }
}
