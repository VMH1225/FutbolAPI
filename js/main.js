const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c37cf4073msh5b79493a8a7b2bep1c454djsn05d4f504c473',
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
};

let video = document.querySelector('.videoDiv')


	
document.querySelector('button').addEventListener('click', playVid)
let choice 
function playVid(){
	choice = document.querySelector('input').value

	console.log(`The value of the input is ${choice}`)
	fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
		if(choice > 0 && choice <= 90){
			video.innerHTML = response[choice - 1].embed
			document.querySelector('.team1').innerHTML = response[choice - 1].side1.name
			document.querySelector('.team2').innerHTML = response[choice - 1].side2.name
		}
		else{
			alert('Invalid Choice')
		}
		
	})
    .catch(err => console.error(err));
	}