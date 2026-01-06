// ===== DIGITAL CLOCK FUNCTION =====
function updateClock() {
    const now = new Date();
    
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Get date components
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Update HTML elements if they exist
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');
    
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;
    if (dayElement) dayElement.textContent = dayName;
    if (dateElement) dateElement.textContent = date;
    if (monthElement) monthElement.textContent = monthName;
    if (yearElement) yearElement.textContent = year;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();

// ===== SMOOTH SCROLLING =====
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

// ===== FORM SUBMISSION HANDLING =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.\n\nWe will respond to ${email} shortly.`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields!');
        }
    });
}

// ===== SCROLL ANIMATIONS =====
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.game-card, .timeline-item, .gallery-item');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// ===== INITIALIZE ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.game-card, .timeline-item, .gallery-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Trigger scroll event to show visible elements
    window.dispatchEvent(new Event('scroll'));
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    }
    
    lastScroll = currentScroll;
});

// ===== GALLERY MODAL (Optional Enhancement) =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        alert(`You clicked on: ${title}\n\nThis would typically open a detailed view or modal.`);
    });
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c Welcome to Capcom Website! ', 
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Creating Legendary Gaming Experiences Since 1979 ', 
    'color: #667eea; font-size: 14px; font-weight: bold;');