import { keyframesLeft, options } from "../animate/animate.js";
import * as mainMenuController from "../controllers/todos.controller.js";

export const renderTodos = async () => {
  // history.pushState({ v1: "bitebuddies" }, "", "bitebuddies");

  const section = document.querySelector(".section-body");
  section.innerHTML = "";
  // const target = document.querySelector(".back-arrow");
  // target.setAttribute("style", "display:none;");

  const title = await mainMenuController.title();
  const buttonWrapper = await mainMenuController.buttonWrapper();

  const firstManuBtn = await mainMenuController.firstManuBtn();
  const SecondManuBtn = await mainMenuController.secondManuBtn();
  const ThirdManuBtn = await mainMenuController.thirdManuBtn();

  buttonWrapper.append(firstManuBtn, SecondManuBtn, ThirdManuBtn);

  // section.animate(keyframesLeft, options);
  section.append(title, buttonWrapper);
};
