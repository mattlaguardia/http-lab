angular.module("InfamousCriminalsApp", [])
  .controller("CriminalsController", CriminalsController);

  CriminalsController.$inject = ["$http"];

  function CriminalsController($http) {
    var self = this
    self.newCriminal = {};
    self.addCriminal = addCriminal;
    self.getCriminals = getCriminals;
    self.deleteCriminal = deleteCriminal;
    self.all = [];

    function addCriminal() {
      $http.post("http://localhost:3000/criminals", self.newCriminal)
        .then(function(data){
          self.all = newCriminal.data.criminals;
        })
        self.all.push(this.newCriminal);
        self.newCriminal = {};
    }

    function deleteCriminal(criminal) {
      $http.delete("http://localhost:3000/criminals/"+criminal._id)
      .then(function(res) {
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      })
    }

    function updateCriminal(criminal) {
      $http.update("http://localhost:3000/criminals/"+criminal._id)
        .then(function(res){
        // add things to update //
        // will need to add a button //  
      })
    }

    function getCriminals() {
      $http.get("http://localhost:3000/criminals")
      .then(function(res){
        self.all = res.data.criminals;
      })
    }
    getCriminals();
  }
