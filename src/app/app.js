'use strict';
var app = angular.module('myApp', []);

app.controller('AppCtrl', appModule)

appModule.$inject = ['$scope'];

function appModule($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.ishide = true;
    $scope.numpost = 0;
    $scope.posts = [
        {
            id: 1,
            title: 'His mother had always taught him"',
            category: 'history',
            image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
        }, {
            id: 3,
            title: 'One can cook on and with an open fire.',
            category: 'american',
            image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
        }, {
            id: 2,
            title: 'He was an expert but not in a discipline"',
            category: 'crime',
            image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
        }
    ];
}


