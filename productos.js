// Configuración de imágenes por producto
const productos = {
    'gabardina': [
        'IMG/GABARDINA 01.jpg',
        'IMG/GABARDINA 02.jpg',
        'IMG/GABARDINA 03.jpg',
        'IMG/GABARDINA 04.jpg'
    ],
    'fotos': [
        'IMG/FOTOS 01.jpg',
        'IMG/FOTOS 02.jpg',
        'IMG/FOTOS 03.jpg',
        'IMG/FOTOS 04.jpg'
    ],
    'consola': [
        'IMG/CONSOLA 01.jpg',
        'IMG/CONSOLA 02.jpg',
        'IMG/CONSOLA 03.jpg',
        'IMG/CONSOLA 04.jpg'
    ],
    'pistola': [
        'IMG/PISTOLA 01.jpg',
        'IMG/PISTOLA 02.jpg',
        'IMG/PISTOLA 03.jpg',
        'IMG/PISTOLA 04.jpg'
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    const popupNewsletter = document.getElementById('popup-newsletter');
    const newsletterForm = document.querySelector('.newsletter-form');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const productos = document.querySelectorAll('.producto');
    let currentImageIndex = 0;
    const images = [];

    productos.forEach(producto => {
        const img = producto.querySelector('img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt
            });
        }
    });

    function showImage(index) {
        if (images.length === 0) return;
        
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }
        
        currentImageIndex = index;
        lightboxImage.src = images[index].src;
        lightboxImage.alt = images[index].alt;
        lightbox.classList.add('active');
    }

    productos.forEach((producto, index) => {
        producto.addEventListener('click', () => {
            showImage(index);
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    prevButton.addEventListener('click', () => {
        showImage(currentImageIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showImage(currentImageIndex + 1);
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            } else if (e.key === 'ArrowLeft') {
                showImage(currentImageIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentImageIndex + 1);
            }
        }
    });

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                popupNewsletter.classList.add('popup-visible');
                setTimeout(() => {
                    popupNewsletter.classList.remove('popup-visible');
                }, 3000);
                this.reset();
            }
        });
    }
}); 