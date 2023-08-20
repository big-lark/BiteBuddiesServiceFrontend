import { keyframesUp, options } from "../../animate/animate.js";
import * as mainConroller from "../../controllers/app/main.controller.js";

export const renderMainAppView = async () => {
  history.pushState({ v1: "main" }, "", "onboarding/main");
  const target = document.querySelector(".section-body");
  target.innerHTML = "";

  const wrapper = await mainConroller.friendsCardWrapper();

  // const nameAndAge = await mainConroller.friendsNameAndAge();
  // const perferences = await mainConroller.friendsPerferences();

  target.animate(keyframesUp, options);
  target.append(wrapper);
};
