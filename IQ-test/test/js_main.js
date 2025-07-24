 let currentStep = 0;
  const steps = document.querySelectorAll('.step');

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  }

  function validatePersonalInfo() {
  const name = document.querySelector('[name="name"]').value.trim();
  const age = parseInt(document.querySelector('[name="age"]').value.trim());
  const gender = document.querySelector('[name="gender"]').value;

  if (!name || !age || !gender) {
    alert("Please fill in all the fields (Name, Age, Gender) before starting.");
    return;
  }

  if (isNaN(age) || age < 12 || age > 60) {
    alert("Your age must be between 12 and 60.");
    return;
  }

  nextStep(); // Go to questions only if valid



}

function goToResult() {
  window.location.href = 'https://tusharsavner.github.io/Standard/IQ-test/result/html_main.html';
}

