import React from 'react';
import s from './Display1.module.css'
import Mac from './Mac.svg';
import MacScreen from './Mac_screen.png';
import Iphone from './iphone.svg';
import IphoneScreen from './screen_iphone.png';

const Display1 = () =>{
    return(
<section className={s.section + " container"}>
<div className={s.left}>
<div className={s.title}>
Инвестируй вместе с нами и получай до 7%* на депозит каждый месяц 
<a href="#" className={s.link}>узнать подробней</a>
</div>  
<button className={s.button + " button"}>начать инвестировать</button>
</div>


<div className={s.right}>
<img className={s.MacImg} src={MacScreen} />
<div className={s.iphone}><img className={s.IphoneScreen} src={IphoneScreen} /></div> 
</div>

     </section> 

     
    )
}


export default Display1;