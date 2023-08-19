import * as restaurantList from "../components/restaurantList.component.js";

export const restaurantMenuTitle = () => {
  const title = restaurantList.restaurantManuTitle("Coffee Shop List");
  return title;
};

export const restaurantCardBox = async () => {
  const restaurantCardBox = await restaurantList.restaurantCardBox();
  const card1 = await restaurantCard();
  const card2 = await restaurantCard();
  const card3 = await restaurantCard();
  restaurantCardBox.append(card1, card2, card3);
  return restaurantCardBox;
};
export const restaurantCard = async () => {
  const restaurantCard = await restaurantList.restaurantCard();

  const Image = await restaurantImage();
  const TextWrapper = await restaurantTextWrapper();

  restaurantCard.append(Image, TextWrapper);
  // const fragment = document.createDocumentFragment()
  return restaurantCard;
};

export const restaurantImage = async () => {
  const restaurantImage = await restaurantList.restaurantImage();
  return restaurantImage;
};
export const restaurantTextWrapper = async () => {
  const restaurantTextWrapper = await restaurantList.restaurantTextWrapper();
  const Name = await restaurantName();
  const Desc = await restaurantDesc();
  restaurantTextWrapper.append(Name, Desc);
  return restaurantTextWrapper;
};

export const restaurantName = async () => {
  const name = "chakan jipbsp";
  const restaurantName = await restaurantList.restaurantName(name);
  return restaurantName;
};
export const restaurantDesc = async () => {
  const desc = "Near busan sation! 5min";
  const restaurantDesc = await restaurantList.restaurantDesc(desc);
  return restaurantDesc;
};
