// Mobile Nav

const mobileNavOpen = document.querySelector("#open-mobile-nav")
const mobileNavClose = document.querySelector("#close-mobile-nav")
const mobileNav = document.querySelector("#mobile-nav")

mobileNavOpen.onclick = function () {
	mobileNav.classList.add("mobile-nav-wrapper--open")
}

mobileNavClose.onclick = function () {
	mobileNav.classList.add("mobile-nav-wrapper--close")

	setTimeout(() => {
		mobileNav.classList.remove("mobile-nav-wrapper--open")
		mobileNav.classList.remove("mobile-nav-wrapper--close")
	}, 250)
}
