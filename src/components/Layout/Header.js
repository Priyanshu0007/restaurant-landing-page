import React from 'react'
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h1>Wow Momos</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            {/* <img></img> */}
        </div>
    </>
  )
}

export default Header