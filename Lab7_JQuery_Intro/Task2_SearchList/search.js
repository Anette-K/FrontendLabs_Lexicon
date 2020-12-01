function search() {
 var value = $("#searchText").val();
 console.log(value);

 $("li:contains('Ma')").css("font-weight","bold");
 //todo. check how to inser variable istead of 'Ma'
}