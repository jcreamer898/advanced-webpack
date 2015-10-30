class TorpedoLauncher {
  constructor() {
    this.shotsRemaining = 10;
  }
  fire() {
    this.shotsRemaining -= 1;

    console.log(`${this.shotsRemaining} torpedos left`);
  }
}

export default TorpedoLauncher;
