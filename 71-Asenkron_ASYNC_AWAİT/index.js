// Javascript Asenkron Async Await

console.clear();

document.querySelector("#button").addEventListener("click", async () =>{
    let responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let post = await responsePost.json();

    let responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    let comments = await responseComment.json();

console.log(responsePost)
console.log(responseComment)
})