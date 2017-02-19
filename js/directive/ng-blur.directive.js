angular.module("app").directive('ngBlur', function(){
			// Runs during compile
			return {
				restrict: 'A',
				require: 'ngModel',
				link: function($scope, $element, iAttrs, ngModel) {
					$($element.on('blur',function() {
						if (ngModel.$invalid) {
							$($element).closest("div").addClass("has-error has-feedback");
						}else{
							$($element).closest("div").removeClass("has-error has-feedback");
							$($element).closest("div").addClass("has-success has-feedback");
						}
					}));
					
				}
			};
		});