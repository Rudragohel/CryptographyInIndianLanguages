import { characterIs, VyanjanLetterToIndex as Vlti, SwarLetterToIndex as Slti, VyanjanIndexToLetter as Vitl, SwarIndexToLetter as Sitl, SwarMatraToLetter as Smtl, SwarLetterToMatra as Sltm } from '../chart';
import { useState } from 'react';
import { NavContext } from '../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Img from './Lock2.png';

export const ShiftCipher = () => {

    const { navPos, setNavPos, HomeStyle, PageStyle } = useContext(NavContext);

    useEffect(() => {
        setNavPos(PageStyle);

        return () => {
            setNavPos(HomeStyle);
        }
    }, [])
    const [inputText,GetText] = useState("");
    const [Keya,SetKeya] = useState(0);
    const [Keyb,SetKeyb] = useState(0);
    const [vList,SetvList] = useState([]);
    const [sList,SetSList] = useState([]);
    const [validInput,SetValidInput] = useState(true);
    const [OutputText,SetOutputText] = useState("")
    var prevchar = "";
    var prevvyanjan = false;
    var finalOutput = "";
    const NumberofVyanjan = 34;
    const NumberofSwar = 11;
    
    const HandleInputFunc = (event) => {
        GetText(event.target.value);
    }

    const HandleInputKeya = (event) => {
        SetKeya(event.target.value);
    }

    const HandleInputKeyb = (event) => {
        SetKeyb(event.target.value);
    }

    const encrypt = () => {

        // console.log(inputText);
        // console.log("Length",inputText.length);
        var tempvList=[];
        var tempsList=[];
        var count = 0;
        inputText.split('').forEach((char) => {
        console.log(char);
        count++;
        // console.log("Count",count);
        if (characterIs[char] === 'vyanjan') {
            // console.log("vyanjan");
            if(prevvyanjan === true){
            
            // console.log("Insert: to vList",char,);
            tempvList.push(prevchar);

            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');

            }
            if(count === inputText.length && prevvyanjan === false){
            // console.log("Last digit anomaly detected");
            // console.log("Insert: to vList",char);
            tempvList.push(char);
    
            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');
            }
            prevvyanjan = true;
        }
        else if(characterIs[char] === 'swarMatra'){
            // console.log("swar");

            if(prevvyanjan === true){
            
            // console.log("Insert: to vList",prevchar);
            tempvList.push(prevchar);

            if(characterIs[char] === 'swarMatra'){
                // console.log("Insert: to sList",char);
                tempsList.push(char);
            }
            else{
                // console.log("Insert: to sList",'\u0905');
                tempsList.push('\u0905');    
            }

            }
            else{
            SetValidInput(false);
            // console.log("Insert: to vList",char);
            tempvList.push(char);
    
            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');
            return;
            }
            if(count === inputText.length && prevvyanjan === false){
            // console.log("Last digit anomaly detected");
            // console.log("Insert: to vList",char);
            tempvList.push(char);
    
            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');
            }
            prevvyanjan = false;
        }
        else{   
            console.log("Swar Detected");
            tempvList.push('\u0905');
            tempsList.push(Sltm[char]);
        }
        
        prevchar = char;
        // console.log("prevvyanjan",prevvyanjan);
        
        });
    
        // console.log("tempvList",tempvList);
        // console.log("tempsList",tempsList);
        
        for (let i = 0; i < tempvList.length; i++) {
        // console.log(tempvList[i]+tempsList[i]);
        finalOutput = finalOutput + tempvList[i]+tempsList[i];
        }
        // console.log("finalOutput",finalOutput);
        SetOutputText(finalOutput);

        console.log("tempvList",tempvList);
        console.log("tempsList",tempsList);
        console.log("Keya",Keya);
        console.log("Keyb",Keyb);

        for (let i = 0; i < tempvList.length; i++) {
            // console.log("Traanformed  to: ",Vlti[tempvList[i]]+Number(Keya));
            tempvList[i] = Vitl[(Vlti[tempvList[i]]+Number(Keya))%NumberofVyanjan];
        }

        for (let i = 0; i < tempsList.length; i++) {
            tempsList[i] = Sitl[(Slti[tempsList[i]]+Number(Keyb))%NumberofSwar];
        }

        console.log("tempvList",tempvList);
        console.log("tempsList",tempsList);

        let encryptedString = "";
        

        for (let i = 0; i < tempvList.length; i++) {
            if(tempvList[i] === '\u0905'){
                encryptedString = encryptedString + Smtl[tempsList[i]];
            }
            else if(tempsList[i] === '\u0905'){
                encryptedString = encryptedString + tempvList[i];
            }
            else{
                encryptedString = encryptedString + tempvList[i]+tempsList[i];
            }
        }

        console.log("encryptedString",encryptedString);
        
        SetOutputText(encryptedString);
    }

    const decrypt = () => {
        console.log(inputText);
        console.log("Keya",Keya);
        console.log("Keyb",Keyb);
        // console.log("Length",inputText.length);
        var tempvList=[];
        var tempsList=[];
        var count = 0;
        inputText.split('').forEach((char) => {
        console.log(char);
        count++;
        // console.log("Count",count);
        if (characterIs[char] === 'vyanjan') {
            // console.log("vyanjan");
            if(prevvyanjan === true){
            
            // console.log("Insert: to vList",char,);
            tempvList.push(prevchar);

            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');

            }
            if(count === inputText.length && prevvyanjan === false){
            // console.log("Last digit anomaly detected");
            // console.log("Insert: to vList",char);
            tempvList.push(char);
    
            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');
            }
            prevvyanjan = true;
        }
        else if(characterIs[char] === 'swarMatra'){
            // console.log("swar");

            if(prevvyanjan === true){
            
            // console.log("Insert: to vList",prevchar);
            tempvList.push(prevchar);

            if(characterIs[char] === 'swarMatra'){
                // console.log("Insert: to sList",char);
                tempsList.push(char);
            }
            else{
                // console.log("Insert: to sList",'\u0905');
                tempsList.push('\u0905');    
            }

            }
            else{
            SetValidInput(false);
            // console.log("Insert: to vList",char);
            tempvList.push(char);
    
            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');
            return;
            }
            if(count === inputText.length && prevvyanjan === false){
            // console.log("Last digit anomaly detected");
            // console.log("Insert: to vList",char);
            tempvList.push(char);
    
            // console.log("Insert: to sList",'/u0905');
            tempsList.push('\u0905');
            }
            prevvyanjan = false;
        }
        else{
            console.log("Swar Detected");
            tempvList.push('\u0905');
            tempsList.push(Sltm[char]);
        }
        
        prevchar = char;
        // console.log("prevvyanjan",prevvyanjan);
        
        });
    
        // console.log("tempvList",tempvList);
        // console.log("tempsList",tempsList);
        
        for (let i = 0; i < tempvList.length; i++) {
        // console.log(tempvList[i]+tempsList[i]);
        finalOutput = finalOutput + tempvList[i]+tempsList[i];
        }
        // console.log("finalOutput",finalOutput);
        SetOutputText(finalOutput);

        console.log("tempvList",tempvList);
        console.log("tempsList",tempsList);
        console.log("Keya",Keya);
        console.log("Keyb",Keyb);

        for (let i = 0; i < tempvList.length; i++) {
            console.log("Traanformed  to: ",Vlti[tempvList[i]]+Number(Keya));
            tempvList[i] = Vitl[(Vlti[tempvList[i]]+NumberofVyanjan -Number(Keya))%NumberofVyanjan];
        }

        for (let i = 0; i < tempsList.length; i++) {
            tempsList[i] = Sitl[(Slti[tempsList[i]]+NumberofSwar-Number(Keyb))%NumberofSwar];
        }

        console.log("tempvList",tempvList);
        console.log("tempsList",tempsList);

        let encryptedString = "";
        

        for (let i = 0; i < tempvList.length; i++) {
            if(tempvList[i] === '\u0905'){
                encryptedString = encryptedString + Smtl[tempsList[i]];
            }
            else if(tempsList[i] === '\u0905'){
                encryptedString = encryptedString + tempvList[i];
            }
            else{
                encryptedString = encryptedString + tempvList[i]+tempsList[i];
            }
        }

        console.log("encryptedString",encryptedString);
        
        SetOutputText(encryptedString);
    }

    return (
        <div id="inputForm">
            <div id="inputPlainText">
                <label>Enter Plain text: </label>
                <input type="text" onChange={HandleInputFunc}/>
            </div>
            <img src={Img} alt="logo" id="LockLogo"/>
            <div id="inputKey">
                <label> Enter keys:</label>
                <input type="number" placeholder='Key a' onChange={HandleInputKeya} className="InputField"/>
                <input type="number" placeholder='Key b' onChange={HandleInputKeyb} className="InputField"/>
            </div>
            <div id="inputButtons">
                <button onClick={encrypt} className="ActionButton">Encrypt</button>
                <button onClick={decrypt} className="ActionButton">Decrypt</button>
            </div>
            <div id="outputText">Cipher Text: {OutputText}</div>
        </div>
    )
}