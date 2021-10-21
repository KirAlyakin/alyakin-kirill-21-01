let data = prompt("CamalCase",'CamalCase');
data = data.replace(/([A-ZА-Я])/g, "_$1");
data = data.replace(/_/,'')
alert(data.toLowerCase())