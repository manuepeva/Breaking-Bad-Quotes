import { person, sayHello } from './lib';
import '@babel/polyfill';
// console.log(person.age);

// console.log(sayHello('Brad'));

async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    return data;
}

getPost().then(posts => console.log(posts))