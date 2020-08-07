function submitVal(){
var yname = $("#yname").val();
var pname = $("#pname").val();
if(yname == '')
 $("#yname1").show();
 if(pname == '')
  $("#uname1").show();
var random = Math.floor(Math.random() * 100);
if(yname != '' && pname != '')
{$("#yname1").hide();
 $("#uname1").hide();
document.querySelector('#showResult').innerHTML=yname + ' Loves 💞 ' + random + ' % To ' + pname;
}
}
