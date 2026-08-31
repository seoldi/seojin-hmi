//서브블럭의 이벤트
var add_Evnt = {
    "btn": {
        /*
        "MASEL_7": {
            Request: function (e, PageBlock) {
                try {
                    console.log('MASEL_7');
                    Maru_main.btn_TEST2();
                } catch (e) { }
            }
        },
        "MASEL_8" : {
            Request: function (e, PageBlock) {
                try {
                    console.log('MASEL_8');
                    Maru_main.btn_TEST();
                } catch (e) {}
            },
            Response: function (data) {
                console.log('response : ' + data);
                //try{
                //    requestPage.call(this, {
                //        url : '/form/html/master.html',
                //        id : 'master_one'
                //    });
                //}catch(e){ console.log(e);}
            }
        }, 
        */
        "CHAR1": {
            Request: function (e, PageBlock) {
                try {
                    //console.log('CHAR1');
                    Maru_main.btn_TEST();
                } catch (e) { }
            }
        },
        "W_FRM1": {
            Request: function (e, PageBlock) {
                try {
                    Maru_main.btn_TEST2();
                    //Maru_main.writefrm1();
                } catch (e) { }
            },
            Response: function (data) {
                console.log('response : ' + data);
            }
        },
        "W_FRM2": {
            Request: function (e, PageBlock) {
                try {
                    Maru_main.writefrm2();
                } catch (e) { }
            },
            Response: function (data) {
                console.log('response : ' + data);
            }
        },
        "EXIT": {
            Request: function (e, PageBlock) {
                try {
                    Maru_main.btn_EXIT();
                } catch (e) { }
            },
            Response: function (data) {
            }
        }
    },
    "input" : {
    }
};

(function(){
// 페이지 로딩완료 후 실행
    $('#main_one').unbind('onload').bind("onload", function(){
		//console.log( 'Page Load '+$(this).attr('id') ) ;
		Event_bind( $(this).attr('id') );
	});
	// 페이지 보여질때 실행
    $('#main_one').unbind('pageshow').bind("pageshow", function(){
        //console.log( 'Page Open '+$(this).attr('id') ) ;
	    try{
            Maru_main.pageLoaded('main_one') ;
	    }catch(e){}
	});
	// 페이지 빠져나갈때 실행
    $('#main_one').unbind('beforeunload').bind("beforeunload", function(){
		//console.log( 'Page Close '+$(this).attr('id') ) ;
        try{
            Maru_main.pageEnd('main_one') ;
        }catch(e){}
	});
})();