document.getElementById("create").addEventListener("click", function(e){

 e.preventDefault(); 
  const seperator = document.getElementById('seperator').value;
 if(seperator=='0'){
  	var values = document.getElementById("option_values").value.split("\n");
  }
  else{
  	var values = document.getElementById("option_values").value.split(seperator);
  }
  var text = '';
 

for (var i =0; i < values.length; i++) {
	if (i==0){
		var select = '<select class="'+document.getElementById('select_class').value+'" id="'+document.getElementById('select_id').value+'">';
		text = text + select +"\n";
	}
	var option = '<option value="'+values[i]+'">'+values[i]+'</option>'
	text = text + option + "\n";

	if (i==values.length-1){
		var select = '</select>';
		text = text + select + "\n";
	}
}
document.getElementById('result').value=text;

});



