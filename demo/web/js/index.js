import { log } from "./utils/logger";
import GalaxyClass from "./ships/galaxy_class";
import TorpedoLauncher from "./weapons/torpedo_launcher";

let enterprise = new GalaxyClass({
  captain: "Jean Luc Picard",
  firstOfficer: "William Riker",
  weaponSystems: { torpedos: new TorpedoLauncher() }
});

enterprise.fire("torpedos");

log("Torpedoes fired, prepare for warp...");

enterprise.warp();
