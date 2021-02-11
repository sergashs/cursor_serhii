import react from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {


  return (
    <div className={s.profile}> 
<div className={s.left}>
<div className={`${s.blockLeft} ${s.block}`}>
  <img src="https://sergashs.github.io/cursor_serhii/portfolio/img/ava.jfif" alt="user avatar"/>
</div>

<div className="blockLeft block">
  
<div className={s.blockHeader}>
<div className={s.blockTitle}><a href="#">Friends</a> <span>22</span></div>
<a href="#">updates</a>
</div>

<div className={s.blockBody}>

<div className={s.friendsRow}>

<div className={s.friendItem}>
  <img src="https://img.discogs.com/UGx6gNmTl_3kpIN725m8Jfx7DrM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-314905-1554065412-8554.jpeg.jpg" alt=""/>
  <a href="#" className={s.friendItemName}>Emma</a>
</div>

<div className={s.friendItem}>
  <img src="https://i.redd.it/3fgfcor4tgg11.jpg" alt=""/>
  <a href="#" className={s.friendItemName}>Astrid</a>
</div>

<div className={s.friendItem}>
  <img src="https://resizer.mail.ru/p/e6bedfec-b0e0-5fe4-8ccb-cf16ad312bac/AAAC1gFm0jItlOR4KjGx20vj0V5PLtBnHRTHT-F0YDDZyAphRYGE1MJGoFib49gJ8xCcnXomaS9ks6r_3TFKjzz30CA.jpg" alt=""/>
  <a href="#" className={s.friendItemName}>Kiernan</a>
</div>

</div>


<div className={s.friendsRow}>

<div className={s.friendItem}>
  <img src="https://vokrug.tv/pic/news/f/0/2/5/f02586db8e0075add5a68a990bf97a4b.jpg" alt=""/>
  <a href="#" className={s.friendItemName}>Robert</a>
</div>

<div className={s.friendItem}>
  <img src="https://instagrammi.ru/wp-content/uploads/tom-holland.jpg" alt=""/>
  <a href="#" className={s.friendItemName}>Tom</a>
</div>

<div className={s.friendItem}>
  <img src="https://cs8.pikabu.ru/post_img/big/2017/04/16/6/1492332157115715518.jpg" alt=""/>
  <a href="#" className={s.friendItemName}>Anya</a>
</div>

</div>


</div>


</div>


<div className="blockLeft block">
  
<div className={s.blockHeader}>
<div className={s.blockTitle}><a href="#">Subscriptions</a> <span>20</span></div>
</div>

<div className={s.blockBody}>

<div className={s.subscriptionsItem}>
<img src="https://api.prohiphop.org/storage/images/c4ca4238a0b923820dcc509a6f75849b/5408a4107d2574c58bd346d19c97d50a.jpeg" alt=""/>
<div className={s.subscriptionsItemDetails}>
<a  className={s.subscriptionsItemTitle} href="#">Oxxxymiron</a>
<div className={s.subscriptionsItemDesc}>
Round 4 at all sites: http://band.link/vknigevseb
</div>
</div>
</div>



<div className={s.subscriptionsItem}>
<img src="https://i.pinimg.com/originals/4f/01/ec/4f01ec2f103c041955e9e93f1dd7a361.jpg" alt=""/>
<div className={s.subscriptionsItemDetails}>
<a  className={s.subscriptionsItemTitle} href="#">touch catching</a>
<div className={s.subscriptionsItemDesc}>
magazine pour esthètes
</div>
</div>
</div>


<div className={s.subscriptionsItem}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7J04_sGk_i3qUS0rzPP5gDu3y3DRwoyjYg&usqp=CAU" alt=""/>
<div className={s.subscriptionsItemDetails}>
<a  className={s.subscriptionsItemTitle} href="#">movies.jpg</a>
<div className={s.subscriptionsItemDesc}>
_
</div>
</div>
</div>



<div className={s.subscriptionsItem}>
<img src="https://static10.tgstat.ru/channels/_0/67/67a92d3026ea1dba41e9ec745f893a52.jpg" alt=""/>
<div className={s.subscriptionsItemDetails}>
<a  className={s.subscriptionsItemTitle} href="#">themarket fits</a>
<div className={s.subscriptionsItemDesc}>
themarket.io
</div>
</div>
</div>


<div className={s.subscriptionsItem}>
<img src="https://i1.sndcdn.com/avatars-uwzyOngG45BvsG3I-FUUtvw-t500x500.jpg" alt=""/>
<div className={s.subscriptionsItemDetails}>
<a  className={s.subscriptionsItemTitle} href="#">unknwn</a>
<div className={s.subscriptionsItemDesc}>
fashion magazine
</div>
</div>
</div>


</div>
</div>


<div className="blockLeft block">
  
<div className={s.blockHeader}>
<div className={s.blockTitle}><a href="#">
Audio recordings</a> <span>200</span></div>
</div>

<div className={s.blockBody}>

<div className={s.audioItem}>
<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/e/eb/17_by_XXXTentacion_cover.jpg/274px-17_by_XXXTentacion_cover.jpg" alt=""/>
<div className={s.audioItemDetails}>
  <div className={s.audioItemName}>Jocelyn Flores</div>
  <a className={s.audioItemAuthor} href="#">XXXTENTACION</a>
</div>
</div>


<div className={s.audioItem}>
<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/e/eb/17_by_XXXTentacion_cover.jpg/274px-17_by_XXXTentacion_cover.jpg" alt=""/>
<div className={s.audioItemDetails}>
  <div className={s.audioItemName}>Depression & Obsession</div>
  <a className={s.audioItemAuthor} href="#">XXXTENTACION</a>
</div>
</div>

<div className={s.audioItem}>
<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/e/eb/17_by_XXXTentacion_cover.jpg/274px-17_by_XXXTentacion_cover.jpg" alt=""/>
<div className={s.audioItemDetails}>
  <div className={s.audioItemName}>Everybody Dies In...</div>
  <a className={s.audioItemAuthor} href="#">XXXTENTACION</a>
</div>
</div>


</div>
</div>




</div>
<div className={s.right}>

<div className="blockRight block">

<div className={s.profileInfo}>

<div className={s.profileTop}>
<div className={s.profileFullName}>Serhii Demchyshyn</div>
<span>online</span>
</div>

<div className={s.profileStatus}>This is my status :D</div>

<div className={s.profileInfoShort}>
<div className={s.itemShort}>
<div className={s.itemShortLabel}>Birthday:</div> 
<div className={s.itemShortLabeled}>27 March 1995 year</div>
</div>

<div className={s.itemShort}>
<div className={s.itemShortLabel}>City:</div> 
<div className={s.itemShortLabeled}>Lviv</div>
</div>
</div>

<hr/>


<div className={s.ProfileCounter}>

<div className={s.ProfileCounterItem}>
  <a href="#" className={s.ProfileCounterDigit}>22</a>
  <span>friends</span>
</div>

<div className={s.ProfileCounterItem}>
  <a href="#" className={s.ProfileCounterDigit}>200</a>
  <span>tracks</span>
</div>


</div>

</div>

</div>


<MyPosts posts={props.state.posts} addPost={props.addPost} />




</div>
</div>
  );
}

export default Profile;
