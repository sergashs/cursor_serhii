import react from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';


const Messages = (props) => {

    const DialogItem = (props) => {
        return  <NavLink className={s.DialogsItem} to={"/messages/" + props.id}>
        <img src={props.userAvatar} />
        <div className={s.DialogsItemContainer}>
        <div className={s.DialogsItemUserName}>{props.name}</div>
        <div className={s.DialogsItemUserMessage}>{props.messageFirst}</div>  
        <div className={s.DialogsItemUserDate}>{props.date}</div>
        </div>
        </NavLink> 
    }

   
    
    
    let dialogsElements = props.state.dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} date={dialog.date} messageFirst={dialog.messageFirst}  userAvatar={dialog.userAvatar} />);
    



    return (
<div className={s.DialogsContainer}>

<div className={`${s.Dialogs} ${s.block}`}>  
<div className={s.DialogsItems}>


{ dialogsElements }

</div>



{/* <div className={s.Messages}>

<div className={s.MessagesItem}>

<div className={s.MessagesItemContent}>Hey. How are you today?</div>

</div>  

<div className={s.MessagesItem}>

<div className={s.MessagesItemContent}>Hello, I'm fine.</div>

</div>  



<div className={s.MessagesItem}>

<div className={s.MessagesItemContent}>Go to dance tonight?</div>

</div>  


</div> */}

</div>

<div className={`${s.DialogsBlockFilter} ${s.block}`}>
  
  <ul className={s.FilterMenu}>
      <li className={s.FilterItem}><a href="#">All chats</a></li>
      <li className={s.FilterItem}><a href="#">Unread</a></li>
      <li className={s.FilterItem}><a href="#">Starred messages</a></li>
  </ul>


</div>

</div>
    )
}
export default Messages;