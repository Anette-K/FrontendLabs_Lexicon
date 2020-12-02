function search() {

    var value = $("#searchText").val();
    $("li:contains('" + value + "')").css("font-weight","bold");

    var result = $("li:contains(`${value}´)").data.length;
    $("#result").text(result + " matches found");
 
}