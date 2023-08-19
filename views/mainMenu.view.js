import * as mainMenuController from "../controllers/mainMenu.controller.js";

export const renderMainMenu = async () => {
  history.pushState({ v1: "bitebuddies" }, "", "bitebuddies");

  const section = document.querySelector(".section-body");
  section.innerHTML = "";
  // if ((history.state.va = "bitebuddies")) {
  const target = document.querySelector(".back-arrow");
  // console.log(target);
  target.setAttribute("style", "display:none;");
  // }
  const title = await mainMenuController.title();
  const buttonWrapper = await mainMenuController.buttonWrapper();
  const firstManuBtn = await mainMenuController.firstManuBtn();
  const SecondManuBtn = await mainMenuController.secondManuBtn();
  const ThirdManuBtn = await mainMenuController.thirdManuBtn();

  // const fragment = document.createDocumentFragment();
  buttonWrapper.append(firstManuBtn, SecondManuBtn, ThirdManuBtn);

  const fragment = document.createDocumentFragment();
  fragment.append(title, buttonWrapper);
  section.append(fragment);
};
