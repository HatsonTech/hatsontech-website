// ==========================================================================
// HatsonTech Website - Main JavaScript
// Handles all interactivity, animations, and language switching
// ==========================================================================

(function() {
    'use strict';

    // ==========================================================================
    // Global Variables
    // ==========================================================================
    
    let currentLanguage = localStorage.getItem('language') || 'tr';
    
    // ==========================================================================
    // Initialize Everything on Document Ready
    // ==========================================================================
    
    $(document).ready(function() {
        initLanguage();
        initNavigation();
        initParticles();
        initAnimations();
        initCounters();
        initScrollToTop();
        initContactForm();
        initSmoothScroll();

        // Arriving with a section hash (e.g. an inner-page link to /#insights):
        // smooth-scroll to it, accounting for the fixed navbar.
        if (window.location.hash) {
            var _hashTarget = $(window.location.hash);
            if (_hashTarget.length) {
                setTimeout(function () {
                    $('html, body').stop().animate({ scrollTop: _hashTarget.offset().top - 70 }, 450);
                }, 120);
            }
        }
    });

    // ==========================================================================
    // Language Switching
    // ==========================================================================
    
    function initLanguage() {
        // Set initial language
        setLanguage(currentLanguage);
        
        // Language button click handlers
        $('.lang-btn').on('click', function() {
            const lang = $(this).data('lang');
            setLanguage(lang);
        });
    }
    
    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update active button state
        $('.lang-btn').removeClass('active');
        $(`.lang-btn[data-lang="${lang}"]`).addClass('active');
        
        // Update HTML lang attribute
        $('html').attr('lang', lang);

        // Point the "Insights / Faydalı Bilgiler" links to the current language's section
        $('a[data-translate="nav_blog"]').attr('href', lang === 'en' ? 'insights/' : 'faydali-bilgiler/');

        // Add transition class to body for fade-out effect
        $('body').addClass('lang-transitioning');
        
        // Wait for fade-out animation, then translate and fade-in
        setTimeout(function() {
            translatePage(lang);
            
            // Remove transition class for fade-in effect
            setTimeout(function() {
                $('body').removeClass('lang-transitioning');
            }, 50);
        }, 400);
    }
    
    function translatePage(lang) {
        const trans = translations[lang];
        
        // Translate elements with data-translate attribute
        $('[data-translate]').each(function() {
            const key = $(this).data('translate');
            if (trans[key]) {
                $(this).text(trans[key]);
            }
        });
        
        // Translate placeholder attributes
        $('[data-translate-placeholder]').each(function() {
            const key = $(this).data('translate-placeholder');
            if (trans[key]) {
                $(this).attr('placeholder', trans[key]);
            }
        });
        
        // Translate select options
        $('#service option').each(function() {
            const key = $(this).data('translate');
            if (key && trans[key]) {
                $(this).text(trans[key]);
            }
        });
    }

    // ==========================================================================
    // Navigation
    // ==========================================================================
    
    function initNavigation() {
        // Navbar scroll effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#mainNav').addClass('scrolled');
            } else {
                $('#mainNav').removeClass('scrolled');
            }
        });
        
        // Active nav link on scroll
        $(window).on('scroll', function() {
            let scrollPos = $(document).scrollTop() + 100;
            
            $('.nav-link').each(function() {
                let currLink = $(this);
                let refElement = $(currLink.attr('href'));
                
                if (refElement.length) {
                    if (refElement.position().top <= scrollPos && 
                        refElement.position().top + refElement.height() > scrollPos) {
                        $('.nav-link').removeClass('active');
                        currLink.addClass('active');
                    }
                }
            });
        });
        
        // Close mobile menu on link click
        $('.navbar-nav .nav-link').on('click', function() {
            if ($(window).width() < 992) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }

    // ==========================================================================
    // Particles.js Background
    // ==========================================================================
    
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#7FA8E6'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#7FA8E6',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }
    }

    // ==========================================================================
    // AOS (Animate On Scroll) Initialization
    // ==========================================================================
    
    function initAnimations() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-in-out'
            });
        }
    }

    // ==========================================================================
    // Animated Counters
    // ==========================================================================
    
    function initCounters() {
        let counterAnimated = false;
        
        $(window).on('scroll', function() {
            const heroStats = $('.hero-stats');
            
            if (heroStats.length && !counterAnimated) {
                const statsOffset = heroStats.offset().top;
                const scrollPos = $(window).scrollTop() + $(window).height();
                
                if (scrollPos > statsOffset) {
                    counterAnimated = true;
                    animateCounters();
                }
            }
        });
        
        // Trigger on page load if visible
        if ($('.hero-stats').length) {
            const heroStats = $('.hero-stats');
            const statsOffset = heroStats.offset().top;
            const scrollPos = $(window).scrollTop() + $(window).height();
            
            if (scrollPos > statsOffset) {
                animateCounters();
            }
        }
    }
    
    function animateCounters() {
        $('.counter').each(function() {
            const $this = $(this);
            const countTo = $this.data('count');
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // ==========================================================================
    // Scroll to Top Button
    // ==========================================================================
    
    function initScrollToTop() {
        const scrollToTopBtn = $('#scrollToTop');
        
        // Show/hide button on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                scrollToTopBtn.addClass('show');
            } else {
                scrollToTopBtn.removeClass('show');
            }
        });
        
        // Scroll to top on click
        scrollToTopBtn.on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }

    // ==========================================================================
    // Smooth Scrolling for Navigation Links
    // ==========================================================================
    
    function initSmoothScroll() {
        $('a[href^="#"]').on('click', function(event) {
            const target = $(this.getAttribute('href'));
            
            if (target.length) {
                event.preventDefault();

                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 70
                }, 500);
            }
        });
    }

    // ==========================================================================
    // Contact Form Handling
    // ==========================================================================
    
    // Contact form delivers via FormSubmit (no backend, works on static hosting/GitHub Pages).
    // NOTE: FormSubmit requires a one-time activation — the first submission triggers a
    // confirmation email to info@hatsontech.com; click its link once and the form is live.
    const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/info@hatsontech.com';

    function initContactForm() {
        $('#contactForm').on('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: $('#name').val(),
                email: $('#email').val(),
                company: $('#company').val(),
                phone: $('#phone').val(),
                service: $('#service').val(),
                message: $('#message').val()
            };

            // Validate form
            if (!validateForm(formData)) {
                return false;
            }

            // Show loading state
            const submitBtn = $(this).find('button[type="submit"]');
            const originalText = submitBtn.text();
            submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Sending...');

            fetch(CONTACT_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    phone: formData.phone,
                    topic: formData.service,
                    message: formData.message,
                    _subject: 'New Contact Message — HatsonTech',
                    _template: 'table',
                    _captcha: 'false'
                })
            })
            .then(function(response) {
                if (!response.ok) { throw new Error('Submission failed'); }
                showFormMessage('success', translations[currentLanguage].contact_success, '#formMessage');
                document.getElementById('contactForm').reset();
            })
            .catch(function() {
                showFormMessage('error', translations[currentLanguage].contact_error, '#formMessage');
            })
            .finally(function() {
                submitBtn.prop('disabled', false).text(originalText);
            });
        });

        // The careers/CV form submits natively to FormSubmit (multipart) so the CV file
        // attaches. We only show a brief "sending" state; the browser handles the POST.
        $('#cvForm').on('submit', function() {
            const submitBtn = $(this).find('button[type="submit"]');
            submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Submitting...');
        });
    }
    
    function validateForm(data) {
        // Name validation
        if (data.name.trim() === '') {
            showFormMessage('error', 'Please enter your name.');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('error', 'Please enter a valid email address.');
            return false;
        }
        
        // Topic validation
        if (data.service === '') {
            showFormMessage('error', 'Please select a topic.');
            return false;
        }
        
        // Message validation
        if (data.message.trim() === '') {
            showFormMessage('error', 'Please enter your message.');
            return false;
        }
        
        return true;
    }
    
    function showFormMessage(type, message, targetSelector) {
        const messageDiv = $(targetSelector || '#formMessage');
        
        messageDiv
            .removeClass('alert-success alert-danger')
            .addClass(type === 'success' ? 'alert-success' : 'alert-danger')
            .html(`<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`)
            .fadeIn();
        
        setTimeout(function() {
            messageDiv.fadeOut();
        }, 5000);
    }

    // ==========================================================================
    // Additional Utility Functions
    // ==========================================================================
    
    // Lazy load images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Call lazy load if needed
    if (document.querySelectorAll('img[data-src]').length > 0) {
        lazyLoadImages();
    }

    // ==========================================================================
    // Performance Optimization
    // ==========================================================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimize scroll event listeners
    const optimizedScroll = debounce(function() {
        // Add any scroll-based calculations here
    }, 100);
    
    $(window).on('scroll', optimizedScroll);

    // ==========================================================================
    // Console Message (Optional - Remove in production)
    // ==========================================================================
    
    console.log('%c🎩 HatsonTech ', 'background: #1E4FA0; color: white; font-size: 20px; padding: 10px;');
    console.log('%cSoftware Solutions & Innovation — flagship: FlowDesk', 'color: #2b2f36; font-size: 14px;');
    console.log('%cWebsite built with ❤️ by the HatsonTech Team', 'color: #6b7280; font-size: 12px;');
    console.log('%cInterested in joining our team? Check out our careers page!', 'color: #E01B24; font-size: 12px; font-weight: bold;');

})();

// ==========================================================================
// Global Helper Functions
// ==========================================================================

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// ==========================================================================
// Service Worker Registration (Optional - for PWA)
// ==========================================================================

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
*/

