var a=new XMLHttpRequest();
a.onload=function(){
  if(a.status===200){
    document.getElementById('content').innerHTML=a.responseText;
  }
};
a.open('GET','data.html',true);
a.send(null);
