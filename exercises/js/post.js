/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPost();
};

const getPost = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const GET_URL = `${API_URL}${id}`;
  // CODE GOES HERE
  fetch(GET_URL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      buildPost(response);
    });
};

const buildPost = (data) => {
  // HINT: Convert the date number to a Date string
  const blogDate = new Date(parseInt(data.added_date)).toDateString();

  const imagePath = `${API_BASE_URL}${data.post_image}`;

  document.querySelector("header").style.backgroundImage = `url(${imagePath})`;

  const blogPostContent = `          
    <div id="individual-post-title">${data.title}</div>
    <div id="individual-post-date">Published on ${blogDate}</div>
    <div id="individual-post-content">
    ${data.content}
    </div>`;

  document.querySelector(".individual-post").innerHTML = blogPostContent;
};
