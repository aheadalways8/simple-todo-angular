function TodoCtrl($scope) {
  
  $scope.editToggle=false;
  
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
  
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
	
	$scope.editOpen = function (todo, $index) {
		$scope.editToggle=!$scope.editToggle
        $scope.formTodoText = todo.text;
      	$scope.var = $index;
      	$scope.originalTodo = angular.extend({}, todo);
    };
  
	$scope.editTodo = function () {
		$scope.editSaveTodo = {text: $scope.formTodoText, done:false}
      $scope.todos[$scope.var] = $scope.editSaveTodo;
	  $scope.editToggle=!$scope.editToggle;
	  $scope.var=null;
    };
  

		$scope.removeTodo = function ($index) {
      		$scope.todos.splice($index, 1);
    };
}