import * as mainMenuComponent from "../components/mainMenu.component.js";
import { renderRestaurantList } from "../views/restaurantList.view.js";

// export const section = async () => {
//   const seciton = await mainMenuComponent.sectionComponent();
//   return seciton;
// };

export const title = async () => {
  const title = await mainMenuComponent.titleComponent(
    "what do you want to do?"
  );
  return title;
};

export const buttonWrapper = async () => {
  const buttonWrapper = await mainMenuComponent.buttonWapper();
  return buttonWrapper;
};

export const firstManuBtn = async () => {
  const className = "firstManuBtn";
  const button = await mainMenuComponent.buttonComponent(
    className,
    "Get Coffee?"
  );
  button.addEventListener("click", renderRestaurantList);
  return button;
};
export const secondManuBtn = async () => {
  const className = "secondManuBtn";
  const button = await mainMenuComponent.buttonComponent(
    className,
    "Find Buddies"
  );
  return button;
};
export const thirdManuBtn = async () => {
  const className = "thirdManuBtn";
  const button = await mainMenuComponent.buttonComponent(
    className,
    "Surprise Me"
  );
  return button;
};
