/**
 * TODO: Finish submitNewPost function to submit form data to the API
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = async () => {
  // HINT: Use FormData to store data to send over
  // HINT: Redirect the user to home page after successful submission

  let title = document.getElementById("form-post-title").value;
  let content = document.getElementById("form-post-content").value;
  let selectedFile = document.getElementById("form-post-image");

  let formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("post_image", selectedFile.files[0]);

  fetch(API_URL, {
    method: "POST",
    body: formData,
  }).then((response) => {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
};
