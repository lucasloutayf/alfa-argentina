// Sistema de validación y envío del formulario
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contacto-form');
            const nameInput = document.getElementById('contacto-name');
            const emailInput = document.getElementById('contacto-email');
            const messageInput = document.getElementById('contacto-message');
            const successMessage = document.getElementById('contacto-success');

            // Función para validar email
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }

            // Función para mostrar error
            function showError(input, errorId, message) {
                const errorElement = document.getElementById(errorId);
                input.classList.add('contacto-error');
                input.classList.remove('contacto-success');
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }

            // Función para mostrar éxito
            function showSuccess(input, errorId) {
                const errorElement = document.getElementById(errorId);
                input.classList.remove('contacto-error');
                input.classList.add('contacto-success');
                errorElement.style.display = 'none';
            }

            // Función para limpiar estados
            function clearStates(input, errorId) {
                const errorElement = document.getElementById(errorId);
                input.classList.remove('contacto-error', 'contacto-success');
                errorElement.style.display = 'none';
            }

            // Validación en tiempo real
            nameInput.addEventListener('input', function() {
                if (this.value.trim().length >= 2) {
                    showSuccess(this, 'contacto-name-error');
                } else if (this.value.trim().length > 0) {
                    showError(this, 'contacto-name-error', 'El nombre debe tener al menos 2 caracteres');
                } else {
                    clearStates(this, 'contacto-name-error');
                }
            });

            emailInput.addEventListener('input', function() {
                if (isValidEmail(this.value)) {
                    showSuccess(this, 'contacto-email-error');
                } else if (this.value.trim().length > 0) {
                    showError(this, 'contacto-email-error', 'Ingresa un email válido');
                } else {
                    clearStates(this, 'contacto-email-error');
                }
            });

            messageInput.addEventListener('input', function() {
                if (this.value.trim().length >= 10) {
                    showSuccess(this, 'contacto-message-error');
                } else if (this.value.trim().length > 0) {
                    showError(this, 'contacto-message-error', 'El mensaje debe tener al menos 10 caracteres');
                } else {
                    clearStates(this, 'contacto-message-error');
                }
            });

            // Manejo del envío del formulario
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                
                // Validar nombre
                if (nameInput.value.trim().length < 2) {
                    showError(nameInput, 'contacto-name-error', 'Por favor, ingresa tu nombre');
                    isValid = false;
                }

                // Validar email
                if (!isValidEmail(emailInput.value)) {
                    showError(emailInput, 'contacto-email-error', 'Por favor, ingresa un email válido');
                    isValid = false;
                }

                // Validar mensaje
                if (messageInput.value.trim().length < 10) {
                    showError(messageInput, 'contacto-message-error', 'Por favor, escribe un mensaje más detallado');
                    isValid = false;
                }

                if (isValid) {
                    // Simulación de envío exitoso
                    // En producción, aquí se haría el envío real con FormSpree o EmailJS
                    
                    const btn = form.querySelector('.contacto-btn');
                    const originalText = btn.innerHTML;
                    
                    // Mostrar estado de carga
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                    btn.disabled = true;
                    
                    // Simular delay de envío
                    setTimeout(function() {
                        // Mostrar mensaje de éxito
                        successMessage.style.display = 'block';
                        
                        // Limpiar formulario
                        form.reset();
                        
                        // Limpiar estados de validación
                        [nameInput, emailInput, messageInput].forEach(input => {
                            clearStates(input, input.id + '-error');
                        });
                        
                        // Restaurar botón
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        
                        // Scroll suave hacia el mensaje de éxito
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        
                        // Ocultar mensaje después de 5 segundos
                        setTimeout(function() {
                            successMessage.style.display = 'none';
                        }, 5000);
                        
                    }, 2000);
                }
            });

            // Efectos adicionales de interacción
            const inputs = document.querySelectorAll('.contacto-input, .contacto-textarea');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateY(-2px)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateY(0)';
                });
            });

            // Animación para los iconos de redes sociales
            const socialLinks = document.querySelectorAll('.contacto-social-link');
            socialLinks.forEach((link, index) => {
                link.style.animationDelay = (index * 0.1) + 's';
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px) rotate(5deg)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) rotate(0deg)';
                });
            });
        });