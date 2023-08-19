import { seciotnBody, section } from "../controllers/topbar.controller.js";

export const layoutTopbarController = async () => {
  const layoutSection = await section();
  const layoutbody = await seciotnBody();
  layoutSection.append(layoutbody);
  return layoutSection;
};
// export const layoutBodyController = async () => {
//   const layoutbody = await seciotnBody();
//   return layoutbody;
// };
