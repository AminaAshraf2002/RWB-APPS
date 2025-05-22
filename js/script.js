/* 
const header = document.querySelector('.header');


document.addEventListener('DOMContentLoaded', function() {
   
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Mobile Dropdown Toggle
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Only trigger for mobile view and only if it has dropdown
            if (window.innerWidth <= 768 && this.nextElementSibling) {
                e.preventDefault();
                
                // Toggle the specific dropdown
                const dropdown = this.nextElementSibling;
                
                // First close all other dropdowns
                document.querySelectorAll('.mega-menu, .dropdown').forEach(function(menu) {
                    if (menu !== dropdown) {
                        menu.classList.remove('show');
                    }
                });
                
                // Then toggle the current dropdown
                dropdown.classList.toggle('show');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            hamburger && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Close mobile menu when window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            
            // Hide all mobile dropdown menus
            document.querySelectorAll('.mega-menu, .dropdown').forEach(function(menu) {
                menu.classList.remove('show');
            });
        }
    });
    
    // Position mega menus relative to viewport
    function positionMegaMenus() {
        document.querySelectorAll('.mega-menu').forEach(function(menu) {
            const navItem = menu.closest('.nav-item');
            const navItemRect = navItem.getBoundingClientRect();
            const headerRect = document.querySelector('.header').getBoundingClientRect();
            
            // Set the position for mega menus that should be centered
            if (menu.classList.contains('center-mega-menu')) {
                const windowWidth = window.innerWidth;
                const menuWidth = menu.offsetWidth;
                
                // Center the mega menu
                if (menuWidth > 0) {
                    const leftPos = navItemRect.left + (navItemRect.width / 2) - (menuWidth / 2);
                    const rightEdge = leftPos + menuWidth;
                    
                    // Ensure menu doesn't go off-screen
                    if (leftPos < 0) {
                        menu.style.left = '0';
                        menu.style.right = 'auto';
                    } else if (rightEdge > windowWidth) {
                        menu.style.left = 'auto';
                        menu.style.right = '0';
                    } else {
                        menu.style.left = leftPos + 'px';
                        menu.style.right = 'auto';
                    }
                }
            }
        });
    }
    
    // Position mega menus on hover
    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                positionMegaMenus();
            }
        });
    });
    
    // Reposition on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            positionMegaMenus();
        }
    });
    
    // Initial positioning
    positionMegaMenus();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only if it's an actual anchor link not a dropdown toggle
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // If mobile menu is open, close it
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (hamburger) hamburger.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Initialize header state on page load
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    }
}); 
 */


fetch("/pages/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Now the header is in the DOM, so proceed safely

    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
      hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }

     // Mobile Dropdown Toggle
     document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Only trigger for mobile view and only if it has dropdown
            if (window.innerWidth <= 768 && this.nextElementSibling) {
                e.preventDefault();
                
                // Toggle the specific dropdown
                const dropdown = this.nextElementSibling;
                
                // First close all other dropdowns
                document.querySelectorAll('.mega-menu, .dropdown').forEach(function(menu) {
                    if (menu !== dropdown) {
                        menu.classList.remove('show');
                    }
                });
                
                // Then toggle the current dropdown
                dropdown.classList.toggle('show');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            hamburger && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Close mobile menu when window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            
            // Hide all mobile dropdown menus
            document.querySelectorAll('.mega-menu, .dropdown').forEach(function(menu) {
                menu.classList.remove('show');
            });
        }
    });
    
    // Position mega menus relative to viewport
    function positionMegaMenus() {
        document.querySelectorAll('.mega-menu').forEach(function(menu) {
            const navItem = menu.closest('.nav-item');
            const navItemRect = navItem.getBoundingClientRect();
            const headerRect = document.querySelector('.header').getBoundingClientRect();
            
            // Set the position for mega menus that should be centered
            if (menu.classList.contains('center-mega-menu')) {
                const windowWidth = window.innerWidth;
                const menuWidth = menu.offsetWidth;
                
                // Center the mega menu
                if (menuWidth > 0) {
                    const leftPos = navItemRect.left + (navItemRect.width / 2) - (menuWidth / 2);
                    const rightEdge = leftPos + menuWidth;
                    
                    // Ensure menu doesn't go off-screen
                    if (leftPos < 0) {
                        menu.style.left = '0';
                        menu.style.right = 'auto';
                    } else if (rightEdge > windowWidth) {
                        menu.style.left = 'auto';
                        menu.style.right = '0';
                    } else {
                        menu.style.left = leftPos + 'px';
                        menu.style.right = 'auto';
                    }
                }
            }
        });
    }
    
    // Position mega menus on hover
    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                positionMegaMenus();
            }
        });
    });
    
    // Reposition on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            positionMegaMenus();
        }
    });
    
    // Initial positioning
    positionMegaMenus();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only if it's an actual anchor link not a dropdown toggle
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // If mobile menu is open, close it
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (hamburger) hamburger.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Initialize header state on page load
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    }

  });



  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });



  //adding common footer in all the pages
  fetch("/pages/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });