// javascript for details.html
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");
const renderDetails =async ()=>{
  const res =await fetch("http://localhost:3000/posts/"+id);
  const details =await res.json();
  let template = "";
    template = `
       <h2>${details.title}</h2>
       <p>${details.body}</p>
    `
    container.innerHTML = template;
}
deleteBtn.addEventListener('click',async ()=>{
  await fetch("http://localhost:3000/posts/"+id,{
    method:"DELETE",
  })

  window.location.replace("/index.html");
})
window.addEventListener("DOMContentLoaded",()=>renderDetails());