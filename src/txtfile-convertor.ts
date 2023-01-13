import { readFileSync } from "fs";

import { Currency } from "./types/currency";
import { TxtFileFormatMessage, readFileMessage } from "./messaging/messages";

export const LoadCurrenciesFromTextFile = (path: string) => {
  try {
    return readFileSync(path, "utf8");
  } catch (error) {
    console.log(` ${error}`);
  }
};

export const ConvertTextDataToCurrency = () => {
  const currencies: Currency[] = [];
  try {
    const lines = LoadCurrenciesFromTextFile("./currencies.txt")?.split("\n");
    lines?.forEach((element: string) => {
      const currency = element.split(" ,");
      if (currency[0] && !isNaN(+currency[1])) {
        currencies.push({
          CoinName: currency[0],
          MultiplayerValue: +currency[1],
        });
      } else {
        throw new Error(`${readFileMessage} ${TxtFileFormatMessage}`);
      }
    });
    return currencies;
  } catch (error) {
    console.log(`${readFileMessage} ${error}`);
  }
};

export const GetAllCoinNames = () => {
  return ConvertTextDataToCurrency()?.map((currency) => currency.CoinName);
};
