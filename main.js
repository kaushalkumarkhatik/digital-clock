



function updateClock() {
  var now=new Date();
  var dname=now.getDay(),
  mo=now.getMonth(),
  dnum=now.getDate(),
  yr=now.getFullYear(),
  hou=now.getHours(),
  mi=now.getMinutes(),
  sec=now.getSeconds(),
  pe="Am";
  
  if (hou ==0) {
    hou=12;
    
  }
  if(hou >12){
    hou=hou-12;
    pe="PM";
  }
  Number.prototype.pad = function(digits){
    for(var n=this.toString(); n.length < digits; n=0+n);
    return n;
  }
  
  var month=["January","February","March","April","May","June","July","August","September","October", "November","December"];
  
  var week=["SUN","MON","TUE","WED","THU","FRI","SAT"];

  
  var ids=["dayName","month","dayNum","year","hour","minute","second","period"];
  
  var values=[week[dname],month[mo],dnum.pad(2),yr,hou.pad(2),mi.pad(2),sec.pad(2),pe];
  for(var i=0; i< ids.length; i++)
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  
  
}

function initClock() {
  updateClock()
  window.setInterval("updateClock()",1)
  
  
  
}
