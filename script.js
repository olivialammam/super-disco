console.log(moment().format('MMMM Do YYYY'));

// #- id 
// . - class

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(".saveBtn").click(function () {
    //grab the hout on click of the button 
    console.log($(this));
    var timeStamp = $(this).parent().find('.hour').attr("id");
    var value = $(this).parent().find('.description').val();
    //saves it to the localstorage 
    localStorage.setItem(timeStamp, value);

});

