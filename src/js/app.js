import GameSavingLoader from "./GameSavingLoader";

(async () => {
   try {
     const prossedData = await GameSavingLoader.load();
     return prossedData;
   } catch (error) {
     return error;
     }
})();