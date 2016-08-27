var app = angular
  .module('app', ['pouchdb']);

app.controller('questions_controller', function ($log, $scope) {
    var vm = this;

    vm.title = 'Welcome to eHealth programming Questions';
    vm.array_compaction = [1, 3, 7, 7, 8, 9, 9, 9, 10];
    vm.array_rotation = [1, 2, 3, 4, 5, 6];
    vm.string1 = "String";
    vm.string2 = "test";
    vm.number = 2;
    vm.arrayRotation=[];
    vm.multiple = "";
    vm.character_in_string_nn = "";
    vm.character_in_string_n = "";


    find_chars_n_n(vm.string1, vm.string2);

    find_chars_n(vm.string1, vm.string2);

    arrayRotation();

    arrayCompaction();

    leastCommonMultiple(2, 4);



    //ARRAY COMPACTION
    function arrayCompaction() {

        for (var i = 0; i <= vm.array_compaction.length; i++) {
            if (vm.array_compaction[i - 1] === vm.array_compaction[i]) {
                vm.array_compaction.splice(i, 1);
                i--;
            }
        }
        return vm.array_compaction;
    }


    //ROTATING AN ARRAY
    function arrayRotation() {
        var arr1 = vm.array_rotation.slice(0, vm.array_rotation.length - vm.number);
        var arr2 = vm.array_rotation.slice(vm.array_rotation.length - vm.number, vm.array_rotation.length);
        vm.arrayRotation = arr2.concat(arr1);
        return vm.arrayRotation;

    }

    //CHARACTERS IN (N*N) STRINGS
    function find_chars_n_n(a, b) {
        var array = new Array();
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < b.length; j++) {
                if (a[i] === b[j]) {
                    array.push(a[i]);
                }
            }
        }
        vm.character_in_string_nn = array;
        return array;
    }

    //CHARACTERS IN (N) STRINGS
    function find_chars_n(a, b) {
        var array = new Array();
        for (var i = 0; i < a.length; i++) {
            if (b.indexOf(a[i]) > -1) {
                array.push(a[i]);
            }
        }
        vm.character_in_string_n = array;
        return array;
    }
    //LEAST COMMON MULTIPLE
    function leastCommonMultiple(min, max) {
        function range(min, max) {
            var myArray = [];
            for (var i = min; i <= max; i++) {
                myArray.push(i);
            }
            return myArray;
        }

        function gcd(a, b) {
            return !b ? a : gcd(b, a % b);
        }

        function lcm(a, b) {
            return a * b / gcd(a, b);
        }

        vm.multiple = min;
        range(min, max).forEach(function (n) {
            vm.multiple = lcm(vm.multiple, n);
        });
        return vm.multiple;
    }
});

