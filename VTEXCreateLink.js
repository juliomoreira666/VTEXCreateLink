$(document).ready(function(){
    $("#qty").change(function(){
       val = $(this).val();
       newURL = "http://www.rs1.com.br/busca?fq=H:"+ val +"?map=productClusterSearchableIds";
      // alert(newURL);
       $(".log").prepend("URL de acesso para a coleção:<br>"+newURL+"<br>");
       $(".url").attr({href:newURL});
    });
});