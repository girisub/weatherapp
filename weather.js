var x = document.getElementById("demo");
	function getLocation() {	
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);

	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }

	    
	}	

	function showPosition(position) {
	    x.innerHTML = "Latitude: " + position.coords.latitude + 
	    "<br>Longitude: " + position.coords.longitude;
	     $.ajax({
				type:'GET',
				url: 'http://api.openweathermap.org/data/2.5/weather?lat={'+position.coords.latitude+'}&lon={'+position.coords.longitude+'}&APPID='3fe50b72be81a84793b8c0a6b3fa5b78,
				success: function(response){
					// console.log(response['quote'].body);
					// console.log(response['quote'].author);
					console.log(response);
					// $('#quote').html('<p>'+$quote+'</p><br>'+$author);
				}
			});
	}
;

