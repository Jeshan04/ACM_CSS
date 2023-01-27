$(document).ready(function() {
    // Listen for form submission
    $("#code-form").submit(function(event) {
      event.preventDefault();
  
      // Get the HTML and CSS code entered by the user
      let htmlCode = $("#html-code").val();
      //let cssCode = $("#css-code").val();
  
      // Insert the HTML and CSS code into the preview container
      //$("#preview").html(htmlCode);
      //$("#preview").prepend(`<style>${cssCode}</style>`);
      var frame = document.getElementById("preview-area").contentWindow.document;
      frame.open();
      frame.write(htmlCode/*+cssCode*/);
      frame.close();
    });
  });