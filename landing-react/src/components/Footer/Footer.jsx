import React from 'react';
import s from './Footer.module.css'
import DocumentLink1 from './1.png';
import DocumentLink2 from './2.png';
import DocumentLink3 from './3.png';
import DocumentLink4 from './4.png';
import DocumentLink5 from './5.png';
import DocumentLink6 from './6.png';
import Logo from './favicon.svg';

const Footer = () =>{
return(
<footer className={s.section + " container" }>
<div className={s.ContainerInner}>

<div className={s.Col}>
<div className={s.ColTitle}>
CityInvest
</div>
<div className={s.links}>
<a className={s.link} href="#">Контакты</a>
</div>

</div>


<div className={s.Col}>
<div className={s.ColTitle}>
Ссылки на правовые документы
</div>

<div className={s.links}>
<a className={s.link} href="#">Пользовательское соглашение </a>
<a className={s.link} href="#">Конфиденциальность</a>
<a className={s.link} href="#">Оферта</a>
</div>




</div>
<div className={s.Col}>
<div className={s.ColTitle}>
Другие продукты 
</div>

<div className={s.Products}>

<a className={s.linkProduct} href="#"><img className={s.ProductImg} src={DocumentLink1} /></a>
<a className={s.linkProduct} href="#"><img className={s.ProductImg} src={DocumentLink2} /></a>
<a className={s.linkProduct} href="#"><img className={s.ProductImg} src={DocumentLink3} /></a>


<a className={s.linkProduct} href="#"><img className={s.ProductImg} src={DocumentLink4} /></a>
<a className={s.linkProduct} href="#"><img className={s.ProductImg} src={DocumentLink5} /></a>
<a className={s.linkProduct} href="#"><img className={s.ProductImg} src={DocumentLink6} /></a>


</div>

</div>

</div>

<div className={s.Copyright}><img className={s.Logo}  src={Logo}/>    © 2020  CITYINVEST</div>


</footer> 
    )
}


export default Footer;