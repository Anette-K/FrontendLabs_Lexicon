function initializeTable() {
    
    $("#createLink").click(function(){
        var country = $("#newCountryText").val();
        var city = $("#newCapitalText").val();
        console.log(city);
        
        var markup = "<tr><td>" + country + "</td><td>" + city + "</td><td><a href='#' id='delete'>[Delete]</a></td></tr>" ;
        $("#countriesTable").append(markup);
        
       
    });
    
}



  
    
