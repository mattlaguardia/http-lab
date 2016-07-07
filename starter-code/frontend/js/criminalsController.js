console.log("Linked!")

var app = angular.module("InfamousCriminalsApp");


app.factory("Criminal", function($resource){
  return $resource("http://localhost:3000/criminals/:id", null, {
    query: {
      method: 'GET',
      isArray: false
    }
  })
});

app.controller("CriminalsController", function($scope, Criminal) {
  var self = this;
  self.all = [];

  var allCriminals = Criminal.query(function(){
    self.all = allCriminals.criminals;
  })

  var entry = Entry.get({ id: $scope.id}, function(){
    console.log('entry')
  })
});

  // function CriminalsController() {
  //   resources :criminals
  //   // function addCriminal() {
  //   //   $http.post("http://localhost:3000/criminals", self.newCriminal)
  //   //     .then(function(data){
  //   //       self.all = newCriminal.data.criminals;
  //   //     })
  //   //     self.all.push(this.newCriminal);
  //   //     self.newCriminal = {};
  //   // }
  //   //
  //   // function deleteCriminal(criminal) {
  //   //   $http.delete("http://localhost:3000/criminals/"+criminal._id)
  //   //   .then(function(res) {
  //   //     var index = self.all.indexOf(criminal);
  //   //     self.all.splice(index, 1);
  //   //   })
  //   // }
  //   //
  //   // function updateCriminal(criminal) {
  //   //   $http.update("http://localhost:3000/criminals/"+criminal._id)
  //   //     .then(function(res){
  //   //     // add things to update //
  //   //     // will need to add a button //
  //   //   })
  //   // }
  //   //
  //   // function getCriminals() {
  //   //   $http.get("http://localhost:3000/criminals")
  //   //   .then(function(res){
  //   //     self.all = res.data.criminals;
  //   //   })
  //   // }
  //   // getCriminals();
  // }
