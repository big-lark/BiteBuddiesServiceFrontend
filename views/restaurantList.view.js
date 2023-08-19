import { keyframesLeft, options } from "../animate/animate.js";
import * as restaurantCardBoxController from "../controllers/restaurantList.controller.js";

export const renderRestaurantList = async () => {
  // history.pushState({ v1: "bitebuddies/coffee" }, "", "bitebuddies/coffee");
  const section = document.querySelector(".section-body");
  section.innerHTML = "";
  const target = document.querySelector(".back-arrow");
  target.setAttribute("style", "display:block;");

  const restaurantMenuTitle =
    await restaurantCardBoxController.restaurantMenuTitle();

  const restaurantMenuSubTitle =
    await restaurantCardBoxController.restaurantManuSubTitle();

  const restaurantCardBox =
    await restaurantCardBoxController.restaurantCardBox();

  // section.animate(keyframesLeft, options);
  section.append(
    restaurantMenuTitle,
    restaurantMenuSubTitle,
    restaurantCardBox
  );
};
