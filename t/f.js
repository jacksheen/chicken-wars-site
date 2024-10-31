$(function() {
  
    // Set the command-line prompt to include the user's IP Address
      $('.prompt').html('[user@zack_brian] > ');
  
    // Initialize a new terminal object
    var term = new Terminal('#input-line .cmdline', '#container output');
    term.init();
    
    // Update the clock every second
    setInterval(function() {
      function r(cls, deg) {
        $('.' + cls).attr('transform', 'rotate('+ deg +' 50 50)')
      }
      var d = new Date()
      r("sec", 6*d.getSeconds())  
      r("min", 6*d.getMinutes())
      r("hour", 30*(d.getHours()%12) + d.getMinutes()/2)
    }, 1000);
    
  });
  
  document.getElementById('input-line').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        getCommandPrompt()
      }
  });
  
    function getCommandPrompt() {
      commandArrays = document.getElementById("input").value.split(" ");
  
      console.log(commandArrays);
    
      if (commandArrays[1] == "task") {
        if (commandArrays[0] == "run") {
            if (commandArrays[2] == null) {
              document.getElementById("output").innerHTML += "<br/><error>Cannot run if no task selected</error>";
            } else {
              document.getElementById("output").innerHTML += "<br/>Running task..";
            }
        }
      } else {
        document.getElementById("output").innerHTML += "<br/><error>Invalid command</error>";
      }
    }