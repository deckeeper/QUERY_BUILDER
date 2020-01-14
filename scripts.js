document.getElementById("create").addEventListener("click", function(e){

 e.preventDefault(); 
  const seperator = document.getElementById('seperator').value;
 if(seperator=='0'){
  	let values = document.getElementById("option_values").value.split("\n");
  }
  else{
  	let values = document.getElementById("option_values").value.split(seperator);
  }
  let text = '';
 

for (let i =0; i < values.length; i++) {
	if (i==0){
		let select = '<select class="'+document.getElementById('select_class').value+'" id="'+document.getElementById('select_id').value+'">';
		text = text + select +"\n";
	}
	let option = '<option value="'+values[i]+'">'+values[i]+'</option>'
	text = text + option + "\n";

	if (i==values.length-1){
		let select = '</select>';
		text = text + select + "\n";
	}
}
document.getElementById('result').value=text;

});



