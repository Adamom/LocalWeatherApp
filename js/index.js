$(document).ready(function(){  
  var lon;
  var lat;
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    lon =  position.coords.latitude ;
    lat = position.coords.longitude; 
    var api="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
      //JSON call
     $.getJSON(api,function(data){
       console.log(data);
       $("#adam").html(data.main.temp); 
       var weather= data.weather[0].description;
       var tempc = data.main.temp;
       var country = data.sys.country;
       var city = data.name;
       //Celsius Fahrenhein conversion
       var tempinter = true;
       var tempf = (tempc * 9/5 +32).toFixed(2);
       //console testing on variables
       /*
       console.log(city);
       console.log(country);
       console.log(temp);
       console.log(weather);
       */
       
       $("#country").html(country +",");
       $("#city").html(city);
       $("#temp").html(tempc + " ºC");
       
       $("#temp").click(function(){
         if(tempinter===false){ $("#temp").html(tempc + " ºC");
                                 tempinter=true;}
         else{$("#temp").html(tempf + " ºF");
              tempinter=false;
             }
         if(tempc>25){ $('body').css('background-image','url(http://notdeadyetstyle.com/wp-content/uploads/2017/05/HotSun.jpg');}
         else if(tempc<10){$('body').css('background-image','url(https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/01/snow.jpg?itok=XvQRJE7b&fc=50,50');}
               
       });
  });
    });
  } 
  
  

 // console.log(data);
//console.log('https://samples.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=b6907d289e10d714a6e88b30761fae22');
});