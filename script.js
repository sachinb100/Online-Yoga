
$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();

    $('.scroll-section').each(function () {

        let sectionTop = $(this).offset().top;
        let sectionHeight = $(this).outerHeight();
        let winHeight = $(window).height();

        // Check if section is in viewport
        if (scrollTop + winHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {

            let progress = (scrollTop + winHeight - sectionTop) / (sectionHeight + winHeight);

            // Animate text elements automatically
            $(this).find('h1,h2,h3,h4,h5,h6,p,li').css({
                transform: 'translateY(' + (1 - progress) * 30 + 'px)',
                opacity: progress
            });

            // Animate images automatically
            $(this).find('img').css({
                transform: 'translateY(' + (1 - progress) * 50 + 'px)'
            });
        }
    });
});


const cursorDot = document.querySelector('.cursor-dot');

    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Button click color change
    document.querySelectorAll('button, .btn').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
        this.classList.add('active-btn');
    });

    btn.addEventListener('mouseleave', function () {
        this.classList.remove('active-btn');
    });
        btn.addEventListener('mousemove', function () {
            // remove active from all buttons
            document.querySelectorAll('button, .btn')
                .forEach(b => b.classList.remove('active-btn'));

            // add to clicked button
            this.classList.add('active-btn');
        });
    });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); 
    }
  });
}, { threshold: 0.2 }); 


document.querySelectorAll('.hidden-left, .hidden-top,.hidden-right,.hidden-bottom').forEach((el) => observer.observe(el));
