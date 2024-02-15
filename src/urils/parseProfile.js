import { brandsData } from "./brandsData.js";

export const parseProfile = (profileData) => {
  const transformDateAva = brandsData.ava.quests.map((quest) => {
    const isCompleted = profileData?.custom_properties[quest.event];

    return {
      ...quest,
      complete: isCompleted ? true : false,
    };
  });

  const transformDateNeo = brandsData.neo.quests.map((quest) => {
    const isCompleted = profileData?.custom_properties[quest.event];

    return {
      ...quest,
      complete: isCompleted ? true : false,
    };
  });

  return {
    ...brandsData,
    ava: { ...brandsData.ava, quests: transformDateAva },
    neo: { ...brandsData.ava, quests: transformDateNeo },
  };
};
