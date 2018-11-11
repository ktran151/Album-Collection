function makeForms(labelText, id){
	const main = document.querySelector('main');
	const input = document.createElement('input');
	const label = document.createElement('label')
	label.innerText = labelText
	label.id = id;
	input.setAttribute('type', 'text');
	label.appendChild(input)
	main.appendChild(label)
}

function removeChildren(element){
	while (element.hasChildNodes()) {
		element.lastChild.remove();
	}
}



function makeArtistMain(jsonArray){
	
	const main = document.querySelector('main')
	
	removeChildren(main);
	jsonArray.forEach(elem => {
		const div = document.createElement('div');
		div.classList.add('main_content')
		div.innerHTML = `
			<h2 id="${elem.name}" data-artistId="${elem.id}">
				${elem.name}
			</h2>
		`
		addMakeMain(div, elem.albums, makeAlbumMain, elem.name) 
		main.appendChild(div)
	})

	const button = document.createElement('button')
	button.innerText = 'Add Artist';
	button.addEventListener('click', () => {
		makeForms('Artist Name:', 'artistName');
		makeForms('Artist Image Location:', 'artistUrl')
		const submitButton = document.createElement('button')
		submitButton.innerText = 'Submit';
		main.appendChild(submitButton);
		button.remove();
	})
	main.appendChild(button)
}

function makeAlbumMain(jsonArray, parentName){
	const main = document.querySelector('main')
	console.log(main.childNodes);
	removeChildren(main);
	main.childNodes.forEach(elem => elem.remove())

	jsonArray.forEach(elem => {
		const div = document.createElement('div');
		div.classList.add('main_content')
		div.innerHTML += `
			<h2 id="${elem.name}" data-albumId="${elem.id}">
				${elem.name}
			</h2>
		`
		addMakeMain(div, elem.songs, makeSongMain, elem.name)
		main.appendChild(div)
	})
	const button = document.createElement('button')
	button.innerText = 'Add Album';
	button.addEventListener('click', () => {
		makeForms('Album Name:', 'albumName');
		makeForms('Record Label:', 'recordLabel');
		makeForms('Image Location:', 'albumUrl')
		const submitButton = document.createElement('button')
		submitButton.innerText = 'Submit';
		main.appendChild(submitButton);
		button.remove();
	})
	main.appendChild(button)
}

function makeSongMain(jsonArray, parentName){
	console.log(jsonArray)
	const main = document.querySelector('main')
	removeChildren(main);

	jsonArray.forEach(elem => {
		const div = document.createElement('div');
		div.innerHTML += `
			<h2 id="${elem.name}" data-songId="${elem.id}">
				${elem.name}
			</h2>
		`
		main.appendChild(div)
	})
	const button = document.createElement('button')
	button.innerText = 'Add Song';
	button.addEventListener('click', () => {
		makeForms('Song Name:', 'songName');
		makeForms('Run Time:', 'songLength');
		const submitButton = document.createElement('button')
		submitButton.innerText = 'Submit';
		main.appendChild(submitButton);
		submitButton.addEventListener('click', function(){
			const songName = document.querySelector('#songName')
			const songLength = document.querySelector('#songName')
			fetch(`api/song/add`, {
				method: 'post',
				body: JSON.stringify({
					name: songName.value;
					length: songLength.value;
					album: parentName;
				})
			})
			makeSongMain(jsonArray)
		})
		button.remove();
	})
	main.appendChild(button)
}
function addMakeMain(div, array, makeMain, parentName){
	div.addEventListener('click', () => {makeMain(array, parentName)});
}

module.exports = {
	makeArtistMain,
	makeAlbumMain,
	makeSongMain,
	makeForms
}