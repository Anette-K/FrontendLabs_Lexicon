function initializeTable() {

    $("#countriesTable").on("click","#createLink",function() {

        let country = $("#newCountryText").val();
        let city = $("#newCapitalText").val();
        let rowHtml = "<tr><td>" + country + "</td><td>" + city + "</td><td></td></tr>" ;
        $("#countriesTable").append(rowHtml);
        
        let delLink = "<a href='#' id='delete'>[Delete]</a>";
        let upLink = "<a href='#' id='up'>[Up]</a>";
        let downLink = "<a href='#' id='down'>[Down]</a>";
        $("td:last").append(delLink, upLink, downLink);
        
        // initial settings of the links (which to hide)
        if ( $("#countriesTable tr").length == 3) {
            $("#up").toggle();
            $("#down").toggle();
                        
        }
        else $("td:last #down, td:last-child #down:eq(-2)").toggle();
        
        // clear input field
        $("#newCountryText, #newCapitalText" ).val('');
        
    });
    
    $("#countriesTable").on("click", "#delete",function(){ // .on(click,..) works on dynamically added elements
        console.log("test");
        let anchor = $(this);
        
        //trying to test here.not working. 
        if(anchor.parent().is("td:last")) {console.log("is last")}
        if(anchor.is(":first")) {console.log("is first")}
        //
       //not working
       // updateLink(anchor);
        
        $(this).parents("tr").remove();
    });

    //not working.wip
    function updateLink(anchor) {
        
        let id = anchor.attr("id"); //
        console.log(anchor.html()); //
        //problem: if clause not getting triggered. find correct syntax.
        if(anchor.parent().is("td:last")) {console.log("is last")}
        if(anchor.is(":first")) {console.log("is first")}
        else console.log("middle");
        
        
        //pseudo: 
        // if clicked anchor is first in table: 
        //     hide uplink 
        //     show downlink
        
        // if row is last : 
        //     hide downlink
        //     show uplink
        // else: show all 3 links.
        
    }
    
}



  
    
