import React from 'react';
import s from './Display3.module.css'


const Display3 = () =>{
    return(
<section className={s.section + " container"}>
<div className={s.ContainerInner}>
<div className={s.title}>Обзор доходности сделок IPO</div>

<div className={s.blocks}>
<div className={s.block}>
<div className={s.percent}>53,43%</div>
<div className={s.description}>средняя доходность 
за сделку</div>
</div>

<div className={s.block}>
<div className={s.percent}>76%</div>
<div className={s.description}>сделок в рамках IPO приносят прибыль инвесторам</div>
</div>

<div className={s.block}>
<div className={s.percent}>576%</div>
<div className={s.description}>Самая большая доходность по сделке. Beyond Meat</div>
</div>


</div>
</div>
</section> 
    )
}


export default Display3;