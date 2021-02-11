import {rerenderEntireTree} from '../render'

let state = {
      profilePage:{
        posts: 
      [{id:3, message: 'Newest post', date: '12 march'},
      {id:2, message: 'Hi, its second post', date: '9 march'},
      {id:1, message: 'Hi, its first post', date: '8 march'}]
      },
messagePage: {
      dialogs: 
      [{id: 1, name: 'Emma', messageFirst: 'Hello how are you?', userAvatar: 'https://img.discogs.com/UGx6gNmTl_3kpIN725m8Jfx7DrM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-314905-1554065412-8554.jpeg.jpg', date: '8 March'},
       {id: 2, name: 'Robert', messageFirst: 'Hello.', userAvatar: 'https://vokrug.tv/pic/news/f/0/2/5/f02586db8e0075add5a68a990bf97a4b.jpg', date: '10 March'},
        {id: 3, name: 'Kiernan', messageFirst: 'Go to dance tonight?', userAvatar: 'https://resizer.mail.ru/p/e6bedfec-b0e0-5fe4-8ccb-cf16ad312bac/AAAC1gFm0jItlOR4KjGx20vj0V5PLtBnHRTHT-F0YDDZyAphRYGE1MJGoFib49gJ8xCcnXomaS9ks6r_3TFKjzz30CA.jpg', date: '11 March'},    ]
}
  }

export let addPost = (postMessage) => {
  let newPost ={
    id: 5,
    message: postMessage,
    date: '26 dec'
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}



  export default state;