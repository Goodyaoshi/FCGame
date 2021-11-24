var browser={
    versions:function(){ 
           var u = navigator.userAgent, app = navigator.appVersion; 
           return {//移动终端浏览器版本信息 
                trident: u.indexOf('Trident') > -1,
                presto: u.indexOf('Presto') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                iPhone: u.indexOf('iPhone') > -1 ,
                iPad: u.indexOf('iPad') > -1,  
                webApp: u.indexOf('Safari') == -1,
                weixin: u.indexOf('MicroMessenger') > -1, 
                qq: u.match(/\sQQ/i) == " qq"
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

var roms = $.parseJSON($.ajax({
	url: "./roms/roms.json",
	dataType: "json",
	async: false
}).responseText);

var nes;
$(function() {
	if(browser.versions.mobile || browser.versions.ios || browser.versions.android || 
	browser.versions.iPhone || browser.versions.iPad){  	
		document.getElementById('default').style.display="";  	
		document.getElementById('computer').style.display="none";
		nes = new JSNES({
			'ui': $('#emulator').JSNESUI(roms)
		});	
	}else{
		document.getElementById('computer').style.display="";  	
		document.getElementById('default').style.display="none";
		nes = new JSNES({
			'ui': $('#computerEmulator').JSNESUI(roms)
		});	
	}
});
