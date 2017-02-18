angular.module('app.controllers', [])
     

//var ktmp = { LH : 1, LL: 1, O : 10,}
	 
.controller('dodawanieKDCtrl', ['$scope', '$rootScope', '$stateParams', 'klody', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, klody) {
	function m(LH, LL, O) {
		var L = LH + LL/10;
		console.log(L);
		var z = 0.7;
		var p = O + z*L/2;
		return Math.round(100*(3.14159265355 / 40000) * p*p *L)/100;
	}
	
	
	$scope.ktmp = { LH : 1, LL: 1, O : 10, M : 0};
	$scope.ktmp.M = m($scope.ktmp.LH, $scope.ktmp.LL, $scope.ktmp.O);
// Math.round(100*($scope.ktmp.LH + ($scope.ktmp.LL / 10)) * 3.1415926535 * ($scope.ktmp.O*$scope.ktmp.O) / 40000) / 100;
	// $scope.ktmp.M = Math.round(100*($scope.ktmp.LH + ($scope.ktmp.LL / 10)) * 3.1415926535 * ($scope.ktmp.O*$scope.ktmp.O) / 40000) / 100;
	$scope.snippet = 'K ' + $scope.ktmp.LH + ',' + $scope.ktmp.LL + ' x ' + $scope.ktmp.O + ' (' +  $scope.ktmp.M + ')';
	$scope.snippet2 = 'Obecnie takich kłód: ' + klody.count;
	$scope.snippet3 = 'Wszystkich kłód: ' + klody.count + ' [' + (Math.round(100*klody.V) / 100) + ' m3]';
	
	var self = this;
	self.klody = klody.list;
  
	$scope.kloda_LH = function($x) {
		$scope.ktmp.LH = $x;
		$scope.ktmp.M = Math.round(100*($scope.ktmp.LH + ($scope.ktmp.LL / 10)) * 3.1415926535 * ($scope.ktmp.O*$scope.ktmp.O) / 40000) / 100;
		$scope.ktmp.M = m($scope.ktmp.LH, $scope.ktmp.LL, $scope.ktmp.O);
		$scope.snippet = 'K ' + $scope.ktmp.LH + ',' + $scope.ktmp.LL + ' x ' + $scope.ktmp.O + ' (' +  $scope.ktmp.M + ')';
		$scope.snippet2 = 'Obecnie takich kłód: ' + klody.kcont($scope.snippet, $scope.ktmp);
	};
	
	$scope.kloda_LL= function($x) {
		$scope.ktmp.LL = $x;
		$scope.ktmp.M = Math.round(100*($scope.ktmp.LH + ($scope.ktmp.LL / 10)) * 3.1415926535 * ($scope.ktmp.O*$scope.ktmp.O) / 40000) / 100;
		$scope.ktmp.M = m($scope.ktmp.LH, $scope.ktmp.LL, $scope.ktmp.O);
		$scope.snippet = 'K ' + $scope.ktmp.LH + ',' + $scope.ktmp.LL + ' x ' + $scope.ktmp.O + ' (' +  $scope.ktmp.M + ')';
		$scope.snippet2 = 'Obecnie takich kłód: ' + klody.kcont($scope.snippet, $scope.ktmp);
	};
	
	$scope.kloda_O = function($x) {
		$scope.ktmp.O = $x;
		$scope.ktmp.M = Math.round(100*($scope.ktmp.LH + ($scope.ktmp.LL / 10)) * 3.1415926535 * ($scope.ktmp.O*$scope.ktmp.O) / 40000) / 100;
		$scope.ktmp.M = m($scope.ktmp.LH, $scope.ktmp.LL, $scope.ktmp.O);
		$scope.snippet = 'K ' + $scope.ktmp.LH + ',' + $scope.ktmp.LL + ' x ' + $scope.ktmp.O + ' (' +  $scope.ktmp.M + ')';
		$scope.snippet2 = 'Obecnie takich kłód: ' + klody.kcont($scope.snippet, $scope.ktmp);
	};
	$scope.kloda_Add = function($x) {
		klody.add($scope.snippet, $scope.ktmp);
		console.log(klody);
		$scope.snippet2 = 'Obecnie takich kłód: ' + klody.kcont($scope.snippet, $scope.ktmp);
		$scope.snippet3 = 'Wszystkich kłód: ' + klody.count + ' [' + (Math.round(100*klody.V) / 100) + ' m3]';
	};
	
		// $scope.ktmp.M = m($scope.ktmp.LH*10+$scope.ktmp.LL, $scope.ktmp.O);

}])
   
