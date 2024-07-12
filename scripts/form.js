// Product Array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  // Function to populate product options
  function populateProductOptions() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }
  
  // Function to track form submissions using localStorage
  function trackFormSubmissions() {
    let reviewCounter = localStorage.getItem('reviewCounter');
    if (!reviewCounter) {
      reviewCounter = 0;
    } else {
      reviewCounter = parseInt(reviewCounter, 10);
    }
    reviewCounter += 1;
    localStorage.setItem('reviewCounter', reviewCounter);
    return reviewCounter;
  }
  
  // Function to display the thank you message
  function displayThankYouMessage(productName, reviewCounter) {
    const formContainer = document.querySelector('.wf1');
    formContainer.innerHTML = `
    <p> Thanks for for reviewing the ${productName}</p>
    <p> You have reviewed ${reviewCounter} times.</p>
    `;
  }
  
  // Function to validate checkboxes
  function validateCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!isChecked) {
      checkboxes.forEach(checkbox => checkbox.setCustomValidity('Please select at least one feature.'));
    } else {
      checkboxes.forEach(checkbox => checkbox.setCustomValidity(''));
    }
    return isChecked;
  }
  
  // Function to validate radio buttons
  function validateRadios() {
    const radios = document.querySelectorAll('input[name="stars"]');
    const isChecked = Array.from(radios).some(radio => radio.checked);
    if (!isChecked) {
      radios.forEach(radio => radio.setCustomValidity('Please rate the product.'));
    } else {
      radios.forEach(radio => radio.setCustomValidity(''));
    }
    return isChecked;
  }
  
  // Event listener for form submission
  document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    
    const reviewForm = document.querySelector('.wf1');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[name="stars"]');
    
    checkboxes.forEach(checkbox => {
      checkbox.required = true;
      checkbox.addEventListener('change', () => {
        if (Array.from(checkboxes).some(checkbox => checkbox.checked)) {
          checkboxes.forEach(cb => cb.removeAttribute('required'));
        } else {
          checkboxes.forEach(cb => cb.setAttribute('required', 'required'));
        }
      });
    });
  
    radios.forEach(radio => {
      radio.required = true;
      radio.addEventListener('change', () => {
        if (Array.from(radios).some(radio => radio.checked)) {
          radios.forEach(rb => rb.removeAttribute('required'));
        } else {
          radios.forEach(rb => rb.setAttribute('required', 'required'));
        }
      });
    });
  
    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      const isCheckboxValid = validateCheckboxes();
      const isRadioValid = validateRadios();
      
      if (isCheckboxValid && isRadioValid) {
        const selectedProduct = document.getElementById('product');
        const selectedProductName = selectedProduct.options[selectedProduct.selectedIndex].text;
  
        const reviewCounter = trackFormSubmissions();
        displayThankYouMessage(selectedProductName, reviewCounter);
      }
    });
  });
  