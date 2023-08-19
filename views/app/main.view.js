import * as mainConroller from "../../controllers/app/main.controller.js";

export const renderMainAppView = async () => {
  const target = document.querySelector(".section-body");
  target.innerHTML = "";

  const wrapper = await mainConroller.friendsCardWrapper();

  // const nameAndAge = await mainConroller.friendsNameAndAge();
  // const perferences = await mainConroller.friendsPerferences();

  target.append(wrapper);
};
