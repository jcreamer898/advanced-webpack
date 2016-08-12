import ItineraryMaker from "./itineraryMaker";
import Stop from "./stop";

export default class App {
  // Poor man's DI
  constructor(itineraryMaker = new ItineraryMaker()) {
    itineraryMaker.add(new Stop({
      latLng: [30, -45],
      name: "Los Angeles"
    }));
  }
}
