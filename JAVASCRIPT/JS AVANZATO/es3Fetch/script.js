document.addEventListener("DOMContentLoaded", function(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    fetch(url)
        .then((response) =>response.json())
        .then((posts) => {
            const postsDiv = document.getElementById("posts");
            const primiDieciPosts = posts.slice(0,10);
            primiDieciPosts.forEach((post)=>{
                const postCard = document.createElement("div");
                postCard.classList.add("card");
                postCard.innerHTML = `
                <h1>${post.id}</h1>
                <h3>${post.title}</h3>
                <div>${post.body}</div>
                `;
                postsDiv.appendChild(postCard);
            })
        })
})