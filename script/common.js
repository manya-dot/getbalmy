// Mobile menu functionality
const mobileThreeDot = document.getElementById('three-dot');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.getElementById('close-icon');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    mobileMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
}

if (mobileThreeDot) {
    mobileThreeDot.addEventListener('click', function (e) {
        e.stopPropagation();
        openMenu();
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
        // Only hide if screen width is below 991px
        if (window.innerWidth <= 991) {
            filterSidebar.style.display = 'none';
        }
    }
});

// Handle window resize
window.addEventListener('resize', function () {
    if (window.innerWidth > 991) {
        filterSidebar.style.display = 'block';
    } else {
        filterSidebar.style.display = 'none';
    }
});

// Initialize filter sidebar visibility
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 991) {
        filterSidebar.style.display = 'block';
    } else {
        filterSidebar.style.display = 'none';
    }
});