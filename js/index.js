// javascript for index.html
const blogs = document.querySelector('.blogs');
const form= document.querySelector('form');
const renderpost= async (term)=>{
  let endPoint = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if(term){
    endPoint +=`&q=${term}`;
  }
  const res = await fetch(endPoint);
  const posts =await res.json();
  let template = "";
  posts.forEach(post=>{
    template+= `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.likes} likes</p>
        <p>${post.body.slice(0,200)}<p>
        <a href="/details.html?id=${post.id}">read more...</a>
      </div>
    `
  });
  blogs.innerHTML = template;
}
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  renderpost(form.term.value.trim());
});
window.addEventListener('DOMContentLoaded',()=>renderpost());