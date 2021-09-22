let question;
const array = [];
let element;
do {
    // const userQuestion = (function () {
        do {
            question = +prompt('How many elements elemetns do you want to the array (min 5; max 20)?');
        } while (question < 5 || question > 20 || question !== question);

        do {
            function elementsArray(array, element) {
            for (let index = 0; index < question; index++) {
                do {
                    element = +prompt('Put arrow element');
                } while (element !== element);
                array[index] = element;
            }
                return array;
            }
        } while (element <= array.length);
        elementsArray(array, element);
    // })();

function SelectionSort(A) {                             
    var n = A.length; 
    for (var i = 0; i < n-1; i++) 
     { var min = i; 
       for (var j = i+1; j < n; j++) 
        { if (A[j] < A[min]) min = j; }  
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t; 
     }                     
    console.table(A) 
};
    SelectionSort(array);
} while (confirm('Do you want to repeat?'));
