import { format } from "./i18n/i18n-core";
import "fonts/style.css";
import window from "globals/window";
import MainController from "main/Controller";

const controller = new MainController();

window.DesModder = {
  controller,
  createAction: controller.createAction,
  format,
  // Not used by DesModder, but some external scripts may still reference this
  exposedPlugins: controller.enabledPlugins,
};
window.DSM = controller;

controller.init();
