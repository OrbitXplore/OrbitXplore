document.getElementById('explosion-dot').addEventListener('click', function() {
    if (!this.classList.contains('clicked')) {
        this.classList.add('clicked');

        // Create explosion
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        document.body.appendChild(explosion);

        // Create the flash effect
        const flash = document.createElement('div');
        flash.className = 'flash';
        document.body.appendChild(flash);

        // Create particles
        createParticles(this);

        // Redirect after explosion ends
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 3000); // Match this duration with the CSS animation duration

        // Clean up after explosion
        setTimeout(() => {
            explosion.remove();
            flash.remove();
        }, 3500); // Clean up after explosion and flash
    }
});

// Function to create particles
function createParticles(dotElement) {
    const numParticles = 50; // Number of particles to generate
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random direction and distance for each particle
        const angle = Math.random() * 360;
        const distance = Math.random() * 200 + 100; // Distance range for particles
        const dx = Math.cos(angle * Math.PI / 180) * distance;
        const dy = Math.sin(angle * Math.PI / 180) * distance;

        // Set particle position to the dot's location
        const rect = dotElement.getBoundingClientRect();
        particle.style.left = `${rect.left + rect.width / 2 - 2}px`;
        particle.style.top = `${rect.top + rect.height / 2 - 2}px`;

        // Set the direction of movement using CSS custom properties
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 2000); // Match the animation duration
    }
}
