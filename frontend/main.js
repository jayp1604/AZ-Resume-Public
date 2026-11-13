document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    
    if (counterElement) {
        // Calls a public counter API (replace namespace/key if desired, or use this default)
        fetch("https://api.countapi.xyz/hit/jayp1604-portfolio/visits")
            .then(response => response.json())
            .then(data => {
                counterElement.textContent = data.value;
            })
            .catch(error => {
                console.error("Error fetching visitor count:", error);
                // Fallback graceful display if the network/API fails
                counterElement.textContent = "---";
            });
    }
});