.controller('definiowanieStosWCtrl', ['$scope', '$stateParams', 'stosy', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, stosy) {
	
	$scope.ktmp = { LH : 3, LL: 0};
	$scope.snippet = 'S ' + $scope.ktmp.LH + '' + $scope.ktmp.LL + ' m3';
	$scope.snippet2 = 'Obecnie takich stosów: ' + stosy.find($scope.snippet, $scope.ktmp);
	$scope.snippet3 = 'Wszystkich stosów: ' + stosy.count;

	var self = this;
	self.stosy = stosy.list;
  
	$scope.stos_LH = function($x) {
		$scope.ktmp.LH = $x;
		$scope.snippet = 'S ' + $scope.ktmp.LH + '' + $scope.ktmp.LL + ' m3';
		$scope.snippet2 = 'Obecnie takich stosów: ' + stosy.find($scope.snippet, $scope.ktmp);
		$scope.snippet3 = 'Wszystkich stosów: ' + stosy.count;
	};
	
	$scope.stos_LL= function($x) {
		$scope.ktmp.LL = $x;
		$scope.snippet = 'S ' + $scope.ktmp.LH + '' + $scope.ktmp.LL + ' m3';
		$scope.snippet2 = 'Obecnie takich stosów: ' + stosy.find($scope.snippet, $scope.ktmp);
		$scope.snippet3 = 'Wszystkich stosów: ' + stosy.count;
	};

	$scope.stos_Add = function($x) {
		stosy.add($scope.snippet, $scope.ktmp);
		console.log(stosy);
		$scope.snippet2 = 'Obecnie takich stosów: ' + stosy.find($scope.snippet, $scope.ktmp);
		$scope.snippet3 = 'Wszystkich stosów: ' + stosy.count;
	};
}])
   
.controller('kOdyCtrl', ['$scope', '$rootScope', '$stateParams', 'klody', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, klody) {
	var self = this;
	self.klody = klody.list;
	
	
	$scope.inc = function(id) {
		klody.inc(id);
	};
	
	$scope.dec = function(id) {
		klody.dec(id);
	};
	
}])
   
.controller('stosyCtrl', ['$scope', '$stateParams', 'stosy', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, stosy) {
	var self = this;
	self.stosy = stosy.list;
	
	$scope.inc = function(id) {
		stosy.inc(id);
	};
	
	$scope.dec = function(id) {
		stosy.dec(id);
	};

}])
   
.controller('rozkAdCtrl', ['$scope', '$stateParams', 'klody', 'stosy', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, klody, stosy) {

	$scope.przelicz = function() {
		var buckets = [];
		
		stosy.list.forEach(function(entry) {
			for(var i = 0; i < entry.count; ++i){
				buckets.push({id: buckets.length, text: entry.text, v: entry.data.LH * 10 + entry.data.LL, uv : 0, data: []});
			}
		});
		
		klody.list.forEach(function(kl) {
			for(var i = 0; i < kl.count; ++i){
				var bid = -1;
				
				buckets.forEach(function(buck) {
					if(buck.uv + kl.data.M <= buck.v && bid == -1) {
						bid = buck.id;
					}
				});
				
				if(bid >= 0) {
					buckets[bid].uv = buckets[bid].uv + kl.data.M;
					console.log(kl);
					console.log( kl.data.M);
					console.log(buckets[bid].uv);
					buckets[bid].data.push(kl);
				}
			}
		});
		console.log(buckets);
		var html = '';
		buckets.forEach(function(buck) {
				console.log(buck);
			html += '<div style="margin-bottom:10px !important;"><div>Stos '+buck.id+': '+buck.v+' m3 [wypełnienie '+(Math.round(100*buck.uv) / 100)+' m3]</div>';
			
			buck.data.sort(function(a, b) {
				return a.key.localeCompare(b.key);
			});
			
			var group = [];
			buck.data.forEach(function(klod) {
				group[klod.key] = {klod : klod, c : 0};
				console.log(group);
				console.log(klod);
			});
			
			buck.data.forEach(function(klod) {
				group[klod.key].c += 1;
			});

			for (var key in group) {
				var g = group[key];
				html += '<div> - Kłoda ' + g.klod.data.LH + ',' + g.klod.data.LL + ' x ' + g.klod.data.O + ' (' +  g.klod.data.M + ')  -  ' + g.c + ' sztuk</div>';

			};
			html += '</div>';
			
		});
		
		$scope.snippet = html;
		console.log(buckets);
	};
}])
 