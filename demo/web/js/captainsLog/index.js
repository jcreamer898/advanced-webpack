import { log, alert } from "../utils/logger";

let captainsLog = (function() {
  const messages = [];

  return {
    add: function(msg) {
      if (msg) {
        let message = `${date}: ${msg}`,
            date = new Date();

        messages.push(message);

        log(message);

        return message;
      }
    }
  };
}());
