function fungsiemot(indeks){
	var banyakemot = 4;
	var arrayemot = [];
	var i;
	for(i=1;i<=banyakemot;i++){
		arrayemot[i]="emot"+i.toString();
	}
	var emotnya=document.getElementById(arrayemot[indeks-1]);
	if(emotnya.style.display==&quot;none&quot;){
		emotnya.style.display = &quot;inline&quot;;
		emotnya.focus();
		emotnya.select();
	}else{
		emotnya.style.display = &quot;none&quot;;
	}
};
$(document).ready(function(){
	var $wrapper = $('#comment-holder');
	$wrapper.find('.comment-content').html(function (index, text) {
		this.innerHTML = text.replace(':aha', "<img src='http://emoticoner.com/files/emoticons/onion-head/ahaaah-onion-head-emoticon.gif?1292862489&#39'/>");
		this.innerHTML = text.replace(':terpana', "<img src='http://emoticoner.com/files/emoticons/onion-head/admire-onion-head-emoticon.gif?1292862486'>");
	});
	$('.comment-form').find('p').html(function (index,text){
		this.innerHTML=text.replace('[tempat-emot]',"<div style='text-align:center'><img src='http://emoticoner.com/files/emoticons/onion-head/admire-onion-head-emoticon.gif?1292862486' onclick='fungsiemot(1)'/><input id='emot1' style='width:100px; display:none;' type='text' value=':terkesima'/><img onclick='fungsiemot(2)' src='http://emoticoner.com/files/emoticons/onion-head/admire2-onion-head-emoticon.gif?1292862489'/><input id='emot2' style='width:100px; display:none;' type='text' value=':terpana'/><img onclick='fungsiemot(3)' src='http://emoticoner.com/files/emoticons/onion-head/ahaaah-onion-head-emoticon.gif?1292862489'/><input id='emot3' style='width:50px; display:none;' type='text' value=':aha'/><img onclick='fungsiemot(4) src='http://emoticoner.com/files/emoticons/onion-head/angel1-onion-head-emoticon.gif?1292862489'/><input id='emot4' style='width:50px; display:none;' type='text' value=':angel'/></div>");
	});
});
