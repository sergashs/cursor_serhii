// function sendMesssage() {
//   let length = document.getElementById("getmessage").value;

//   let temp = length;

// document.getElementById("printedmessage").innerHTML = `

//   <div class="message-container">
//   <div class="message-left-side">
//    <div class="avatar-chat"><img src="http://127.0.0.1:5500/img/ava.jfif" alt="avatar-chat"></div>
//   </div>
//   <div class="message-content">
//   <div class="message-title">Serhii</div>
//   <div class="message">${temp}</div>
//   </div>
//   </div>
// `;
// }

function sendMesssage() {
  var newdiv = document.createElement("div");
  let length = document.getElementById("getmessage").value;
  let temp = length;

  newdiv.innerHTML = `

  <div class="message-container">
  <div class="message-left-side">
   <div class="avatar-chat"><img src="http://127.0.0.1:5500/img/ava.jfif" alt="avatar-chat"></div>
  </div>
  <div class="message-content">
  <div class="message-title">Serhii</div>
  <div class="message">${temp}</div>
  </div>
  </div>
`;

  document.getElementById("printedmessage").appendChild(newdiv);

  return false;
}
