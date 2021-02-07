import React from 'react';
import s from './Display2.module.css'


const Display2 = () =>{
    return(
<section className={s.section + " container"}>
<div>  
<div className={s.title}>Моя доходность</div>
<div className={s.description}>Процент начисляется каждый месяц на сумму открытого депозита</div>
</div>  
<div className={s.blocks}>

<div className={s.row}>
<div className={s.block1}>
</div>
<div className={s.blockTitle}>до 3% в мес.</div>
<div className={s.blockDesc}>Smart</div>
</div>

<div className={s.row}>
<div className={s.block2}>
</div>
<div className={s.blockTitle}>до 4% в мес.</div>
<div className={s.blockDesc}>Business, Business X</div>
</div>


<div className={s.row}>
<div className={s.block3}>
</div>
<div className={s.blockTitle}>до 5% в мес.</div>
<div className={s.blockDesc}>Premium X</div>
</div>


<div className={s.row}>
<div className={s.block4}>
</div>
<div className={s.blockTitle}>до 6% в мес.</div>
<div className={s.blockDesc}>Team X</div>
</div>


<div className={s.row}>
<div className={s.block5}>
</div>
<div className={s.blockTitle}>до 7% в мес.</div>
<div className={s.blockDesc}>ZT Team X</div>
</div>





</div>

</section> 
    )
}


export default Display2;