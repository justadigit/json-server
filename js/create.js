// javascript for create.html

const form = document.querySelector("form");
const createPost = async (e)=>{
  e.preventDefault();
  const title = form.title.value;
  const body = form.body.value;
  const post = {
    title,
    body,
    likes:Math.floor(Math.random() * 100) + 1
  }
  await fetch("http://localhost:3000/posts",{
    method:"POST",
    body:JSON.stringify(post),
    headers:{"Content-type":"application/json"}
  })
   window.location.replace("/index.html");
}
form.addEventListener("submit",createPost);