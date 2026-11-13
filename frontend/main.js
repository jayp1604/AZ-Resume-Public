document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    
    if (!counterElement) return;

    // Set an immediate initial fallback so it's never blank
    counterElement.textContent = "1";

    fetch("https://api.counterapi.dev/v1/jayp1604-portfolio/visits/up")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            if (data && data.count) {
                counterElement.textContent = data.count;
            }
        })
        .catch(error => {
            console.error("Counter API error:", error);
            // Keeps the fallback value displayed if fetch fails
        });
});
