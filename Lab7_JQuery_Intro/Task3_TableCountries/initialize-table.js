function initializeTable() {

    $("#createLink").click(function() {
        let country = $("#newCountryText").val();
        let city = $("#newCapitalText").val();
        
        
        //if table only only has two rows= only have delete link
        let markup = "<tr><td>" + country + "</td><td>" + city + "</td><td><a href='#' id='delete'>[Delete]</a></td></tr>" ;
        $("#countriesTable").append(markup);
        
        //if table has >2 rows: new insert also gets a link for up. The one before recieves a link for down.
        if ( $("#countriesTable tr").length > 3) {
            let upLink = "<a href='#' id='up'>[Up]</a>";
            $("a:last").parent().append(upLink);

        }
        
        // clear input
        $("#newCountryText, #newCapitalText" ).val('');
        
    });
    
    $("#countriesTable").on("click", "#delete",function(){ // .on(click,..) works on dynamically added elements
        console.log("test");
        

    });


    function updateLink() {
        //cases: 
        // if element has a row above: add a link for up, if there isn't one (was first)
        // if element has a row below: add a link for down if there isn't one. (was last)
        // 
    }
    
}



  
    
