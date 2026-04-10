// ========================================
// OPTIMIZACIONES DE RENDIMIENTO
// ========================================

// 1. Throttling function para limitar la frecuencia de ejecución
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 2. RequestAnimationFrame para suavizar animaciones
let ticking = false;

function updateHeader() {
    const header = document.getElementById('header');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    ticking = false;
}

// 3. Función optimizada de scroll con requestAnimationFrame
function handleScroll() {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}

// 4. Event listener optimizado con throttling y passive
window.addEventListener('scroll', throttle(handleScroll, 16), { passive: true });

// ========================================
// FUNCIONALIDAD DEL MENÚ MÓVIL
// ========================================

// Cache de elementos DOM para evitar búsquedas repetidas
const menuToggle = document.getElementById('menuToggle');
const navItems = document.getElementById('navItems');
const menuOverlay = document.getElementById('menuOverlay');
const body = document.body;

// Estado del menú
let isMenuOpen = false;

function openMenu() {
    if (isMenuOpen) return; // Evitar ejecuciones múltiples
    
    navItems.classList.add('active');
    menuOverlay.classList.add('active');
    body.style.overflow = 'hidden';
    isMenuOpen = true;
}

function closeMenu() {
    if (!isMenuOpen) return; // Evitar ejecuciones múltiples
    
    navItems.classList.remove('active');
    menuOverlay.classList.remove('active');
    body.style.overflow = 'auto';
    isMenuOpen = false;
}

// Event listeners optimizados
if (menuToggle) {
    menuToggle.addEventListener('click', openMenu, { passive: true });
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu, { passive: true });
}

// Cerrar menú con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
    }
}, { passive: true });

// Cerrar menú al hacer clic en el botón X
if (navItems) {
    navItems.addEventListener('click', function(e) {
        // Detectar click en el pseudo-elemento ::before (botón X)
        const rect = navItems.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Área aproximada del botón X (esquina superior derecha)
        if (clickX > rect.width - 60 && clickY < 60) {
            closeMenu();
        }
    }, { passive: true });
}

// ========================================
// OPTIMIZACIONES ADICIONALES
// ========================================

// Precargar elementos críticos cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    // Pre-calcular posiciones si es necesario
    const header = document.getElementById('header');
    if (header) {
        // Forzar un reflow inicial para evitar layout shifts
        header.offsetHeight;
    }
});

// Optimización para resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recalcular posiciones si es necesario
        if (isMenuOpen && window.innerWidth > 768) {
            closeMenu(); // Cerrar menú móvil si se cambia a desktop
        }
    }, 250);
}, { passive: true });

// Desactivar transiciones durante el scroll para mejor rendimiento
let scrollTimeout;
const headerElement = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (headerElement) {
        headerElement.style.pointerEvents = 'none';
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            headerElement.style.pointerEvents = 'auto';
        }, 150);
    }
}, { passive: true });

