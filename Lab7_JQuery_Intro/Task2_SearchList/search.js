function search() {
 var value = $("#searchText").val();
 console.log(value);

//  $("li:contains(`${value}´)").css("font-weight","bold");
$("li:contains('Ma')").css("font-weight","bold");
//above is very strange...
 var result = $("li:contains(`${value}´)").data.length;
 
 $("#result").text(result+" matches found");
 
 
}