// Store selected values for x, y, z
let selectedValues = { x: null, y: null, z: null };

// Function to handle symbol selection
function selectSymbol(variable, value, element) {
    // Update the selected value
    selectedValues[variable] = value;

    // Remove 'selected' class from all buttons in the section
    document.querySelectorAll(`#${variable}-symbols .symbol-button`).forEach(button => {
        button.classList.remove("selected");
    });

    // Add 'selected' class to the clicked button
    element.classList.add("selected");
}

// Function to calculate results
function calculateResults() {
    const { x, y, z } = selectedValues;

    // Ensure all values are selected
    if (x === null || y === null || z === null) {
        alert("Please select a symbol for x, y, and z!");
        return;
    }

    // Perform calculations
    const result1 = 2 * x + 11;           // Formula: 2x + 11
    const result2 = (2 * z + y) - 5;     // Formula: (2z + y) - 5
    const result3 = Math.abs((y + z) - x); // Formula: |(y + z) - x|

    // Display results
    document.getElementById("result").innerHTML = `
        <p>Code: ${result1} ${result2} ${result3}</p>
    `;
}
