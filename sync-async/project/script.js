async function fetchData() {
    const loadingText = document.getElementById("loading");
    const dataText = document.getElementById("data");

    loadingText.style.display = "block" // show the loading message
    dataText.textContent = "";


    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(
                () => 
                    Math.random() > 0.5 ? resolve("Data loaded successfully") : reject(), 3000
            );
        });
        loadingText.style.display = "none"
        dataText.textContent = response; // show data
    } catch (error) {
        loadingText.style.display = "none";
        dataText.textContent = "Error retrieving data";
    } finally {
        loadingText.textContent.style.display = "none";
    }
}