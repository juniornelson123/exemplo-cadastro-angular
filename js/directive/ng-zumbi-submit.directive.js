angular.module("app").directive('ngZumbiSubmit', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		require: '^form', // Array = multiple requires, ? = optional, ^ = check parent elements
		scope: {
			submit: '&'
		},
		template: "<button type='submit' class='btn btn-primary'>Salvar</button>",
		link: function($scope, $element, iAttrs, controller) {
			$element.on("click",function(){
				if(controller.$invalid){
					alert("Formulario invalido")	
				}else{
					$scope.submit();
				}
			});	
		}

	};
});