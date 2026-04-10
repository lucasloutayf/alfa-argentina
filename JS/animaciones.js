const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-element');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

/* optimizar animaciones */

/**
 * SCRIPT OPTIMIZADO PARA ANIMACIONES DE SLIDE
 * ============================================
 * Versión mejorada con optimizaciones de rendimiento y funcionalidades adicionales
 */

class OptimizedSlideAnimations {
    constructor(options = {}) {
        // Configuración por defecto
        this.config = {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px 0px -50px 0px',
            animationDuration: options.animationDuration || 800,
            easing: options.easing || 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            debug: options.debug || false,
            respectPrefersReducedMotion: options.respectPrefersReducedMotion !== false,
            once: options.once !== false, // Por defecto anima solo una vez
            stagger: options.stagger || 0, // Delay entre animaciones múltiples
            classes: {
                element: options.elementClass || 'animate-element',
                animated: options.animatedClass || 'animate',
                ...options.classes
            }
        };

        this.observer = null;
        this.animatedElements = new Set();
        this.isInitialized = false;
        this.performanceMetrics = {
            totalElements: 0,
            animatedElements: 0,
            averageAnimationTime: 0
        };

        this.init();
    }

    init() {
        if (this.isInitialized) return;

        // Verificar si el usuario prefiere movimiento reducido
        if (this.config.respectPrefersReducedMotion && this.prefersReducedMotion()) {
            this.disableAnimations();
            return;
        }

        // Crear estilos CSS dinámicamente si no existen
        this.injectOptimizedCSS();

        // Inicializar observer con configuración optimizada
        this.createObserver();

        // Observar elementos existentes
        this.observeElements();

        // Configurar event listeners
        this.setupEventListeners();

        this.isInitialized = true;
        this.log('Sistema de animaciones inicializado correctamente');
    }

    createObserver() {
        const observerOptions = {
            threshold: this.config.threshold,
            rootMargin: this.config.rootMargin
        };

        this.observer = new IntersectionObserver((entries) => {
            // Usar requestAnimationFrame para optimizar las animaciones
            requestAnimationFrame(() => {
                this.handleIntersections(entries);
            });
        }, observerOptions);
    }

