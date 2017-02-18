angular.module('app.services', [])

.factory('klody', [function(){
	var klody = {};

	klody.list = [];
	klody.count = 0;
	klody.V = 0;
	
	klody.add = function(kloda_txt, kloda){
		var id = -1;
		for(var j = 0; j < klody.list.length; ++j){
			if(klody.list[j].key == kloda_txt){
				id = j;
				break
			}
		}
		
		
		console.log(id);
		
		klody.count++;
		klody.V = klody.V + kloda.M;
		if(id == -1){
			var data = JSON.parse(JSON.stringify(kloda));
			klody.list.push({id: klody.list.length, text: kloda_txt, data: data, count: 1, key :kloda_txt, M :kloda.M});
		} else {
			klody.list[id].count++;
		}
	};
	
	klody.kcont = function(kloda_txt, kloda){
		var id = -1;
		for(var j = 0; j < klody.list.length; ++j){
			if(klody.list[j].key == kloda_txt){
				id = j;
				break
			}
		}
		
		console.log(id);
		
		if(id == -1){
			return 0;
		} else {
			return klody.list[id].count;
		}
	};

	klody.find = function(kloda_txt){
		var id = -1;
		for(var j = 0; j < klody.list.length; ++j){
			if(klody.list[j].key == kloda_txt){
				id = j;
				break
			}
		}
		
		console.log(id);
		
		return id;
	};
	
	klody.inc = function(kloda_txt){
		var id = -1;
		for(var j = 0; j < klody.list.length; ++j){
			if(klody.list[j].key == kloda_txt){
				id = j;
				break
			}
		}
		
		klody.count++;
		klody.V = klody.V + klody.list[id].M;
		klody.list[id].count++;
	};
	
	klody.dec = function(kloda_txt){
		var id = -1;
		for(var j = 0; j < klody.list.length; ++j){
			if(klody.list[j].key == kloda_txt){
				id = j;
				break
			}
		}
		
		if(klody.list[id].count > 1){
			klody.count--;
			klody.V = klody.V - klody.list[id].M;
			klody.list[id].count--;
		}else{
			klody.count--;
			klody.V = klody.V - klody.list[id].M;
			klody.list.splice(id, 1);
		}
	};
	return klody;
}])


.factory('stosy', [function(){
	var stosy = {};

	stosy.list = [];
	stosy.count = 0;
	
	stosy.add = function(kloda_txt, kloda){
		var id = -1;
		stosy.list.forEach(function(entry) {
			if(entry.key == kloda_txt) {
				id = entry.id;
			}
		});
		
		console.log(id);
		
		stosy.count++;
		if(id == -1){
			var data = JSON.parse(JSON.stringify(kloda));
			stosy.list.push({id: stosy.list.length, text: kloda_txt, data: data, count: 1, key :kloda_txt});
		} else {
			stosy.list[id].count++;
		}
	};
	
	stosy.find = function(kloda_txt, kloda){
		var id = -1;
		stosy.list.forEach(function(entry) {
			if(entry.key == kloda_txt) {
				id = entry.id;
			}
		});
		
		console.log(id);
		
		if(id == -1){
			return 0;
		} else {
			return stosy.list[id].count;
		}
	};
	
	stosy.inc = function(id){
		stosy.list[id].count++;
	};
	
	stosy.dec = function(id){
		if(stosy.list[id].count > 0){
			stosy.list[id].count--;
		}
	};

	return stosy;
}])

.service('BlankService', [function(){

}]);



