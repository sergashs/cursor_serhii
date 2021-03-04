import React from 'react';
import s from './Display4.module.css'
import partner1 from './partner1.jpg';
import partner2 from './partner2.jpg';
import partner3 from './partner3.jpg';
import partner4 from './partner4.jpg';


const Display4 = () =>{

  


    return(
<section className={s.section + " container" }>
    
<div className={s.ContainerInner}>
<div className={s.title}>Наши партнеры</div>

<div className={s.blocks}>

<div className={s.block}>
<img className={s.partner} src={partner1} />
</div>

<div className={s.block}>
<img className={s.partner} src={partner2} />
</div>


<div className={s.block}>
<img className={s.partner} src={partner3} />
</div>


<div className={s.block}>
<img className={s.partner} src={partner4} />
</div>


</div>

<div className={s.buttonPlace}>
<button className={s.button + " button"}>начать инвестировать</button> 
</div>


</div>
</section> 
    )
}


export default Display4;