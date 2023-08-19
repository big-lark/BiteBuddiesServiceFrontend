import { keyframesLeft, options } from "./animate/animate.js";
import { layoutTopbarController } from "./layout/layout.js";
import { renderMainAppView } from "./views/app/main.view.js";
import { renderOnboardingPage } from "./views/onboarding.view.js";
import { renderCustomerInfo } from "./views/regist-info.view.js";
import { renderRegistMbtiView } from "./views/regist-mbti.view.js";
// import { renderMainMenu } from "./views/todos.view.js";

const root = document.querySelector("#root");
const topbar = await layoutTopbarController();
root.append(topbar);

// await renderMainMenu();
// history.pushState({}, { v1: "bitebuddies" }, "bitebuddies");
// console.log(history.state.v1);

await renderOnboardingPage();

// await renderMainAppView();