    handleIntersections(entries) {
        let delay = 0;

        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                const startTime = performance.now();
                
                // Aplicar stagger si está configurado
                if (this.config.stagger > 0) {
                    setTimeout(() => {
                        this.animateElement(entry.target, startTime);
                    }, delay);
                    delay += this.config.stagger;
                } else {
                    this.animateElement(entry.target, startTime);
                }
            }
        });
    }

    animateElement(element, startTime) {
        // Verificar que el elemento sigue siendo válido
        if (!element || !document.contains(element)) return;

        // Añadir clase de animación
        element.classList.add(this.config.classes.animated);
        
        // Marcar como animado
        this.animatedElements.add(element);
        
        // Dejar de observar si es configurado para animar solo una vez
        if (this.config.once) {
            this.observer.unobserve(element);
        }

        // Métricas de rendimiento
        this.performanceMetrics.animatedElements++;
        
        // Listener para cuando termine la animación
        const transitionEndHandler = (e) => {
            if (e.target === element) {
                const endTime = performance.now();
                this.updatePerformanceMetrics(endTime - startTime);
                element.removeEventListener('transitionend', transitionEndHandler);
                
                // Disparar evento personalizado
                this.dispatchCustomEvent(element, 'slideAnimationComplete');
            }
        };

        element.addEventListener('transitionend', transitionEndHandler);
        
        this.log(`Elemento animado: ${element.className}`);
    }

    observeElements() {
        const elements = document.querySelectorAll(`.${this.config.classes.element}`);
        this.performanceMetrics.totalElements = elements.length;

        elements.forEach(element => {
            // Optimización: solo observar elementos que no están ya animados
            if (!this.animatedElements.has(element)) {
                this.observer.observe(element);
            }
        });

        this.log(`Observando ${elements.length} elementos`);
    }

    injectOptimizedCSS() {
        const styleId = 'optimized-slide-animations';
        
        // No inyectar si ya existe
        if (document.getElementById(styleId)) return;

        const css = `
            .${this.config.classes.element} {
                opacity: 0;
                transition: all ${this.config.animationDuration}ms ${this.config.easing};
                will-change: transform, opacity;
                backface-visibility: hidden;
                transform: translateZ(0); /* Forzar aceleración por hardware */
            }

            .slide-left {
                transform: translateX(-100px) translateZ(0);
            }

            .slide-right {
                transform: translateX(100px) translateZ(0);
            }

            .slide-up {
                transform: translateY(-100px) translateZ(0);
            }

            .slide-down {
                transform: translateY(100px) translateZ(0);
            }

            .${this.config.classes.element}.${this.config.classes.animated} {
                opacity: 1;
                transform: translateX(0) translateY(0) translateZ(0);
            }

            /* Optimización para usuarios que prefieren movimiento reducido */
            @media (prefers-reduced-motion: reduce) {
                .${this.config.classes.element} {
                    transition: none !important;
                    transform: none !important;
                    opacity: 1 !important;
                }
            }

            /* Optimizaciones para dispositivos de baja potencia */
            @media (max-width: 768px) and (max-resolution: 150dpi) {
                .${this.config.classes.element} {
                    transition-duration: ${this.config.animationDuration * 0.7}ms;
                }
            }
        `;

        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = css;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        // Reobservar elementos cuando se añadan dinámicamente
        const mutationObserver = new MutationObserver((mutations) => {
            let hasNewElements = false;
            
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Element node
                        if (node.classList?.contains(this.config.classes.element) ||
                            node.querySelector?.(`.${this.config.classes.element}`)) {
                            hasNewElements = true;
                        }
                    }
                });
            });

            if (hasNewElements) {
                // Debounce para evitar múltiples llamadas
                clearTimeout(this.reobserveTimeout);
                this.reobserveTimeout = setTimeout(() => {
                    this.observeElements();
                }, 100);
            }
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Pausar animaciones cuando la pestaña no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }

    // Métodos públicos para controlar las animaciones
    animateAll() {
        document.querySelectorAll(`.${this.config.classes.element}`).forEach(element => {
            if (!this.animatedElements.has(element)) {
                this.animateElement(element, performance.now());
            }
        });
    }

    resetAll() {
        document.querySelectorAll(`.${this.config.classes.element}`).forEach(element => {
            element.classList.remove(this.config.classes.animated);
            this.observer.observe(element);
        });
        this.animatedElements.clear();
        this.log('Todas las animaciones han sido reseteadas');
    }

    pause() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    resume() {
        if (this.observer) {
            this.observeElements();
        }
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.animatedElements.clear();
        this.isInitialized = false;
    }

    // Métodos utilitarios
    prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    disableAnimations() {
        document.querySelectorAll(`.${this.config.classes.element}`).forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.transition = 'none';
        });
        this.log('Animaciones deshabilitadas (prefers-reduced-motion)');
    }

    updatePerformanceMetrics(animationTime) {
        const current = this.performanceMetrics.averageAnimationTime;
        const count = this.performanceMetrics.animatedElements;
        this.performanceMetrics.averageAnimationTime = 
            (current * (count - 1) + animationTime) / count;
    }

    getPerformanceMetrics() {
        return { ...this.performanceMetrics };
    }

    dispatchCustomEvent(element, eventName, detail = {}) {
        const event = new CustomEvent(eventName, {
            detail: { element, ...detail },
            bubbles: true
        });
        element.dispatchEvent(event);
    }

    log(message) {
        if (this.config.debug) {
            console.log(`[SlideAnimations] ${message}`);
        }
    }
}

// Uso básico - Se inicializa automáticamente
const slideAnimations = new OptimizedSlideAnimations({
    debug: false, // Cambiar a true para ver logs
    stagger: 100, // 100ms de delay entre animaciones múltiples
    animationDuration: 800,
    once: true
});

// Funciones globales para compatibilidad
window.slideAnimations = slideAnimations;

// Event listeners para funciones adicionales
document.addEventListener('slideAnimationComplete', (e) => {
    // Puedes añadir lógica adicional aquí cuando una animación complete
    console.log('Animación completada:', e.detail.element);
});

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OptimizedSlideAnimations;
}
