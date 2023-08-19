import * as restaurantCardBoxController from "../controllers/restaurantList.controller.js";

export const renderRestaurantList = async () => {
  history.pushState({ v1: "bitebuddies/coffee" }, "", "bitebuddies/coffee");
  const section = document.querySelector(".section-body");
  section.innerHTML = "";
  const target = document.querySelector(".back-arrow");
  target.setAttribute("style", "display:block;");

  const restaurantMenu =
    await restaurantCardBoxController.restaurantMenuTitle();

  const restaurantCardBox =
    await restaurantCardBoxController.restaurantCardBox();

  // const restaurantCard = await restaurantCardBoxController.restaurantCard();

  // restaurantTextWrapper.append(restaurantName, restaurantDesc);
  // restaurantCard.append(restaurantImage, restaurantTextWrapper);
  // restaurantCardBox.append(restaurantCard);
  section.append(restaurantMenu, restaurantCardBox);
};
