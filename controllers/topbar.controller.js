// import { fadeLeft } from "../animate/animate.js";
import * as topbarComponent from "../components/topbar.component.js";
import { renderTodos } from "../views/todos.view.js";

export const section = async () => {
  const section = await topbarComponent.sectionComponent();
  const topbar = await topbarController();
  section.append(topbar);
  return section;
};

export const topbarController = async () => {
  const topbar = await topbarComponent.topbar();
  const backArrow = await topbarBackArrow();
  const logo = await topbarLogo();
  const topbatMenu = await topbarMenu();
  const wrapperBackArrow = await imgWrapper(backArrow);
  const wrapperlogo = await imgWrapper(logo);
  const wrapperMenu = await imgWrapper(topbatMenu);
  topbar.append(wrapperBackArrow, wrapperlogo, wrapperMenu);
  return topbar;
};

export const imgWrapper = async (img) => {
  const innerContent = img;
  const wrapper = await topbarComponent.imgWrapper();
  wrapper.append(innerContent);
  return wrapper;
};

export const topbarBackArrow = async () => {
  const backArrow = await topbarComponent.backArrow();
  // console.log(history.state.v1);
  // if (history.state.v1 == "bitebuddies") {
  // backArrow.setAttribute("style", "display:none");
  // }
  // fadeLeft(backArrow);
  backArrow.addEventListener("click", () => {
    history.back();
    renderTodos();
  });
  return backArrow;
};

export const topbarLogo = async () => {
  const logo = await topbarComponent.logo();
  return logo;
};

export const topbarMenu = async () => {
  const topbarMenu = await topbarComponent.addtionalMenu();
  return topbarMenu;
};

export const seciotnBody = async () => {
  const body = await topbarComponent.sectionBody();
  return body;
};
