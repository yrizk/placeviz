// http://api.census.gov/data/2010/sf1?key=0be96800c4e188770e6ecc7576e5e85e26fcdfab&get=P0010001,NAME&for=state:06
// read data from that request and input that into the div


// -- Network Stuff -- //

/*
 * url String 
 * method: GET / POST String
 * callback: function for the success callback 
   TODO allow failure fallback
 */
function httpAsync(url,method, callback) {
	var xmlHttpRequest = new XmlHttpRequest();
	xmlHttpRequest.onreadystatechang = function() {
		if (xmlHttpRequest.readystate == 4 && xmlHttpRequest.status == 200) {
			
		}
	}
}
