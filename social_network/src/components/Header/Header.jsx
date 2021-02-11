import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
  <div className={s.header}>
     <div className={s.container}>
       
     <div className={s.logo}>
    VU
    </div>

    <div className={s.search}>
    search
    </div>


    <div className={s.userLogin}>
    serhii
    </div>

    </div>
</div>
  );
}

export default Header;
