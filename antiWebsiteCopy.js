  const specificURL = 'https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_writ';

        // Get the current URL
        const currentURL = window.location.href;

        // Check if the current URL is NOT the specific URL
        if (currentURL !== specificURL) {
            // Display a message using document.write
            document.write("<h1>Warning!</h1>");
            document.write("<h5>This Website was trying to phish you. Make sure you go to the correct site, especially when entering sensitive information.</h5>")
            document.write("<p>Protected with antiWebsiteCopy. Check out the project here: github.com/xybytz/antiWebsiteCopy/new/main.</p>")
        }
