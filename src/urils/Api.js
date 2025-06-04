class Api {
  pushEventCompletedGame = (idQuest) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "bf_21_quest_complete",
        quest_name: idQuest,
      });
    } else {
      // eslint-disable-next-line
      r46("track", "quest_complete", {
        category: `0`,
        label: idQuest,
      });
      // eslint-disable-next-line
      r46("profile", "set", {
        [idQuest]: "complete",
      });
    }
  };

  // getProfileUserFetch = async () => {
  //     const did = localStorage.getItem('rees46_device_id');
  //
  //     return new Promise((resolve, reject) => {
  //         try {
  //             fetch(`https://api.r46.technodom.kz/profile?did=${'did'}&shop_id=74fd3b613553b97107bc4502752749`).then(res => res.json()).then(data => resolve(data))
  //         } catch (e) {
  //             reject(new Error(`Что-то пошло не так при получении профиля пользователя. Ваш did: ${did}`))
  //         }
  //     })
  // }

  getProfileUser = async () => {
    return new Promise((resolve, reject) => {
      try {
        // eslint-disable-next-line
        r46("profile", "get", function (profile) {
          if (profile) {
            resolve(profile);
          } else {
            reject(new Error("Не удалось получить профиль пользователя"));
          }
        });
      } catch (e) {
        reject(
          new Error("Что-то пошло не так при получении профиля пользователя")
        );
      }
    });
  };
}

export const api = new Api();
