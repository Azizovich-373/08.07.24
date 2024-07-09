import { reload } from "./lib/utils.js"
import { Stories } from "./components/Stories.js"
import { Posts } from "./components/Posts.js"

const stories = document.querySelector('.stories')
const post_cont = document.querySelector('.cont_pub')
fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
    .then(res => res.json())
    .then(res => {
        reload(res, stories, Stories)
    })


fetch('https://jsonplaceholder.typicode.com/photos?_start=100&_limit=200')
    .then(res => res.json())
    .then(res => {
        reload(res, post_cont, Posts)
    })