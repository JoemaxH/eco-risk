// var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
var banks = JSON.parse(data);

		var mymap = L.map('mapid').setView([38.63213759515948,-90.19126018891603], 4);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
				'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);

		var mapMarkers = [];
		var markersLayer = new L.LayerGroup();

		 markersLayer.addTo(mymap);

		for(var i = 0; i < 100; i++) {
			var option = document.createElement("option");
			option.text = banks[i].Acquiring;
			option.value = banks[i].Acquiring;
			var select = document.getElementById("inputBank");
			select.appendChild(option);
		}

		// collect which dropdown a user selected
		var select = document.getElementById("inputBank");
		var newMapMarkers = [];

		function changeMarkers(){
			markersLayer.clearLayers();
			var newLatLong = [];

			console.log("Before: " + newMapMarkers.length);

			var tempLength = newMapMarkers.length;
			// for(var i = 0; i < tempLength; i++) {
			// 	mymap.removeLayer(newMapMarkers[i]);
			// }

			for(var i = 0; i < 100; i++) {
				if(select.value == banks[i].Acquiring) {
					newLatLong.push([banks[i].Latitude,banks[i].Longitude]);
				}
			}

			for(var i = 0; i < newLatLong.length; i++) {
				var LMarker = L.marker(newLatLong[i]).addTo(mymap)
				.on('click', onClick)
				.bindPopup(banks[i].Name + "<br>" + banks[i].City + ", " + banks[i].State).openPopup();
        		newMapMarkers.push(LMarker);
        		markersLayer.addLayer(LMarker); 
        		// mymap.addLayer(newMapMarkers[i]);
			}

			console.log("After: " + newMapMarkers.length);
		}

		// if that drop down is equal to the acquiring institution of the markers available
		// only show those markers

		function onClick(e) {
    		// console.log(this);
		}

