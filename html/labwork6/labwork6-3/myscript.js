function generateTable() {
    var numberInput = document.getElementById("numberInput").value;
    var resultDiv = document.getElementById("result");

    
    resultDiv.innerHTML = "";

    
    if (isNaN(numberInput)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

   
    var tableHTML = "<h2>Multiplication Table for " + numberInput + ":</h2><ul>";
    for (var i = 1; i <= 10; i++) {
        var result = numberInput * i;
        tableHTML += "<li>" + numberInput + " x " + i + " = " + result + "</li>";
    }
    tableHTML += "</ul>";

   
    resultDiv.innerHTML = tableHTML;
}