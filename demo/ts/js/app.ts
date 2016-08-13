import ItineraryMaker from "./itineraryMaker";
import Stop from "./stop";

class App {
  // Poor man's DI
  constructor(itineraryMaker = new ItineraryMaker()) {
    const stop = new Stop({
      latLng: [30, -45],
      name: "Nashville"
    });

    itineraryMaker.add(stop);
    console.log(itineraryMaker.stops.length);
  }
}

const app = new App();

const div = document.createElement("div");
div.innerHTML = "Itinerary Maker";
document.body.appendChild(div);
