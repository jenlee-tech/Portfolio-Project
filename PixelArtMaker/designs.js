//declaring variables


//Making the grid

function makeGrid(inputRow, inputColumn){
    
     for (var num=0; num < inputRow; num++)
        {
            $("table").append("<tr></tr>");
            for (var i=0; i < inputColumn; i++){
                $("tr").append("<td></td>");
            }
        }
    
}



//declaring variables and calling the function Makegrid upon submit
$('#sizePicker').submit(function(evt){
        evt.preventDefault();
        var inputRow = $('#inputRow').val();
        var inputColumn = $('#inputColumn').val();
        var inputColorPicvar = $('#colorPicker').val();
        makeGrid(inputRow, inputColumn);

})


//coloring the cells

$('td').click(function() {
      $(this).css('background', inputColorPicvar)
    });

     