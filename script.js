const content = document.getElementById("content");
async function get() {
  const Response = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await Response.json()
  // console.log(data[0].name)
  console.log(data.results)
  data.results.forEach(element => {
   
    content.innerHTML += item(element.image,element.name);
  });
  // document.querySelectorAll("#content").innerHTML="anasNAK"
}
get()


function item(img,title){
  const item =  `<div class="item">
  <img src="${img}" alt="">
  <p>${title}</p>
  </div>
  `;
  
  return item;

}