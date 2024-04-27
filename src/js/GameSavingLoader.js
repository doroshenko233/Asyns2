import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static async load(data) {
    return await json(await read(data))
  }
}