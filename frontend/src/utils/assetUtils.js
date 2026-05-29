export const iconEditSrc = "/images/FeEdit.svg";
export const iconAddSrc = "/images/IcRoundAddCircleOutline.svg";

export const getAsset = (src) => {
  return new URL("../assets" + src, import.meta.url).href;
};
