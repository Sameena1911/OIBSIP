const home = document.GetElementsbyId('homeid');
const menu = document.GetElementsbyId('menuid');
const offers = document.GetElementsbyId('offerid');
const follow = document.GetElementsbyId('followid');

const homeContainer = document.getElementById('Home');
const menuContainer = document.getElementById('Menu');
const offerContainer = document.getElementById('Offer');
const followContainer = document.getElementById('socialmedia');

menu.onclick = ()=>{
    menu.classList.add('show');
    offers.classList.remove('show');
    home.classList.remove('show');
    follow.classList.remove('show');

    menuContainer.style.display="block";
    homeContainer.style.display="none";
    offerContainer.style.display="none";
    followContainer.style.display="none";
}