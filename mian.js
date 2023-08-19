import { layoutTopbarController } from "./layout/layout.js";
import { renderMainMenu } from "./views/mainMenu.view.js";

const root = document.querySelector("#root");
const topbar = await layoutTopbarController();
root.append(topbar);

await renderMainMenu();
// history.pushState({}, { v1: "bitebuddies" }, "bitebuddies");
// console.log(history.state.v1);
