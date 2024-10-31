$(function() {
  
    // Set the command-line prompt to include the user's IP Address
      $('.prompt').html('[user@zack_brian] > ');
  
    // Initialize a new terminal object
    var term = new Terminal('#input-line .cmdline', '#container output');
    term.init();
    
  });
  
  document.getElementById('input-line').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        getCommandPrompt()
      }
  });
  
    function getCommandPrompt() {
      commandArrays = document.getElementById("input").value.split(" ");
    
      if (commandArrays[1] == "task") {
        if (commandArrays[0] == "run") {
            if (commandArrays[2] == null) {
              document.getElementById("output").innerHTML += "<br/><error>Cannot run if no task selected</error>";
            } else if (commandArrays[2] == "main.new.chicken") {
              document.getElementById("output").innerHTML += "<br/>Running task...";
            } else if (commandArrays[2] == "main.merge.chicken") {
              document.getElementById("output").innerHTML += "<br/>Running task...";
            } else {
              document.getElementById("output").innerHTML += "<br/><error>Invalid task</error>";
            }
        }
      } else if (commandArrays[0] == "color") {
        if (commandArrays[1] == null) {
          document.getElementById("output").innerHTML += "<br/><error>Color is not specified</error>";
        } else if (commandArrays[1] == 0) {
          document.body.style.backgroundColor = "black";
        } else if (commandArrays[1] == 1) {
          document.body.style.backgroundColor = "blue";
        } else if (commandArrays[1] == 2) {
          document.body.style.backgroundColor = "red";
        } else if (commandArrays[1] == 3) {
          document.body.style.backgroundColor = "green";
        } else if (commandArrays[1] == 4) {
          document.body.style.backgroundColor = "yellow";
        } else if (commandArrays[1] == 5) {
          document.body.style.backgroundColor = "lime";
        } else if (commandArrays[1] == 6) {
          document.body.style.backgroundColor = "dodgerblue";
        } else if (commandArrays[1] == 7) {
          document.body.style.backgroundColor = "magenta";
        } else if (commandArrays[1] == 8) {
          document.body.style.backgroundColor = "purple";
        } else if (commandArrays[1] == 9) {
          document.body.style.backgroundColor = "white";
        } else {
          document.getElementById("output").innerHTML += "<br/><error>Invalid Color</error>";
        }
      } else {
        document.getElementById("output").innerHTML += "<br/><error>Invalid command</error>";
      }
    }