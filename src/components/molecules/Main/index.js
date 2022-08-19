import Button from '../../atoms/button/index'
import ResultList from '../../atoms/list/index'
import Input from '../../atoms/input/index'
import { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import './style.css'
import * as svgs from '../../../assets/svg'
import { ScoreContext } from '../../../context/use-score'



const HomeElements = () => {
    const { radio, setRadio, setValues } = useContext(ScoreContext)
    
    const inputOnClick = (e) => {
        setRadio(e.target.value)
    }
    const gameStart = () => {
        console.log(radio)
    }
    const checkin = () => {
        if (radio === "") {
            alert("LÜTFEN YAPILACAK İŞLEMİ SEÇİNİZ")
        }
    }

    

    useEffect(() => {
        setValues([])
    }, [])
    
    return (
        <div className='main-container'>
            <div className='header'>
                {svgs.MainHeaderText}
            </div>
            <div className='contents'>
                <div className='left'>
                    <ResultList></ResultList>
                </div>
                <div className='right'>
                    <Input
                        type="radio"
                        title="Toplama"
                        inputid="toplama"
                        inputValue="topla"
                        inputname="choise"
                        labelClass = "main-label"
                        classes = "choise-operator"
                        inputOnClick={inputOnClick}
                    />
                    <Input
                        type="radio"
                        title="Çıkarma"
                        inputid="cikarma"
                        inputValue="cikar"
                        inputname="choise"
                        classes = "choise-operator"
                        labelClass = "main-label"
                        inputOnClick={inputOnClick}
                    />
                    <Input
                        type="radio"
                        title="Çarpma"
                        inputid="carpma"
                        inputValue="carp"
                        inputname="choise"
                        labelClass = "main-label"
                        classes = "choise-operator"
                        inputOnClick={inputOnClick}
                    />
                    <Input
                        type="radio"
                        title="Bölme"
                        inputid="bolme"
                        inputValue="bol"
                        inputname="choise"
                        labelClass = "main-label"
                        classes = "choise-operator"
                        inputOnClick={inputOnClick}
                    />
                </div>
            </div>
            <Link onClick={checkin} to={radio !== "" && "/game"}  >
                <Button title={"Başla"} click={gameStart} />
            </Link>
        </div>
    )
}

export default HomeElements