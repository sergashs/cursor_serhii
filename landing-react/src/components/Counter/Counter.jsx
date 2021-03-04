import React from 'react';
import s from './Counter.module.css'



const Counter = () =>{

    const tariffs = [
        {
            id: 1,
            value: 'Smart'
        }, {
            id: 2,
            value: 'Busisness'
        }, {
            id: 3,
            value: 'Premium X'
        }, {
            id: 4,
            value: 'Team X'
        },{
            id: 5,
            value: 'ZT Team X'
        }
        ];
        
     
        function Options({ options }) {
            return (
                options.map(option => 
                            <option key={option.id} value={option.value}>                                   
                            {option.value}
                            </option>)
                           );
        }

    return(
<section className={s.counter}>
<div className={s.left}>
<div className={s.title}>Посчитать доходность</div>


<div className={ `${s.inputContainer}  ${s.inputContainer1}` }>

<input type="text" className={s.input}/>
<div className={s.afterInput}>
    Минимум 10 000 Р
</div>

</div>


<div className={ `${s.inputContainer}  ${s.inputContainer2}` }>

<select
name="animal"
className={s.select}>
<Options options={tariffs} />
</select>

</div>

</div>


<div className={s.right}>

<div className={s.blocks}>
<div>
<div className={s.block__subtitle}>Депозит</div>
<div className={s.block__title}>10 000 ₽</div>
</div>

<div>
<div className={s.block__subtitle}>Ставка в мес</div>
<div className={s.block__title}>7%</div>
</div>
</div>


<div className={s.inputs}>

<div className={s.inputItem}>
<div className={s.inputItemBefore}>1 мес</div>
<div className={s.inputItemInput}>
<div className={s.inputItemScale1}></div>
</div>
<div className={s.inputItemAfter}>10 700 ₽</div>
</div>

<div className={s.inputItem}>
<div className={s.inputItemBefore}>3 мес</div>
<div className={s.inputItemInput}>
<div  className={s.inputItemScale2}></div>
</div>
<div className={s.inputItemAfter}>11 980 ₽</div>
</div>


<div className={s.inputItem}>
<div className={s.inputItemBefore}>12 мес</div>
<div className={s.inputItemInput}>
<div className={s.inputItemScale3}></div>
</div>
<div className={s.inputItemAfter}>20 470 ₽</div>
</div>


</div>



</div>

</section> 
    )
}


export default Counter;