import React from "react";
import styles from "./Header.module.scss"

function Header({handleAddNote, handleDeleteNote, handleEditNote}) {
    return(
        <header className='d-flex justify-between'>
        <div className={styles.header__tools}>
          <button onClick={handleAddNote}><img src='images/Plus.svg' alt='Plus'/></button>
          <button onClick={handleDeleteNote}><img src='images/Remove.svg' alt='Remove'/></button>
          <button onClick={handleEditNote}><img src='images/List.svg' alt='List'/></button>
        </div>
        <div className={styles.header__search}>
          <img width={20} src="images/Search.svg" />
          <input placeholder='Пошук...'/>
        </div>
      </header>
    );
}

export default Header;