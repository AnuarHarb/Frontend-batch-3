const database = firebase.database();
const button = document.querySelector('.formButton');
const messageList = document.querySelector('.messages-list');

button.addEventListener('click', getFormInfo);


// Mandar info a Firebase
function getFormInfo(event) {
  const form = event.target.form;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  console.log(name, email, message);
  form.name.value = '';
  form.email.value = '';
  form.message.value = '';
  sendInfoToFirebase(name , email, message);
}

function sendInfoToFirebase(name, email, message) {
  database.ref('messages/').push({
    name: name,
    email: email,
    message: message
  })
}

// JALAR INFO DE FIREBASE
const messages = database.ref('messages/');
messages.on('value', function(snapshot) {
  printMessages(snapshot.val());
})

function printMessages(messages) {
  messageList.innerHTML = '';
  for(id in messages) {
    console.log(messages[id]);
    messageList.innerHTML += `
      <li>nombre: ${messages[id].name}, mensaje:${messages[id].message}</li>
    `;
  }
}



// function createUser(name, id, url) {
//   database.ref('users/'+ id).set({
//     "name": name,
//     "id":id,
//     "pictureUrl": url,
//   })
// }
//
// createUser("Anuar", 0, "https://scontent.fmex4-1.fna.fbcdn.net/v/t1.0-9/34266490_1468865619885229_5238031686297452544_o.jpg?_nc_cat=0&oh=1a1e28a35b24854df52ae0f6fa8361c0&oe=5C0CF0B5");
// createUser("AlexisDoli", 1, "https://scontent.fmex4-1.fna.fbcdn.net/v/t1.0-9/34266490_1468865619885229_5238031686297452544_o.jpg?_nc_cat=0&oh=1a1e28a35b24854df52ae0f6fa8361c0&oe=5C0CF0B5");
//
// function addProperty() {
//   database.ref('users/0/canGivePermission').set(true)
// }
// addProperty();
//
//
//
// //
// // {
// //   "users": [
// //     {
// //       "name": "Anuar",
// //       "id": "0",
// //       "pictureUrl": "https://scontent.fmex4-1.fna.fbcdn.net/v/t1.0-9/36224420_10156116081431858_2241422854870532096_n.jpg?_nc_cat=0&oh=415e060f9bcf4d5737ca0b5b4bc845d7&oe=5C100BAE",
// //       "canGivePermission": "true";
// //     },
// //     {
// //       "name": "AlexisDoli",
// //       "id":"1",
// //       "pictureUrl": "https://scontent.fmex4-1.fna.fbcdn.net/v/t1.0-9/34266490_1468865619885229_5238031686297452544_o.jpg?_nc_cat=0&oh=1a1e28a35b24854df52ae0f6fa8361c0&oe=5C0CF0B5"
// //     }
// //   ]
// // }
