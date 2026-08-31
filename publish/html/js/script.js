var popupToOpen = null;

function openPopupIfReady() {
    if (!popupToOpen) return;
    var $el = $('#' + popupToOpen);
    if (!$el.length) return;
    popupToOpen = null;
    $el.modal();
}

window.addEventListener('message', function(e) {
    if (e.data && e.data.openPopup) {
        popupToOpen = e.data.openPopup;
        openPopupIfReady();
    }
});

$(document).ready(function(){

    $("#pop").load("popup.html", function() {
        openPopupIfReady();
    })
   /* id 지정을 통해서도 가능합니다.
    $("#header").load("header.html #navbar")
    */

    $('#fingerBtn').click(function() {
        $('#finger').modal();
    });

    $('#rotationBtn').click(function() {
        $('#rotation').modal();
    });

    $('#feedingBtn').click(function() {
        $('#feeding').modal();
    });

    $('#secretNumBtn').click(function() {
        $('#secretNum').modal();
    });

    $('#completeBtn').click(function() {
        $('#complete').modal();
    });

    $('#fileSaveBtn').click(function() {
        $('#fileSave').modal();
    });

    $('.key').click(function() {
        $('#cell').modal();
        $('#cell').addClass('cell-feeding');
        $('.jquery-modal').removeClass('blocker');
    });

    $('.cancle').click(function() {
      $(this).closest('#feeding').removeClass('cell-feeding');
    });

    $('.active').click(function() {
        $('#keyboard').modal();
        $('#keyboard').addClass('cell-feeding');
        $('.jquery-modal').removeClass('blocker');
    });

    $('#toggleButton').click(function(){ // ID가 toggleButton인 요소를 클릭하면
  		var state = $('#moreMenu').css('display'); // state 변수에 ID가 moreMenu인 요소의 display의 속성을 '대입'
  		if(state == 'none'){ // state가 none 상태일경우
  			$('#moreMenu').show(); // ID가 moreMenu인 요소를 show();
  		}else{ // 그 외에는
  			$('#moreMenu').hide(); // ID가 moreMenu인 요소를 hide();
  		}
  	});

    jQuery('#selectBox').change(function() {
    	var state = jQuery('#selectBox option:selected').val();
    	if ( state == 'option2' ) {
    		jQuery('.layer').show();
    	} else {
    		jQuery('.layer').hide();
    	}
    });

});
