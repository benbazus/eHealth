eHealth Programming Test


The answers to the questions are in “eHealthTest/app/app.js”.


Question #1:

    Depth first tree traversal in JavaScript
    Discuss an algorithm to traverse a tree, depth first.
    

Depth first tree traversal is one of the different ways of walking a tree. The order one is breath first transversal. Depth first tree traversal involves starting at the root of the tree and following a path of the tree until the last node for the path is reached, then backtracking and following the next path until it's last node is reached and so on until there are no more paths left.    

    
                                  A
                                /   \
                              B	    C
                             /       /  \
                            D      E    F
    
Using the (figure) tree above, a depth first traversal starting at node A will transverse from the left side of the node as 
thus: -> A, B, D, C, E, and F
    
The algorithm

function depth_first_traversal (Tree t) {
    var firstNode = getFirstNodeFromTree(t);
    // nodes not visited yet
    var undiscovered = new Node(firstNode, null); 
    // nodes visited already
    var discovered = new Node(null, null); 
    
while(undiscovered.nodes.length > 0){
        var currentNode = undiscovered.nodes[0];
        undiscovered.nodes.remove(currentNode);
        discovered.nodes.push(currentNode);
        if (currentNode == solution){
            return currentNode;
        } else {
    // nextNodes are neither in undiscovered nor discovered
            nextNodes = getNextNodesFromTree(t); 
            undiscovered.nodes.push(nextNodes);
        }
    }
    // it might actually not offer a node which is a solution
    return false; 
}   
public void depth_first_traversal ()
	{
		Stack s=new Stack();
		s.push(rootNode);
		rootNode.visited=true;
		
		while(!s.isEmpty())
		{
			Node n=(Node)s.peek();
			Node child=getUnvisitedChildNode(n);
			if(child!=null)
			{
				child.visited=true;
				printNode(child);
				s.push(child);
			}
			else
			{
				s.pop();
			}
		}
	}

The algorithm description using stack data structure

    
1. Initialize new stack.
2. Add node to the stack.
3. Make the node as having visited.
4. Loop through the node.
5.  while The traversal begins by passing the tree to the node to the function depth_first_traversal.

6. It marks A as visited in order to prevent processing a node more than
once. The child nodes of the current nodes are then retrieved B, D. The B is picked if it has not been visited another call to depth_first_traversal is made passing the tree and B. Otherwise D would be picked.

7. The child nodes of the node picked in (2.) say [b] is then processed. It is marked visited. Then its child nodes are processed as in step (2.). Since it has just a single node, the function is called if [d] is yet to be visited else function terminates and returns to the outer call which would step to the next child node for node [a].
        
8. The child nodes of the node picked in (3.) [d] would then be processed.
First depth_first_traversal(tree, [n]). [n] is marked visited and     since it has not children, the next child node of [d] node [e] is processed as depth_first_traversal(tree, [e]).
     
9. Having reached the depth for the branch starting with node [b], all  recursive call wrap up and then processing takes off for the next [a] child node and so on until the whole tree nodes have been visited.
    
    
THE DEPTH FIRST TREE TRAVERSAL
*****************************************************************************
There are three algorithms for depth first tree traversal namely post-order,in-order algorithm and pre-order. The in-order algorithm visits the LEFT branch firstly ,the PARENT , and then the RIGHT of the branch taking the binary tree as an example.
The in-order algorithm keeps visiting the same branch of the binary tree recursively until a LEAF node is encountered  or a node with no more LEFT branches of the tree is visited, afterwards it visits the parent node of that tree and then the RIGHT branch of the said tree.In a binary search tree , if the the in-order depth first tree traversal is applied it will give a sorted list of numbers.

    
    
    
       
How to run
1. Download the “eHealthTest” file.
2. Extract file into a directory.
3. At command line cd to the directory.
4. Execute “npm install”
5. Execute “bower install”.
6. Execute” npm install –g karma-cli”.
7. Execute “karma start” to run the test.

The answers to the questions are in “eHealthTest/app/app.js
========================================================
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
==============================================

