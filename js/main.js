
window.addEventListener("DOMContentLoaded", function (event) {
    let isOpen = false;
    const menu = document.querySelector('#mobile-sub-menu');
    const menuOpenButton = document.querySelector("#mobile-menu-button");

    //  these are the names of the id for the button and the settings menu.
    const settingsMenu = document.querySelector("#mobile-settings-menu");
    const settingsButton = document.querySelector("#mobile-settings-button");


    // Code to open and close the settings menu.
    // settingsButton.onclick = () => {
    //     settingsMenu.classList.toggle('hidden');
    // }

    // settingsMenu.onmouseleave = () => {
    //     settingsMenu.classList.toggle('hidden');
    // }
    menuOpenButton.onmouseleave = () => {
        isOpen = !isOpen;
        TweenMax.to(menu, 0.8, { top: "-55vh", ease: Power4.easeOut });
    }

    /*
    https://greensock.com/docs/Easing/Bounce
    easing graph
    */

    //  code to animate mobile navigation menu.
    menuOpenButton.onclick = (e) => {
        isOpen = !isOpen;
        if (!isOpen) {
            TweenMax.to(menu, 0.8, { top: "-55vh", ease: Power4.easeOut });
        } else {
            TweenMax.to(menu, 0.5, { top: "48px", ease: Power4.easeOut });
        }
    }



});
