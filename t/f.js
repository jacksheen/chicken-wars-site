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
  
      var color_imported, gus_imported;
    
      if (commandArrays[1] == "task") {
        if (commandArrays[0] == "run") {
            if (commandArrays[2] == null) {
              document.getElementById("output").innerHTML += "<br/><error>Cannot run if no task selected</error>";
            } else if (commandArrays[2] == "main.new.chicken") {
              document.getElementById("output").innerHTML += "<br/>Running task..";
            } else if (commandArrays[2] == "main.merge.chicken") {
              document.getElementById("output").innerHTML += "<br/>Running task..";
            } else {
              document.getElementById("output").innerHTML += "<br/><error>Invalid task</error>";
            }
        }
      } else if (commandArrays[0] == "import") {
        if (commandArrays[1] == null) {
          document.getElementById("output").innerHTML += "<br/><error>Module is not specified</error>";
        } else if (commandArrays[1] == "color") {
          document.getElementById("output").innerHTML += "<br/>Importing Color...";
          color_imported = true;
        }
      } else {
        document.getElementById("output").innerHTML += "<br/><error>Invalid command</error>";
      }
    }