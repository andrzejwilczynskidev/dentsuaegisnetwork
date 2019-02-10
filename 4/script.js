const delay = ms => new Promise(_ => setTimeout(_, ms));

apiGetText("https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json", "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json");

function apiGetText(){
    var args = arguments;
    var temp = [];

    for(let i=0; i<args.length; i++){
        fetch(args[i])
			.then(resp => resp.json())
			.then(resp => {		
				resp.forEach(item => temp.push(item));
			});
    } 

	delay(500).then(() => console.log(temp.join(" "))); 
};