      $(function () {   
        var oldIndex;
        var newIndex;
        $("#tabs").tabs().find("#sortable").sortable({

          start: function (e, ui) {
            // creates a temporary attribute on the element with the old index
            $(this).attr('data-previndex', ui.item.index());
            console.log("current position: " + ui.item.index());
            oldIndex = ui.item.index();
          },
          update: function (e, ui) {
            console.log("update called");

          },
          stop: function(event, ui) {
            console.log("New position: " + ui.item.index());
            newIndex = ui.item.index();
            arrange(newIndex,oldIndex);  
          }
        });
        $("#sortable").disableSelection();

        function arrange(newIndex,oldIndex){
          if(newIndex<oldIndex){
            var temp = arrays[oldIndex];
            for(var i = oldIndex; i > newIndex ;i-- )
              arrays[i]= arrays[i-1];
            arrays[newIndex]=temp;
          }
          else if(newIndex>oldIndex){
            var temp = arrays[oldIndex];
            for(var i = oldIndex; i< newIndex ;i++ )
            arrays[i]= arrays[i+1];
            arrays[newIndex]=temp;
          }
        }

        
        $('body').on('mouseup', '#list', function () {  
          $(this).css("color","blue");
        });
       

        $('body').on('mouseup', '#showdiv', function () {  
          hideall();
          //alert($(this).attr("href"));
          $($(this).attr("href")).css("display","block");
        });

      });

      var arrays = [];

      function OnSuccessShow() {

        var string = "pen|pineapple|apple|orange|kiwi|grapes|mango";
        var template = "";
        var boxes = "";
        arrays = string.split("|");
        $.each(arrays, function (index, value) {
          template = template + "<li class='ui-state-default' id='list'><a id='showdiv' href='#tabs-" + value + "'>" + value + "</a></li>"; 
        });
        $.each(arrays, function (index, value) {
          boxes = boxes + "<div id='tabs-" + value + "' class=''><p>content of " + value + "</p></div>";
        });
        $("#sortable").html(template);
        $("#tabs").append(boxes);  
        hideall();
        $("#tabs-"+arrays[0]).css("display","block");
      }
      function hideall(){
        $.each(arrays, function(index, value){
          $("#tabs-"+arrays[index]).css("display","none");
        });
      }