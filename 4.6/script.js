var A = parseInt(prompt("Introduce un número: "));
var B = parseInt(prompt("Introduce otro número: "));
var C = A + B;
var D = A * B;

alert("!A > B: " + (!(A>B)));
alert("C > A && B: " + ((C > A) && (C > B)));
alert("D < A && B: " + ((D < A) && (D < B)));
alert("A > B || A > D: " + ((A > B) || (A > D)));
alert("A == B || A==C: " + ((A == B) ||(A == C)));

document.write("!A > B: " + (!(A>B)) + "<br>" + 
               "C > A && B: " + ((C > A) && (C > B)) + "<br>" +
               "D < A && B: " + ((D < A) && (D < B)) + "<br>" +
               "A > B || A > D: " + ((A > B) || (A > D)) + "<br>" + 
               "A == B || A == C: " + ((A == B) || (A == C))); 