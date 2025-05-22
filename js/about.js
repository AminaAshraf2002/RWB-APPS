$(document).ready(function() {
    // Make Mission and Vision sections visible by default
    $('.mission-container').addClass('active');
    $('.vision-container').addClass('active');
    
    // Animate story section elements when they come into view
    function animateStorySection() {
        const storyContent = $('.story-content');
        const topLeftImage = $('.image-top-left');
        const midLeftImage = $('.image-mid-left');
        const bottomLeftImage = $('.image-bottom-left');
        const rightImage = $('.image-right');
        const blueRect = $('.rectangle-blue');
        const blackRect = $('.rectangle-black');
        const scrollIndicator = $('.scroll-indicator');
        
        const storyPos = storyContent.offset().top;
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        if (storyPos < scrollPos + windowHeight - 100) {
            storyContent.addClass('active');
            
            // Staggered animations for images
            setTimeout(function() { topLeftImage.addClass('active'); }, 300);
            setTimeout(function() { midLeftImage.addClass('active'); }, 500);
            setTimeout(function() { bottomLeftImage.addClass('active'); }, 700);
            setTimeout(function() { rightImage.addClass('active'); }, 600);
            
            // Decorative elements
            setTimeout(function() { blueRect.addClass('active'); }, 900);
            setTimeout(function() { blackRect.addClass('active'); }, 1000);
            setTimeout(function() { scrollIndicator.addClass('active'); }, 1200);
        }
    }
    
    // Run on page load
    animateStorySection();
    
    // Run on scroll
    $(window).scroll(function() {
        animateStorySection();
        
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
    
    // Mobile menu toggle
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });
    
    // Make header sticky on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });
    
    // Fix for mega menu positioning
    $('.mega-menu').each(function() {
        const $this = $(this);
        const $parent = $this.parent();
        const parentOffset = $parent.offset().left;
        const windowWidth = $(window).width();
        
        // Center mega menu
        if ($this.hasClass('center-mega-menu')) {
            const megaMenuWidth = $this.width();
            const leftPos = (windowWidth - megaMenuWidth) / 2;
            const leftAdjust = parentOffset - leftPos;
            $this.css('left', -leftAdjust);
        }
    });
});