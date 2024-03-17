// scripts.js
const toggleFanButton = document.getElementById("toggleFan");
const fanSpeedInput = document.getElementById("fanSpeed");

toggleFanButton.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://kodessphere-api.vercel.app/fan/toggle",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authentication headers if required
        },
      }
    );
    if (response.ok) {
      console.log("Fan toggled successfully");
      // Update UI or show success message
    } else {
      throw new Error("Failed to toggle fan");
    }
  } catch (error) {
    console.error("Error toggling fan:", error.message);
    // Show error message to user
  }
});

fanSpeedInput.addEventListener("input", async (event) => {
  const speed = event.target.value;
  try {
    const response = await fetch(
      "https://kodessphere-api.vercel.app/fan/speed",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authentication headers if required
        },
        body: JSON.stringify({ speed }),
      }
    );
    if (response.ok) {
      console.log("Fan speed adjusted successfully");
      // Update UI or show success message
    } else {
      throw new Error("Failed to adjust fan speed");
    }
  } catch (error) {
    console.error("Error adjusting fan speed:", error.message);
    // Show error message to user
  }
});
