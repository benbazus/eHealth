eHealth Programming Test
How to run
1. Download the “eHealthTest” file.
2. Extract file into a directory.
3. At command prompt, cd to the directory.
4. Execute “npm install”
5. Execute “bower install”.
6. Execute” npm install –g karma-cli”.
7. Then execute “karma start” to run the test.
The answers to the questions can be found in Answers.txt file or “eHealth/app/app.js”, the later will run if index.html is displayed.


Question #1: Depth first tree traversal
Depth first tree traversal is one of the different ways of walking a tree. The order one is breath first transversal. Depth First search (DFS) exhaustively searches each branch of a tree to its greatest depth before backtracking to previous unexplored branch, although its problematic on deep branching graphs, as the algorithm will continue to the maximum depth of graph.
DFS can be implemented either recursively or using a stack to maintain the list of nodes that must be enumerated. and so on until there are no more paths left.















Depth First Search Algorithm
void Depth_First_Search(node n)
Mark each node in the tree as Unvisited.
count <-- 0
For each node n in tree do
     if n is marked as unvisited
            call function dfs(n)

Function dfs( node n)
               count <-- count +1 (increment count of iteration)
               mark node n with count
               for each w in tree adjacent to node n
                     if w is marked 0
                            call function dfs(w) recursively.
               
Explanation

1. From the algorithm above, mark each node as zero and set the initial count to zero.
2. The for each node in the tree, check if the node is marked with zero
3. If it is marked with zero, then call dfs recursive function and pass the node. 
4. Increment the count by 1.
5. Mark the node n with zero.
5. For each node w in the tree that is adjacent to node n
6. If the node w is marked as zero, then recursively call the function until all the nodes are visited.

Using the (figure) above, a depth first traversal starting at node A will transverse from the left side of the node as thus: -> side of the node as thus: -> A, B, C, D, E, F, G and H


=======================================================
    
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

=======================================================

    //ROTATING AN ARRAY
    function arrayRotation() {
        var arr1 = vm.array_rotation.slice(0, vm.array_rotation.length - vm.number);
        var arr2 = vm.array_rotation.slice(vm.array_rotation.length - vm.number, vm.array_rotation.length);
        vm.arrayRotation = arr2.concat(arr1);
        return vm.arrayRotation;
    }

=======================================================

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
    
----------------------------------------------------------------------------------------------
    
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
    
=======================================================

    //LEAST COMMON MULTIPLE
    function leastCommonMultiple(min, max) ;
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

=======================================================

