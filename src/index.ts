import { GetAllCoinNames } from "./txtfile-convertor";
import { UIInitializer } from "./ui-initializer";

export const initializeUI = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  GetAllCoinNames()?.forEach((coin) => {
    console.log(coin);

    checkbox.id = coin;
    checkbox.value = coin;
    checkbox.innerText = coin;
    const label = document.createElement("label");
    label.htmlFor = coin;
    label.appendChild(document.createTextNode(coin));

    const br = document.createElement("br");

    const container = document.getElementById("container");
    container?.appendChild(checkbox);
    container?.appendChild(label);
    container?.appendChild(br);
  });
};
