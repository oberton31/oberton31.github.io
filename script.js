// Profile photo handling
document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.getElementById('profile-photo');
    const imagePlaceholder = document.getElementById('image-placeholder');
    
    // Check if profile photo exists
    if (profilePhoto.complete && profilePhoto.naturalWidth !== 0) {
        // Photo loaded successfully
        profilePhoto.style.display = 'block';
        imagePlaceholder.style.display = 'none';
    } else {
        // Photo failed to load or doesn't exist
        profilePhoto.style.display = 'none';
        imagePlaceholder.style.display = 'flex';
    }
    
    // Handle photo load event
    profilePhoto.addEventListener('load', function() {
        profilePhoto.style.display = 'block';
        imagePlaceholder.style.display = 'none';
    });
    
    // Handle photo error event
    profilePhoto.addEventListener('error', function() {
        profilePhoto.style.display = 'none';
        imagePlaceholder.style.display = 'flex';
    });
});

// Smooth scrolling for anchor links
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

// Add some interactive effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

