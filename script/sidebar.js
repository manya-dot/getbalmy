// Large device sidebar functionality
const largeThreeDot = document.getElementById('large-three-dot');
const largeSidebar = document.getElementById('large-sidebar');
const largeSidebarOverlay = document.getElementById('large-sidebar-overlay');
const closeLargeSidebar = document.getElementById('close-large-sidebar');

if (largeThreeDot) {
    largeThreeDot.addEventListener('click', function (e) {
        e.stopPropagation();
        if (largeSidebarOverlay && largeSidebar) {
            largeSidebarOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                largeSidebar.classList.add('active');
            }, 10);
        }
    });
}

// Close large sidebar
if (closeLargeSidebar) {
    closeLargeSidebar.addEventListener('click', function () {
        closeLargeSidebarFunc();
    });
}

if (largeSidebarOverlay) {
    largeSidebarOverlay.addEventListener('click', function (e) {
        if (e.target === this) {
            closeLargeSidebarFunc();
        }
    });
}

function closeLargeSidebarFunc() {
    if (largeSidebar && largeSidebarOverlay) {
        largeSidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            largeSidebarOverlay.style.display = 'none';
        }, 300);
    }
}