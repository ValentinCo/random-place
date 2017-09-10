jQuery(function ($) {
    //Spreadsheet id = 1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ
    $(".melange").click(function () { 
    $.ajax({
        //Conversion en json = od6/public/values?alt=json
        url: "http://spreadsheets.google.com/feeds/list/" + $('.magie').val() + "/od6/public/values?alt=json "

    }).done(function (data) {
        //Boucle pour afficher les prénom
        
            
            shuffle(data.feed.entry);
            for (var i = 0; i < data.feed.entry.length; i++) {
                $("#place" + i).html(data.feed.entry[i].title.$t + "<br>" + '<img class="image" src="' + data.feed.entry[i].gsx$url.$t + '"/>');
                $("#groupe" + i).html(data.feed.entry[i].title.$t + "<br>" + '<img class="image" src="' + data.feed.entry[i].gsx$url.$t + '"/>');
            }
        });


    }).fail(function () {
        console.log("ERRRRRRRREUR");
    });
});


//FOnction pour melanger le tableau
function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}
