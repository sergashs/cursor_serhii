import React from "react";

const UserItem = (props) =>{
    return(
        <div>
         <div className="card">
<div className="card__header"> <span>user id:</span>  <span>{props.id}</span>  </div>
<div className="card__body">
<div className="card__name">Name: {props.name}</div>   
<div className="card__phone">Phone: {props.phone}</div>
</div>
 
             
             
             </div>
        </div>
    );
}

export default UserItem;