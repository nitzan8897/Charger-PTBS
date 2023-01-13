import { readFileSync } from "fs";
import { Currency } from "./types/currency";

export const GetCurrenciesFromTextFile = (path: string) => {
  try {
    return readFileSync(path, "utf8").split(",");
  } catch (error) {
    console.log(error);
  }
};

GetCurrenciesFromTextFile("./currencies.txt");
