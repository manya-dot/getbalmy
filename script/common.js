// Mobile menu functionality
const mobileThreeDot = document.getElementById('three-dot');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.getElementById('close-icon');
const menuOverlay = document.getElementById('menu-overlay');

let menuTimeout = null;

function openMenu() {
    mobileMenu.style.visibility = 'visible';
    mobileMenu.style.opacity = '1';
    
    setTimeout(() => {
        mobileMenu.classList.add('active');
    }, 10);
    
    if (menuOverlay) menuOverlay.classList.add('active');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    
    setTimeout(() => {
        mobileMenu.style.visibility = 'hidden';
        mobileMenu.style.opacity = '0';
    }, 300);
    
    if (menuOverlay) menuOverlay.classList.remove('active');
}

if (mobileThreeDot) {
    mobileThreeDot.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!menuTimeout) { 
            openMenu();
        }
    });
}

if (closeIcon) {
    closeIcon.addEventListener('click', function () {
        closeMenu();
    });
}

const filterIcon = document.getElementById('filter-icon');
const filterSidebar = document.getElementById('sidebar');

document.addEventListener('click', function (e) {
    if (filterIcon && filterIcon.contains(e.target)) {
        e.stopPropagation();
        if (filterSidebar.style.display === 'block') {
            filterSidebar.style.display = 'none';
        } else {
            filterSidebar.style.display = 'block';
        }
    } else if (filterSidebar && !filterSidebar.contains(e.target)) {
        if (window.innerWidth <= 991) {
            filterSidebar.style.display = 'none';
        }
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 991) {
        filterSidebar.style.display = 'block';
    } else {
        filterSidebar.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 991) {
        filterSidebar.style.display = 'block';
    } else {
        filterSidebar.style.display = 'none';
    }
});