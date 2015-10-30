export default class Logger {
  log(message) {
    console.log(message);
    // airbrake.notify(message);
  }
}
