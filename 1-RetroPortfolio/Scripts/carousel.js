var img =[];

img.push("Images/slides/1-camera.jpg");
img.push("Images/slides/2-sedia.jpg");
img.push("Images/slides/3-fotocamera.jpg");
img.push("Images/slides/4-cactus.jpg");

//$("img","#retroslide");

//console.log(name);

window.onload=carousel;
async function carousel()
{
  var i = 0;
  while (i < 4)
  {
    //$("img","#retroslide").attr("src",img[i]).delay(3000).fadeOut;
    var el=document.getElementById("retroSlide");
    el.setAttribute("src",img[i]);
    if(i==3)
    {
      i=0;
    }
    else
    {
      i++;
    }
    await sleep(3000);
    //(el).fadeOut()
    //$("img","retroslide").fadeOut();
  }
}
