$(document).ready(function() {
    // Wrap each word in the heading with a span for animation
    const animateHeading = function() {
        const heading = $('.main-heading');
        const text = heading.text();
        const words = text.split(' ');
        let newHTML = '';
        words.forEach(word => {
            newHTML += `<span class="animate-word">${word}</span> `;
        });
        
        heading.html(newHTML);
    };
    
    // Call the function to initialize the animation
    animateHeading();
    
    // Add a subtle floating effect to the heading
    setTimeout(function() {
        $('.main-heading').css({
            'transition': 'transform 6s ease-in-out',
            'animation': 'float 6s ease-in-out infinite'
        });
        
        // Add CSS for floating animation
        $('<style>')
            .prop('type', 'text/css')
            .html(`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `)
            .appendTo('head');
    }, 2000); // Wait for initial animation to complete
    
    // Add 3D tilt effect on mouse movement for the hero section
    $('.portfolio-hero').mousemove(function(e) {
        const hero = $(this);
        const heroWidth = hero.width();
        const heroHeight = hero.height();
        
        // Calculate mouse position relative to the center
        const offsetX = (e.pageX - hero.offset().left) - (heroWidth / 2);
        const offsetY = (e.pageY - hero.offset().top) - (heroHeight / 2);
        
        // Subtle rotation based on mouse position (max 3 degrees)
        const maxRotation = 3;
        const rotateY = (offsetX / (heroWidth / 2)) * maxRotation;
        const rotateX = -(offsetY / (heroHeight / 2)) * maxRotation;
        
        // Apply the transform to the heading
        $('.main-heading').css({
            'transform': `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0)`,
            'transition': 'transform 0.1s linear'
        });
    });
    
    // Reset on mouse leave
    $('.portfolio-hero').mouseleave(function() {
        $('.main-heading').css({
            'transform': 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
            'transition': 'transform 0.5s ease'
        });
    });
    
    // Add a typing effect to the "crafting solutions" highlight after it appears
    setTimeout(function() {
        const highlight = $('.highlight');
        const originalText = highlight.text();
        
        // Clear the text for typing effect
        highlight.text('');
        
        // Add typing class for cursor effect
        highlight.addClass('typing');
        
        // Add CSS for typing cursor
        $('<style>')
            .prop('type', 'text/css')
            .html(`
                .typing {
                    position: relative;
                }
                .typing::after {
                    content: '|';
                    position: absolute;
                    right: -4px;
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `)
            .appendTo('head');
        
        // Type the text character by character
        let charIndex = 0;
        const typeInterval = setInterval(function() {
            if (charIndex < originalText.length) {
                highlight.text(highlight.text() + originalText.charAt(charIndex));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                // Remove typing cursor effect when done
                setTimeout(function() {
                    highlight.removeClass('typing');
                }, 1000);
                
                // Add pulse effect
                setTimeout(function() {
                    highlight.addClass('pulse');
                }, 1500);
            }
        }, 80); // Typing speed
    }, 2500); // Delay before typing starts
    
    // Animate portfolio items when scrolling
    $(window).scroll(function() {
        $('.portfolio-item').each(function() {
            const itemTop = $(this).offset().top;
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            
            if (itemTop < scrollTop + windowHeight - 100) {
                const delay = $(this).index() * 0.15; // Staggered effect
                $(this).css({
                    'animation': 'fadeInUp 0.6s forwards',
                    'animation-delay': delay + 's'
                });
                $(this).addClass('show');
            }
        });
        
        // Back to top button visibility
        if ($(window).scrollTop() > 300) {
            $('.back-to-top').addClass('visible');
        } else {
            $('.back-to-top').removeClass('visible');
        }
    });
    
    // Smooth scroll to top
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
});



