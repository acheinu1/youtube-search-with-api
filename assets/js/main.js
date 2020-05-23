//searchbar handler
// $(function(){
//     var searchField = $("query");
//     var icon = $("search-btn");

// focus event handler
//  $(searchField) .on("focus", function(){
//      $(searchField).animate({width:"100%"},400);
//      $(icon).animate({right:"10px"},400);
//  });

 // blur event handler
//  $(searchField) .on("blur", function(){
//     if( searchField.val()===" "){
//         $(searchField).animate({width:"45%"},400, function(){});
//     }
//     if( icon.val()===" "){
//         $(icon).animate({right:"360px"},400, function(){});
//     }
// });

// })

$(function(){
    $("#searh-form").submit(function(e){
        e.preventDefault();
    })
})


function search() {
    //clear result
    $("#result").html(" ");
    $("#button").html(" ");
    
    //get form input
    var q = $("#query").val();

    //run GET request from api
    $.get("https://www.googleapis.com/youtube/v3/search",{
        part:"snippet, id",
        q : q,
        type:"video",
        key:"AIzaSyBgLJec3Wk1kRsWcy5Umbnlx2XkLiHaFmk"},
        function(data){
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            console.log(data);
        }
    );
}