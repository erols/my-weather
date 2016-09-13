$(document).ready(function(){
    $("#get_weather").click(function(){
        get_city_weather();
        document.getElementById('result').style.backgroundColor = "lightblue";
    });
});

function get_city_weather() {
	if($("#city_name").val() === "") {
		alert("Please Enter a City Name")
	}
	else {
    	$("#city_name").empty();
		var request = "http://api.openweathermap.org/data/2.5/weather?q=" + $("#city_name").val() + "&units=metric&appid=61fce98d8ac3f6368fe781f441bf935f";
		$('#result').empty();
		$.getJSON(request, function(data){
			$('#result').append("<div><img src=\'http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\'>");
			$("#result").append("<span class=\"item\">Weather in: " + $("#city_name").val() + "</span><br>");
			$("#result").append("<span class=\"item\">Weather Now: " + data.weather[0].main + "</span><br>");
			$("#result").append("<span class=\"item\">Description: " + data.weather[0].description + "</span><br>");
			$("#result").append("<span class=\"item\">Avg Temperature: " + data.main.temp + "</span><br>");
			$("#result").append("<span class=\"item\">Min Temparature: " + data.main.temp_min + "</span><br>");
			$("#result").append("<span class=\"item\">Max Temparature: " + data.main.temp_max + "</span><br>");		
			$('.item').css("background-color", "darkblue");
			$('.item').css("font-size", "20px");
			$('.item').css("color", "white");
			$("#city_name").val("");
		});
	}
}