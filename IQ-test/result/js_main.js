const analysisBox = document.getElementById("analysisBox");
const finalResult = document.getElementById("finalResult");

const fakeAnalysisMessages = [
  "Connecting to Neural Network...",
  "Decoding Synaptic Responses...",
  "Evaluating Logical Reasoning...",
  "Checking Pattern Recognition...",
  "Running Abstract Thought Simulation...",
  "Measuring Emotional Intelligence...",
  "Scanning Left-Brain Dominance...",
  "Analyzing Cat-vs-Dog preference...",
  "Measuring Brainwave Resonance...",
  "Running Subconscious Profile Model...",
  "Analyzing Humor Potential...",
  "Performing Final Computation...",
];

let index = 0;

function displayNextMessage() {
  if (index < fakeAnalysisMessages.length) {
    const message = fakeAnalysisMessages[index];
    analysisBox.innerHTML += `• ${message}\n`;
    index++;
    setTimeout(displayNextMessage, 2000); // 2 seconds between each
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  analysisBox.innerHTML += "\n✔ Analysis Complete.";
  finalResult.style.display = "block";
}

// Start analysis on page load
window.onload = () => {
  displayNextMessage();
};
