export interface IStop {
  latLng: Array<Number>,
  name: String,
}

export interface IItineraryMaker {
  stops: Array<IStop>;
  add(stop: IStop): void;
  remove(stop: IStop): void; 
}