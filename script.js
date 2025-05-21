function goToPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the requested page
    const pageToShow = document.getElementById(`page${pageNumber}`);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }
}

function showResult() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const guessedPercentage = document.getElementById('percentageGuess').value;

    // Calculate a random love percentage
    const lovePercentage = Math.floor(Math.random() * 101); // 0-100

    // Display the names
    const namesDisplay = document.getElementById('namesDisplay');
    namesDisplay.textContent = `${name1} ❤️ ${name2}`;

    // Display the love percentage
    const percentageDisplay = document.getElementById('percentageDisplay');
    percentageDisplay.textContent = `${lovePercentage}%`;

    // Update the love meter
    const meterFill = document.getElementById('meterFill');
    meterFill.style.width = `${lovePercentage}%`;

    // Determine the love message (customize these)
    const loveMessage = document.getElementById('loveMessage');
    if (lovePercentage >= 75) {
        loveMessage.textContent = "It's a match made in heaven!";
    } else if (lovePercentage >= 50) {
        loveMessage.textContent = "There's potential for something special!";
    } else {
        loveMessage.textContent = "Keep trying!";
    }

    // Update Share Buttons (replace with actual URLs)
    const facebookShare = document.getElementById('facebookShare');
    facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=YOUR_WEBSITE_URL"e=${name1} and ${name2} got ${lovePercentage}%!`;

    const instagramShare = document.getElementById('instagramShare');
    instagramShare.href = `https://www.instagram.com/?url=YOUR_WEBSITE_URL`; //Requires additional configuration, not recommended to directly link

    const whatsappShare = document.getElementById('whatsappShare');
    whatsappShare.href = `https://api.whatsapp.com/send?text=${name1} and ${name2} got ${lovePercentage}%! YOUR_WEBSITE_URL`;

    const twitterShare = document.getElementById('twitterShare');
    twitterShare.href = `https://twitter.com/intent/tweet?text=${name1} and ${name2} got ${lovePercentage}%! YOUR_WEBSITE_URL`;
    //Go to page 4
    goToPage(4);

}
