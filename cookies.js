// cookies notification  - export/import

export function cookies(){
    document.querySelector('#cookie-btn').addEventListener('click',() =>{
        document.querySelector('#cookie').style.display = 'none'
      })
}



export function headerBg (){
  let nav = document.getElementById("nav-id");
  window.onscroll = function () {
    if (window.scrollY > 200 ){
      nav.classList.add("scroll")
    }else {
      nav.classList.remove("scroll")
    }
  }
}