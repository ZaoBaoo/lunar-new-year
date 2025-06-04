export const getActiveQuest = (brandName, brands) => {
  const targetBrand = brands[brandName].quests.find((brand) => !brand.complete);

  return targetBrand;
};
