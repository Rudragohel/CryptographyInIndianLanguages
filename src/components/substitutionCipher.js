import { characterIs, VyanjanList as Vl } from '../chart';
import { useState } from 'react';
import { NavContext } from '../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Img from './Lock2.png';

export const SubstitutionCipher = () => {

    const { navPos, setNavPos, HomeStyle, PageStyle } = useContext(NavContext);
    var listVyanjan = [...Vl];
    useEffect(() => {
        setNavPos(PageStyle);

        return () => {
            setNavPos(HomeStyle);
        }
    }, [])
    const [inputText,GetText] = useState("");
    const [Keya,SetKeya] = useState(0);
    const [Keyb,SetKeyb] = useState(0);
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

    

    return (
        <div id="inputForm">
            <div id="inputPlainText">
                <label>Enter Plain text: </label>
                <input type="text" onChange={HandleInputFunc}/>
            </div>
            <img src={Img} alt="logo" id="LockLogo"/>
            <div id="Permutation_inputdiv">
                <label> Enter keys:</label>
                {  listVyanjan.map((vyanjan) => {
                    return <div className="PermutationInput">
                        <label>{vyanjan}</label>
                        <input list="selectVyanjan" id="vyanOptionInput"/>
                        <datalist id="selectVyanjan">
                            {listVyanjan.map((vyanjan) => {
                                return <option value={vyanjan}/>
                            })}
                        </datalist>
                    </div>
                })}
            </div>
            <div id="inputButtons">
                <button className="ActionButton">Encrypt</button>
                <button className="ActionButton">Decrypt</button>
            </div>
            <div id="outputText">Cipher Text: {OutputText}</div>
        </div>
    )
}