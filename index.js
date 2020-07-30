
  
  
  function chinko_maker(event)
  {
    event.preventDefault();
    var sourceText= document.getElementById('your_name').value;
    
  doGet(sourceText);
    
}

  function doGet(sourceText) {
 
   
    var sourceLang = 'auto';
    var targetLang = 'zh-Hans';
 
    /* Option 2 */ 
    
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
      
    
    $.get( url, function( data ) {
      // var result = JSON.parse(data);
       var result =  data;
    var  translatedText = result[0][0][0];
      alert(translatedText);
 // $( ".result" ).html( data );
   
});
   
}
  
  

