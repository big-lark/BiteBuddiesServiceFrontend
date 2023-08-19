import * as registMbtiController from "../controllers/regist-mbti.controller.js";

export const renderRegistMbtiView = async () => {
  const target = document.querySelector(".section-body");
  target.innerHTML = "";

  const title = await registMbtiController.title();
  const subTitle = await registMbtiController.subTitle();

  const button = await registMbtiController.buttonWrapper();
  const ctaButton = await registMbtiController.ctaBtn();
  target.append(title, subTitle, button, ctaButton);
};
