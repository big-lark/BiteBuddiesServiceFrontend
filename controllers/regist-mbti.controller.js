import * as registComponent from "../components/regist-common.component.js";
import { selecMark } from "../function/selectMark.js";
import { renderRegistPreferencesView } from "../views/regist-preferences.view.js";

export const title = async () => {
  const title = registComponent.titleComponent("My MBTI");
  return title;
};

export const subTitle = async () => {
  const subTitle = registComponent.subTitle(
    "Tell us who you are so that we can find your ideal eating buddy!"
  );
  return subTitle;
};

export const buttonWrapper = async () => {
  const eAndIwrapper = await registComponent.buttonWapper();
  const extroverted = await button("select-btn", "extroverted");
  const introverted = await button("select-btn", "introverted");
  eAndIwrapper.append(extroverted, introverted);
  //
  const sAndNwrapper = await registComponent.buttonWapper();
  const sensing = await button("select-btn", "sensing");
  const intuitive = await button("select-btn", "intuitive");
  sAndNwrapper.append(sensing, intuitive);
  //
  const tAndFwrapper = await registComponent.buttonWapper();
  const thinking = await button("select-btn", "extroverted");
  const feeling = await button("select-btn", "introverted");
  tAndFwrapper.append(thinking, feeling);
  //
  const jAndPwrapper = await registComponent.buttonWapper();
  const judging = await button("select-btn", "extroverted");
  const perceiving = await button("select-btn", "introverted");
  jAndPwrapper.append(judging, perceiving);

  const fragment = document.createDocumentFragment();
  fragment.append(eAndIwrapper, sAndNwrapper, tAndFwrapper, jAndPwrapper);
  return fragment;
};

export const button = async (className, text) => {
  const button = await registComponent.buttonComponent(className, text);
  button.setAttribute("id", "mbti");
  button.addEventListener("click", selecMark);
  return button;
};

export const ctaBtn = async () => {
  const buttonWrapper = await registComponent.buttonWapper();
  const className = "customerMbtiCtaBtn";
  const button = await registComponent.buttonComponent(className, "Continue");
  button.setAttribute("id", "cta");
  buttonWrapper.append(button);
  buttonWrapper.addEventListener("click", async () => {
    const mbti = document.querySelectorAll(".selected");
    const mbtiText = [];
    mbti.forEach((e) => {
      mbtiText.push(e.innerText);
    });
    console.log("arr", mbtiText);
    localStorage.setItem(
      "regist-mbti",
      JSON.stringify({ mbtiText: { ...mbtiText } })
    );
    await renderRegistPreferencesView();
  });
  return buttonWrapper;
};
