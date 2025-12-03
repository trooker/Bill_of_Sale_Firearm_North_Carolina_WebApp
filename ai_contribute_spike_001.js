/*
 * Copyright &copy 1988-2025 by Abbott Analytical Products. All Rights Reserved.
 * 
 * 251024_2054: 
Lost querry.  Recreate close rendring of question
==>> Html Form with two required signatures that must be emailed upon clicking a finalize button 
produced slightly different response but same general 
https://www.google.com/search?client=ubuntu-sn&channel=fs&q=Html+Form+with+two+required+signatures+that+must+be+emailed+upon+clicking+a+finalize+button

 */
document.addEventListener('DOMContentLoaded', () => {
  const canvasSeller = document.getElementById('signatureCanvasSeller');
  const canvasBuyer= document.getElementById('signatureCanvasBuyer');
  const form = document.getElementById('signatureForm');
  const pdfButton = document.getElementById('print2pdf');
  const finalizedButton = document.getElementById('finalizedButton');
  const hiddenInputSeller = document.getElementById('signatureSeller');
  const hiddenInputBuyer = document.getElementById('signatureBuyer');

  const signaturePadSeller = new SignaturePad(canvasSeller);
  const signaturePadBuyer = new SignaturePad(canvasBuyer);

  const signaturePads = [signaturePadSeller, signaturePadBuyer];
  
  function updatePDF_Request() {
     const pdfRequested = 1;
  }

  function updateButtonState() {
    // Check if both signature pads are not empty
    const allSigned = signaturePads.every(pad => !pad.isEmpty());
    finalizedButton.disabled = !allSigned;
  }

  // Monitor drawing on both pads to update the button's state
  signaturePads.forEach(pad => {
    pad.addEventListener('endStroke', updateButtonState);
  });

  // Handle clear buttons
  document.querySelectorAll('.clear-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const canvasId = e.target.dataset.canvasId;
      if (canvasId === 'signatureCanvasSeller') {
        signaturePadSeller.clear();
      } else if (canvasId === 'signatureCanvasBuyer') {
        signaturePadBuyer.clear();
      }
      updateButtonState(); // Update the button state after clearing
    });
  });

  // Handle form submission
  form.addEventListener('submit', (event) => {
    // Prevent default submission behavior
    event.preventDefault();

    // Check one last time before submitting
    if (signaturePadSeller.isEmpty() || signaturePadBuyer.isEmpty()) {
      alert('Both signatures are required!');
      return;
    }

    // Capture the signature data and put it in the hidden inputs
    hiddenInputSeller.value = signaturePadSeller.toDataURL(); // toDataURL exports the signature as a base64 image string
    hiddenInputBuyer.value = signaturePadBuyer.toDataURL();

    // Disable the button to prevent multiple submissions
    finalizedButton.disabled = true;
    finalizedButton.textContent = 'Submitting...';

    // Submit the form programmatically
    form.submit();
  });
});
