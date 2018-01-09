var modals=[];
modals.push(document.getElementById('aboutme'));
modals.push(document.getElementById('portfolio'));
modals.push(document.getElementById('home'));
modals.push(document.getElementById('myblog'));
modals.push(document.getElementById('contactme'));

var btns =[];
btns.push(document.getElementById("nav1"));
btns.push(document.getElementById("nav2"));
btns.push(document.getElementById("nav3"));
btns.push(document.getElementById("nav4"));
btns.push(document.getElementById("nav5"));

var active;
var last;


function disableOthers()
{
  if(active==last)
  {
  }
  else
  {
    elMsg.textContent='';
    modals[last].style.display = "none";
  }
}


btns[0].onclick = function()
{
  modals[0].style.display = "block";
  last=active;
  active=0;
  disableOthers();
}
btns[1].onclick = function()
{
  modals[1].style.display = "block";
  last=active;
  active=1;
  disableOthers();
}
btns[2].onclick = function()
{
  modals[2].style.display = "block";
  last=active;
  active=2;
  disableOthers();
}
btns[3].onclick = function()
{
  modals[3].style.display = "block";
  last=active;
  active=3;
  disableOthers();
}
btns[4].onclick = function()
{
  modals[4].style.display = "block";
  last=active;
  active=4;
  disableOthers();
}
