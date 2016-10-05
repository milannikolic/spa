(function () {
'use strict';

angular.module('ListApp', [])
.controller('BListController', BListController)
.controller('SListController', SListController)
.service('ListService', ListService);

BListController.$inject = ['ListService'];
function BListController(ListService) {
  var bCtl = this;

  bCtl.items = ListService.getList();

  bCtl.byeItem = function (index) {
    ListService.byeItem(index);
  }

  bCtl.empty = function(){
    return ListService.emptyList();
  };

}

SListController.$inject = ['ListService'];
function SListController(ListService) {
  var sCtl = this;

  sCtl.items = ListService.getSList();

  sCtl.returnItem = function(index){
    ListService.returnItem(index);
  };

  sCtl.empty = function(){
    return ListService.emptySList();
  };
}


function ListService() {
  var service = this;

  // List of shopping items
  var itemsBye = [
    {
      name: "Kolaci",
      quantity: 10
    },
    {
      name: "Sokic",
      quantity: 15
    },
    {
      name: "Vopi",
      quantity: 7
    },
    {
      name: "Njakvi",
      quantity: 13
    },
    {
      name: "Prase",
      quantity: 1
    }
  ];

  var itemsBought = [];

  service.byeItem = function (itemIndex) {
    // console.log("Bye service", itemIndex);
    var item = itemsBye[itemIndex];
    itemsBought.push(item);
    itemsBye.splice(itemIndex,1);
  };

  service.returnItem = function (itemIndex) {
    var item = itemsBought[itemIndex];
    itemsBye.push(item);
    itemsBought.splice(itemIndex, 1);
  };

  service.getList = function () {
    return itemsBye;
  };

  service.getSList = function (){
    return itemsBought;
  };

  service.emptyList = function(){
    return (itemsBye.length == 0 ? true : false);
  };

  service.emptySList = function(){
    return (itemsBought.length == 0 ? true : false);
  };

}

})();
