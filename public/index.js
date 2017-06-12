var allPostElems = [];

// Shows modal when "upload" link is clicked
function showCreatePostModal() {

	var modalBackdrop = document.getElementById('modal-backdrop');
	var createPostModal = document.getElementById('create-post-modal');

	modalBackdrop.classList.remove('hidden');
	createPostModal.classList.remove('hidden');
}

// Closes modal, clears inputted values
function closeCreatePostModal() {
	console.log("In closeCreatePostModal");
	
	var modalBackdrop = document.getElementById('modal-backdrop');
	var createPostModal = document.getElementById('create-post-modal');

	modalBackdrop.classList.add('hidden');
	createPostModal.classList.add('hidden');

	// This function is defined below
	clearPostInputValues();
}

// Clears values inputted into modal
function clearPostInputValues() {

	var postInputElems = document.getElementsByClassName('post-input-element');
	for (var i = 0; i < postInputElems.length; i++) {
		var input = postInputElems[i].querySelector('input, textarea');
		input.value = '';
	}
}

// Creates a new post, adding it to the json file and the HTML
function generateNewPostElem(postTitle, postAuthor, postCategory, postLocation, postPrice, postBody, postPhone, postEmail, postImage1, postImage2, postImage3) {
	
	var postUrl = '/upload/';
	
	var postRequest = new XMLHttpRequest();
	postRequest.open('POST', postUrl);
	postRequest.setRequestHeader('Content-Type', 'application/json');
	
	/*
	postRequest.addEventListener('load', function (event) {
		var error;
		if(event.target.status !== 200) {
			error = event.target.response;
		}
		callback(error);
	});
	*/
	
	console.log("Before postRequest.send");
	
	postRequest.send(JSON.stringify({
		category: postCategory,
		location: postLocation,
		title: postTitle,
		body: postBody,
		author: postAuthor,
		phone: postPhone,
		email: postEmail,
		price: postPrice,
		image1: postImage1,
		image2: postImage2,
		image3: postImage3
	}));
	
	console.log("After postRequest.send");
	
	//return postThumbTemplate(postDataTemplate);
}

function insertNewPost() {

	var postTitle = document.getElementById('post-title-input').value;
	var postAuthor = document.getElementById('post-author-input').value;
	var postCategory = document.getElementById('post-category-input').value;
	var postLocation = document.getElementById('post-location-input').value;
	var postPrice = document.getElementById('post-price-input').value;
	var postBody = document.getElementById('post-body-input').value;
	var postPhone = document.getElementById('post-phone-input').value;
	var postEmail = document.getElementById('post-email-input').value;
	var postImage1 = document.getElementById('post-image1-input').value;
	var postImage2 = document.getElementById('post-image2-input').value;
	var postImage3 = document.getElementById('post-image3-input').value;
	
	if (postTitle && postCategory && postPrice) {
		console.log("In if statement");
		var newPostElem = generateNewPostElem(postTitle, postAuthor, postCategory, postLocation, postPrice, postBody, postPhone, postEmail, postImage1, postImage2, postImage3);
		console.log("After generateNewPostElem");
		var postContainer = document.querySelector('.post-container');
		postContainer.insertAdjacentHTML('beforeend', newPostElem);
		console.log("Inserted into adjacent HTML");
		allPostElems.push(newPostElem);
		console.log("Pushed into allPostElems");
		closeCreatePostModal();
		
		//location.reload();
	} else {
		alert('You must specify, at minimum, the post title, category, and price!');
	}
	
	console.log("End of insertNewPost");
}

function doPostSearch() {
	var searchQuery = document.getElementById('navbar-search-input').value;
	searchQuery = searchQuery ? searchQuery.trim().toLowerCase() : '';

	var postContainer = document.querySelector('.post-container');
	while (postContainer.lastChild) {
		postContainer.removeChild(postContainer.lastChild);
	}

	allPostElems.forEach(function (postElem) {
		if (!searchQuery || postElem.textContent.toLowerCase().indexOf(searchQuery) !== -1) {
			postContainer.appendChild(postElem);
		}
	});
}

window.addEventListener('DOMContentLoaded', function () {

	console.log("Before event listeners");

	var postElemsCollection = document.getElementsByClassName('post-thumbnail');
	for (var i = 0; i < postElemsCollection.length; i++) {
		console.log("pushed to allPostElems: ", i);
		allPostElems.push(postElemsCollection[i]);
	}

	var createPostButton = document.getElementById('create-post-button');
	createPostButton.addEventListener('click', showCreatePostModal);

	var modalCloseButton = document.querySelector('#create-post-modal .modal-close-button');
	modalCloseButton.addEventListener('click', closeCreatePostModal);

	var modalCancelButton = document.querySelector('#create-post-modal .modal-cancel-button');
	modalCancelButton.addEventListener('click', closeCreatePostModal);

	var modalAcceptButton = document.querySelector('#create-post-modal .modal-accept-button');
	modalAcceptButton.addEventListener('click', insertNewPost);

	var searchButton = document.getElementById('navbar-search-button');
	searchButton.addEventListener('click', doPostSearch);

	var searchInput = document.getElementById('navbar-search-input');
	searchInput.addEventListener('input', doPostSearch);

	console.log("After event listeners");
});