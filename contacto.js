document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.getElementById('contactoForm');
    const popupContacto = document.createElement('div');
    popupContacto.id = 'popup-contacto';
    popupContacto.className = 'popup-oculto';
    popupContacto.innerHTML = `
        <div class="popup-contenido">
            <p>Message sent successfully!</p>
        </div>
    `;
    document.body.appendChild(popupContacto);

    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar el popup
            popupContacto.classList.add('popup-visible');
            
            // Ocultar el popup después de 3 segundos
            setTimeout(() => {
                popupContacto.classList.remove('popup-visible');
            }, 3000);
            
            // Limpiar el formulario
            this.reset();
        });
    }
}); 