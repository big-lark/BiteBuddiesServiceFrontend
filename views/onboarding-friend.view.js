import * as onboardingController from "../controllers/onboarding-friend.controller.js";

export const renderOnboardingFriends = async () => {
  const target = document.querySelector(".section-body");
  target.innerHTML = "";
  console.log("11");
  const articleWrapper = await onboardingController.articleWrapper();

  const title = await onboardingController.articleTitle();
  const subTitle = await onboardingController.articleSubTitle();

  const cta = await onboardingController.ctaButton();

  target.append(articleWrapper, title, subTitle, cta);
};
