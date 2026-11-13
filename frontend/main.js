document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    
    if (counterElement) {
        // Using CounterAPI, which is active and reliable
        fetch("https://api.counterapi.dev/v1/jayp1604-portfolio/visits/up")
            .then(response => response.json())
            .then(data => {
                counterElement.textContent = data.count;
            })
            .catch(error => {
                console.error("Error fetching visitor count:", error);
                counterElement.textContent = "1"; // Fallback display
            });
    }
});
