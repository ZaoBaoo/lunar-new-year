export const mergeObjectLeaderboard = (objectA, objectB) => {
  for (let keyA in objectA) {
    if (objectB.hasOwnProperty(keyA)) {
      let arrayA = objectA[keyA];
      let arrayB = objectB[keyA]?.quests; // добавляем проверку на существование массива quests
      if (arrayB) {
        // проверяем, что массив arrayB существует
        for (let i = 0; i < arrayA.length; i++) {
          let correspondingObject = arrayB.find(
            (obj) => obj.id === arrayA[i].id
          );
          if (correspondingObject) {
            arrayA[i].complete = correspondingObject.complete;
          }
        }
      }
    }
  }
  return objectA;
};
