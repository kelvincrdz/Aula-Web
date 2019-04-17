

btt.addEventListener('click', function() {
    var num1 = parseInt(document.getElementById('n1').value);
    
if(num1 > 0 && num1 < 10){
        alert("insuficeinte");
    }
    
    if(num1 > 10 && num1 < 14){
        alert("bom");
    }
    if(num1 > 14){
        alert("muito bom");
    }
});