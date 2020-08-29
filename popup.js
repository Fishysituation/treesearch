$(document).ready(function(){
  //add another "root node" to current "tree"
  $('#addRoot').click(function(){
    $('#root').append("<div class='nodeDiv'><li class='node'><p class='nodeText'>newNode</p></li></div>")
  });

  $('body').on("click", ".nodeText", function(){
    $(this).parent().append("<ul class='nodeWrapper'><li class='node'><p class='nodeText'>newNode</p></li></ul>")
  });
});