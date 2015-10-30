class StarShip {
  constructor({
      captain,
      firstOfficer,
      weaponSystems = {},
      maxWarp = 5,
    }) {

    this.captain = captain;
    this.firstOfficer = firstOfficer;
    this.weaponSystems = weaponSystems;
    this.maxWarp = maxWarp;
  }
  fire(system) {
    this.weaponSystems[system].fire();
  }
  fireAll() {
    for(let system of this.weaponSystems) {
      this.weaponSystems[system].fire();
    }
  }
  warp(speed) {
    if (speed > this.maxWarp) {
      throw "I can't do it captain, I don't have the power!"
    }
  }
}

export default StarShip;
