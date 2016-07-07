angular.module("InfamousCriminalsApp", [])
  .controller("CriminalsController", CriminalsController);

  CriminalsController.$inject = ["$http"];

  function CriminalsController($http) {
    var self = this
    this.newCriminal = {};
    this.addCriminal = addCriminal;
    this.getCriminals = getCriminals;
    self.all = [];

    function addCriminal() {
      $http.post("http://localhost:3000/criminals", self.newCriminal)
        .then(function(data){
          self.all = newCriminal.data.criminals;
        })
        self.all.push(this.newCriminal);
        self.newCriminal = {};
    }

    function deleteCriminal() {
      $http.delete("http://localhost:3000/criminals")
        .then(function(data) {
          self.destroy;
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
