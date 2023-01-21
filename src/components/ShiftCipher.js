import { characterIs } from "../chart";
import { useState } from "react";

export const ShiftCipher = () => {
  const [inputText, GetText] = useState("");
  const [vList, SetvList] = useState([]);
  const [sList, SetSList] = useState([]);
  const [validInput, SetValidInput] = useState(true);
  const [OutputText, SetOutputText] = useState("");
  var prevchar = "";
  var prevvyanjan = false;
  var finalOutput = "";
  const HandleInputFunc = (event) => {
    GetText(event.target.value);
  };

  const CreatePairList = () => {
    console.log(inputText);
    console.log("Length", inputText.length);
    var tempvList = [];
    var tempsList = [];
    var count = 0;
    inputText.split("").forEach((char) => {
      console.log(char);
      count++;
      console.log("Count", count);
      if (characterIs[char] === "vyanjan") {
        console.log("vyanjan");
        if (prevvyanjan === true) {
          console.log("Insert: to vList", char);
          tempvList.push(prevchar);

          console.log("Insert: to sList", "/u0905");
          tempsList.push("\u0905");
        }
        if (count === inputText.length && prevvyanjan === false) {
          console.log("Last digit anomaly detected");
          console.log("Insert: to vList", char);
          tempvList.push(char);

          console.log("Insert: to sList", "/u0905");
          tempsList.push("\u0905");
        }
        prevvyanjan = true;
      } else {
        console.log("swar");

        if (prevvyanjan === true) {
          console.log("Insert: to vList", prevchar);
          tempvList.push(prevchar);

          if (characterIs[char] === "swar") {
            console.log("Insert: to sList", char);
            tempsList.push(char);
          } else {
            console.log("Insert: to sList", "\u0905");
            tempsList.push("\u0905");
          }
        } else {
          SetValidInput(false);
          console.log("Insert: to vList", char);
          tempvList.push(char);

          console.log("Insert: to sList", "/u0905");
          tempsList.push("\u0905");
          return;
        }
        if (count === inputText.length && prevvyanjan === false) {
          console.log("Last digit anomaly detected");
          console.log("Insert: to vList", char);
          tempvList.push(char);

          console.log("Insert: to sList", "/u0905");
          tempsList.push("\u0905");
        }
        prevvyanjan = false;
      }

      prevchar = char;
      console.log("prevvyanjan", prevvyanjan);
    });

    console.log("tempvList", tempvList);
    console.log("tempsList", tempsList);

    for (let i = 0; i < tempvList.length; i++) {
      console.log(tempvList[i] + tempsList[i]);
      finalOutput = finalOutput + tempvList[i] + tempsList[i];
    }
    console.log("finalOutput", finalOutput);
    SetOutputText(finalOutput);
  };

  return (
    <div>
      {/* <div>
        <input type="text" onChange={HandleInputFunc} />
        <button onClick={CreatePairList}>Convert</button>
      </div>
      <div>{validInput ? "" : "Invalid Input"}</div>
      <div>
        <input placeholder="Enter Key a" />
        <input placeholder="Enter Key b" />
        <button>Generate</button>
      </div>
      <div>{OutputText}</div> */}

      <section>
        <div></div>
        <img src="Images/Encryption.jpeg" />
      </section>
    </div>
  );
};
