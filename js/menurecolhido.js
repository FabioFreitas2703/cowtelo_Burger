const $menu = document.querySelector('.menu')
	
	const $btnMenu1 = document.querySelector('.btnMenu1')
	const $btnMenu2 = document.querySelector('.btnMenu2')
	const $btnMenu3 = document.querySelector('.btnMenu3')
	const $btnMenu4 = document.querySelector('.btnMenu4')

	const $btnMenu_Open = document.querySelector('.btnMenu_Open')

	$btnMenu1.addEventListener('click',function() {
		$menu.classList.remove('show')
	})

	$btnMenu2.addEventListener('click',function() {
		$menu.classList.remove('show')
	})

	$btnMenu3.addEventListener('click',function() {
		$menu.classList.remove('show')
	})

	$btnMenu4.addEventListener('click',function() {
		$menu.classList.remove('show')
	})