// ============================================
// EMAILJS CONFIGURATION
// ============================================
// Get these values from https://www.emailjs.com/
// See EMAILJS_SETUP.md for detailed instructions
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'n6fSb21aIBu-PlpUC',        // Replace with your EmailJS Public Key
    SERVICE_ID: 'service_1rh2698',        // Replace with your EmailJS Service ID
    TEMPLATE_ID: 'template_m5krhhp',      // Replace with your EmailJS Template ID
    TO_EMAIL: 'sadamn.developer@gmail.com' // Your email address (where you'll receive messages)
};

// Initialize EmailJS
(function() {
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
})();

// ============================================
// NAVIGATION & UI
// ============================================

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Clear error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
    document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('error');
    });
}

// Show error message
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '-error');
    const inputElement = document.getElementById(fieldId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    if (inputElement) {
        inputElement.classList.add('error');
    }
}

// Show success/error message
function showFormMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    messageElement.style.display = 'block';
    
    // Scroll to message
    messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds for errors, keep success visible
    if (type === 'error') {
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

// EmailJS is initialized at the top of the file

// Form submission handler with EmailJS
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('user_name').value.trim();
        const email = document.getElementById('user_email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation flags
        let isValid = true;
        
        // Validate name
        if (name === '') {
            showError('user_name', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showError('user_name', 'Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('user_email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('user_email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate subject
        if (subject === '') {
            showError('subject', 'Subject is required');
            isValid = false;
        } else if (subject.length < 3) {
            showError('subject', 'Subject must be at least 3 characters');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            showError('message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        // If validation fails, stop here
        if (!isValid) {
            showFormMessage('Please fix the errors above', 'error');
            return;
        }
        
        // Disable submit button and show loading
        const submitBtn = document.getElementById('submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        
        // Check if EmailJS is configured
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
            EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
            EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
            showFormMessage('Email service is not configured yet. Please set up EmailJS. See EMAILJS_SETUP.md for instructions.', 'error');
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
            return;
        }
        
        // Prepare email parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: EMAILJS_CONFIG.TO_EMAIL
        };
        
        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            
            // Success
            showFormMessage('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Error - Log detailed error for debugging
            console.error('EmailJS Error Details:', error);
            console.error('Error Code:', error.status);
            console.error('Error Text:', error.text);
            
            // Show user-friendly error message
            let errorMessage = 'Sorry, there was an error sending your message. ';
            
            // Provide specific error messages based on error type
            if (error.status === 400) {
                errorMessage += 'Please check that all form fields are filled correctly.';
            } else if (error.status === 401) {
                errorMessage += 'Email service authentication failed. Please check your EmailJS configuration.';
            } else if (error.status === 403) {
                errorMessage += 'Access denied. Please verify your EmailJS Public Key is correct.';
            } else if (error.status === 404) {
                errorMessage += 'Service or template not found. Please check your Service ID and Template ID.';
            } else if (error.status === 422) {
                errorMessage += 'Template variables mismatch. Please check that your EmailJS template uses: {{from_name}}, {{from_email}}, {{subject}}, {{message}}. See ERROR_422_FIX.md for details.';
            } else if (error.status === 429) {
                errorMessage += 'Too many requests. Please try again in a few minutes.';
            } else {
                errorMessage += 'Please try again later or contact me directly at sadamn.developer@gmail.com';
            }
            
            showFormMessage(errorMessage, 'error');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
        }
    });
    
    // Real-time email validation
    const emailInput = document.getElementById('user_email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email && !validateEmail(email)) {
                showError('user_email', 'Please enter a valid email address');
            } else if (email) {
                const errorElement = document.getElementById('user_email-error');
                const inputElement = document.getElementById('user_email');
                if (errorElement) {
                    errorElement.textContent = '';
                    errorElement.style.display = 'none';
                }
                if (inputElement) {
                    inputElement.classList.remove('error');
                }
            }
        });
    }
    
    // Clear errors on input
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', function() {
            const fieldId = this.id;
            const errorElement = document.getElementById(fieldId + '-error');
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
            this.classList.remove('error');
        });
    });
}

// Add animation to project cards on scroll
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            projectObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
});

// ============================================
// NUMBER COUNTING ANIMATION
// ============================================

// Function to animate number counting
function animateCounter(element, target, suffix = '', duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    const isDecimal = target % 1 !== 0;
    
    // Add animating class for visual effect
    element.classList.add('animating');
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
            element.classList.remove('animating');
        }
        
        // Format number based on type
        if (isDecimal) {
            element.textContent = current.toFixed(1) + suffix;
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16); // ~60fps
}

// Function to extract number and suffix from stat
function parseStatValue(statElement) {
    const text = statElement.textContent.trim();
    const match = text.match(/(\d+(?:\.\d+)?)(.*)/);
    
    if (match) {
        return {
            number: parseFloat(match[1]),
            suffix: match[2] || ''
        };
    }
    return { number: 0, suffix: '' };
}

// Observer for About Me section stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-number');
            
            statItems.forEach((statElement, index) => {
                // Get original value
                const { number, suffix } = parseStatValue(statElement);
                
                // Reset to 0
                statElement.textContent = '0' + suffix;
                
                // Animate with delay for each stat
                setTimeout(() => {
                    animateCounter(statElement, number, suffix, 2000);
                }, index * 200); // Stagger animation by 200ms
            });
            
            // Only animate once
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px'
});

// Observe About Me section
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

