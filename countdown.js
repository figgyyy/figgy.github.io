// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set target date: February 17, 2026
    const targetDate = new Date('February 17, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // If countdown finished
        if (distance < 0) {
            ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
                document.getElementById(id).textContent = '00';
            });
            return;
        }

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update display
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Initial call + interval
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
