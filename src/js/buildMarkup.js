// const userContainer = document.querySelector('.user-container')
// const userContainerSingle = document.querySelector('.user-container-single')
// const button = document.querySelector('.submitBtn')

// function userMarkup(user) {
// 	// console.log(user);
// 	const {
// 		// avatar,
// 		// email,
// 		first_name,
// 		id,
// 		last_name
// 	} = user
// 	const card = `
// 	<div class="user-card" data-id=${id}>
// 		${first_name}&nbsp;${last_name}
// 	</div>
// 	`
// 	userContainer.insertAdjacentHTML('beforeend', card)
// 	userContainerSingle.innerHTML = ''
// 	userContainer.classList.add('user-container')
// 	button.disabled = true;
// }

// function singleUserMurkap(user) {
// 	const {
// 		avatar,
// 		email,
// 		first_name,
// 		id,
// 		last_name
// 	} = user
// 	const singleUserCard = `
// 		<div class="single-user-card">
// 			<img src="${avatar}" alt="Photo user #${id}">
// 			<p>${first_name}&nbsp;${last_name}</p>
// 			<a href="mailto:${email}">${email}</a>
// 		</div>
// 		`
// 	userContainerSingle.insertAdjacentHTML('beforeend', singleUserCard)
// 	userContainer.innerHTML = ''
// 	userContainer.classList.remove('user-container')
// 	button.disabled = false;
// }

// export { singleUserMurkap, userMarkup };