(function () {
    const slides = document.querySelectorAll('#slider .slide');
    let current = 0;
    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.style.display = i === idx ? 'block' : 'none';
        });
    }
    let prevSlide = document.getElementById('prevSlide');
    if (prevSlide) {
        prevSlide.addEventListener('click', function () {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });
    }
    let nextSlide = document.getElementById('nextSlide');
    if (nextSlide) {
        nextSlide.addEventListener('click', function () {
            current = (current + 1) % slides.length;
            showSlide(current);
        });
    }
    let slider = document.getElementById('slider');
    if (slider) {
        let autoSlide = setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 3000);
        // Pause on mouse enter
        document.getElementById('slider').addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });
        // Resume on mouse leave
        document.getElementById('slider').addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                current = (current + 1) % slides.length;
                showSlide(current);
            }, 4000);
        });
        // Initial display
        showSlide(current);
    }
    

    document.addEventListener('DOMContentLoaded', () => {
        const backToTopBtn = document.getElementById('backToTop')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block'
            } else {
                backToTopBtn.style.display = 'none'
            }
        })
        document.getElementById('backToTop').addEventListener('click', () => {
            scrollToTop(1000)
        })

        function scrollToTop(duration) {
            const start = window.scrollY
            const startTime = performance.now()

            function animate(currentTime) {
                const elapsed = currentTime - startTime
                const progress = Math.min(elapsed / duration, 1)
                const ease = 1 - Math.pow(1 - progress, 3)
                window.scrollTo(0, start * (1 - ease))
                if (elapsed < duration) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    });

})();
function openLookupOrder() {
    $.ajax({
        url: '/Taiboxnhapmail',
        type: 'GET',
        success: function (data) {
            $('#lookupBoxContainer').html(data);
            $('#lookupOverlay').fadeIn(200);
            $('#lookupBoxContainer').animate({
                top: '150px'
            }, 400);
        },
        error: function () {
            alert("Không thể tải form tra cứu.");
        }
    });
}
function closeLookupBox() {
    $('#lookupBoxContainer').animate({
        top: '-500px'
    }, 300, function () {

        $('#lookupOverlay').fadeOut(200);
        $('#lookupBoxContainer').html('');

    });

}