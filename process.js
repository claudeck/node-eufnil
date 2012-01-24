$(document).ready(function(){
  var newLines = [];
  $('pre').html().split("\n").forEach(function(line){
    if(line.indexOf('http://') != -1 || line.indexOf('https://') != -1){
      newLines.push(line.replace(/(http[s]{0,1}:\/\/[^ ]+)/g, 
        '<a href="$1" target="_blank">$1</a>'));
    }
  });

  $('pre').html(newLines.join("\n"));
});