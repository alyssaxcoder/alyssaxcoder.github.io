
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images=[
{filename:"pic1.jpg", alt: "Closeup of a human eye"},
{filename:"pic2.jpg",alt: "Rock that looks like a wave"},
{filename:"pic3.jpg",alt:"Purple and white pansies"},
{filename: "pic4.jpg",alt: " Section of wall from a pharaoh's tomb"},
{filename: "pic5.jpg", alt: " Large moth on a leaf"},


];
//adding immages to thumbnail bar
//creating a base url for images
const baseURL="https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// loop images

for( const image of images){
    const newImage=document.createElement("img");
    newImage.src=`${baseURL}${image.filename}`;
    newImage.alt=image.alt;
    newImage.tabIndex="0";
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",updateDisplayedImage);

}


//Create updateDisplayedImage()
function updateDisplayedImage(e){
    displayedImage.src=e.target.src;
    displayedImage.alt=e.target.alt;

    //Wire up darken/lighten button

    btn.addEventListener("click", ()=>{
        if (btn.classList.contains("dark")){
            btn.textContent="Lighten";
            overlay.computedStyleMap.backgroundColor="rgb(000/0.5)";
        }else{
            btn.textContent="Darken";
            overlay.computedStyleMap.backgroundColor="rgb(000/0)";

        }
        }
    }
}