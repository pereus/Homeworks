let number;
const array = [];
let element;

function userQuestion(promptDesc) {
    let question
    do {
      question = +prompt(promptDesc);
    } while (question < 5 || question > 20 || question !== question);
return question;
};

function elementsArray(array, element) {
    for (let index = 0; index < number; index++) {
        do {
            let counter = index + 1;
            let postfix;
            if (index === 0) {
                postfix = 'st';
            } else if (index === 1) {
                postfix = 'nd';
            } else if (index === 2){
                postfix = 'rd';
            } else {
                postfix = 'th'; 
            };
            element = +prompt(`Put ${counter}-${postfix} array element`);
        } while (element !== element);
        array[index] = element;
    }
        return array;
    };

    function SelectionSort(A) {                             
        var n = A.length; 
        for (var i = 0; i < n-1; i++) 
         { var min = i; 
           for (var j = i+1; j < n; j++) 
            { if (A[j] < A[min]) min = j; }  
           var t = A[min]; A[min] = A[ i ]; A[ i ] = t; 
         }                     
        return A; 
    };
    do {
        
        number = userQuestion('How many elements elemetns do you want to the array (min 5; max 20)?');
        do {
            elementsArray(array, element);
        } while (element <= array.length);
        console.table(SelectionSort(array)); 

    } while (confirm('Do you want to repeat?'));
