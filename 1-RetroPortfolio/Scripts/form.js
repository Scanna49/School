var elMsg=document.getElementById('hint');
var elSubmit=document.getElementById('send');
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function checkterms()
{
  var check=document.getElementById('captcha')
  if(check.value != 5)
  {
    elMsg.textContent= "Umh, are you good with math?";
  }
  else
  {
    elMsg.textContent= '';
    check=document.getElementById('message');
    if (check.value == "")
    {
      elMsg.textContent="Please, leave a message.";
    }
    else
    {
      elMsg.textContent='';
      check=document.getElementById('email');
      if(!filter.test(check.value))
      {
        elMsg.textContent='Please provide a valid email address';
      }
      else
      {
        elMsg.textContent='';
        check=document.getElementById('name');
        if(check.value == '')
        {
          elMsg.textContent='Please, write your name.';
        }
        else
        {
          elMsg.textContent='Message received! Thanks.';
        }
      }
    }
  }
}
