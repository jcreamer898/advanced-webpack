import { IStop } from "../typings/index.d.ts";

export default class Stop implements IStop {
  latLng: Array<Number>;
  name: String;

  constructor({ 
    latLng,
    name,
  }: {
    latLng: Array<Number>,
    name: String
  }) {
    this.latLng = latLng;
    this.name = name;
  }
}
