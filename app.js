//pointer to fake api
const apiURL = "https://jsonplaceholder.typicode.com/";

const divPosts = document.querySelector(".posts");
//console.log(divPosts);
const divUserContainer = document.querySelector(".user-container");

//load all the posts when the page is loading
fetch(apiURL + "posts")
  .then((response) => response.json())
  .then((postsData) => {
    const postsList = postsData
      .map((post) => {
        return `<div class="post">
                    <h3 class="post-title">"${post.title}"</h3>
                    <div class="post-body">"${post.body}"</div>
                    <button class="comment-button" data-postid="${post.id}">Read comments</button>
                    <button class="author-button" data-userid="${post.userId}">Author info</button>
                    <ul class="comments"></ul>
                </div>`;
      })
      .join("");

    divPosts.innerHTML = postsList;
  });
