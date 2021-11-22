import React from "react"
import { useLocation } from "react-router"
import Button from "./Button"

const Header = ({ title, onToggleAddForm, addForm }) => {

    const location = useLocation();

    return (
        <React.Fragment>
            <div className='cutout'></div>
            <header>
                <h1>{title}</h1>
                {location.pathname === '/' && (
                    <Button text={addForm ? 'Close' : 'Add'} onClick={onToggleAddForm}/>
                )}
            </header>
        </React.Fragment>

    )
}

export default Header
