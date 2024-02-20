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

  const transformDatePhilips = brandsData.philips.quests.map((quest) => {
    const isCompleted = profileData?.custom_properties[quest.event];

    return {
      ...quest,
      complete: isCompleted ? true : false,
    };
  });

  const transformDateVivo = brandsData.vivo.quests.map((quest) => {
    const isCompleted = profileData?.custom_properties[quest.event];

    return {
      ...quest,
      complete: isCompleted ? true : false,
    };
  });

  const transformDateLg = brandsData.lg.quests.map((quest) => {
    const isCompleted = profileData?.custom_properties[quest.event];

    return {
      ...quest,
      complete: isCompleted ? true : false,
    };
  });

  return {
    ...brandsData,
    ava: { ...brandsData.ava, quests: transformDateAva },
    neo: { ...brandsData.neo, quests: transformDateNeo },
    philips: { ...brandsData.philips, quests: transformDatePhilips },
    vivo: { ...brandsData.vivo, quests: transformDateVivo },
    lg: { ...brandsData.lg, quests: transformDateLg },
  };
};
