function goToPage2() {
    let name1 = "";
    if (currentLanguage === 'en') {
        name1 = document.getElementById('name1_en').value;
    } else {
        name1 = document.getElementById('name1_hi').value;
    }
    if (name1.trim() === '') {
        if (currentLanguage === 'en') {
            alert('Please enter first name');
        } else {
            alert('कृपया पहला नाम दर्ज करें।');
        }
        return;
    }
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function goToPage3() {
    let name2 = "";
    if (currentLanguage === 'en') {
        name2 = document.getElementById('name2_en').value;
    } else {
        name2 = document.getElementById('name2_hi').value;
    }

    if (name2.trim() === '') {
        if (currentLanguage === 'en') {
            alert('Please enter second name');
        } else {
            alert('कृपया दूसरा नाम दर्ज करें।');
        }
        return;
    }
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
}

function calculateLove() {
    let name1 = "";
    if (currentLanguage === 'en') {
        name1 = document.getElementById('name1_en').value;
    } else {
        name1 = document.getElementById('name1_hi').value;
    }

    let name2 = "";
    if (currentLanguage === 'en') {
        name2 = document.getElementById('name2_en').value;
    } else {
        name2 = document.getElementById('name2_hi').value;
    }

    let userPercentage = "";
    if (currentLanguage === 'en') {
        userPercentage = document.getElementById('userPercentage_en').value;
    } else {
        userPercentage = document.getElementById('userPercentage_hi').value;
    }

    // लव कैलकुलेटर लॉजिक (यहां रैंडम वैल्यू जेनरेट करें)
    const lovePercentage = Math.floor(Math.random() * 101); // 0 से 100 तक

    let loveMessage = "";
    if (currentLanguage === 'en') {
        loveMessage = generateLoveMessage(lovePercentage);
    } else {
        loveMessage = generateLoveMessageHindi(lovePercentage);
    }

    // परिणाम दिखाएं
    let userGuessText = "";
    let calculatorResultText = "";

    if (currentLanguage === 'en') {
        userGuessText = `You guessed: ${userPercentage}%`;
        calculatorResultText = `Love Calculator: ${lovePercentage}%`;
    } else {
        userGuessText = `आपने अनुमान लगाया: ${userPercentage}%`;
        calculatorResultText = `लव कैलकुलेटर: ${lovePercentage}%`;
    }

    if (currentLanguage === 'en') {
        document.getElementById('userGuess_en').textContent = userGuessText;
        document.getElementById('calculatorResult_en').textContent = calculatorResultText;
        document.getElementById('loveMessage_en').textContent = loveMessage;
    } else {
        document.getElementById('userGuess_hi').textContent = userGuessText;
        document.getElementById('calculatorResult_hi').textContent = calculatorResultText;
        document.getElementById('loveMessage_hi').textContent = loveMessage;
    }

    document.getElementById('page3').style.display = 'none';
    // showResultWithConfetti() फ़ंक्शन को कॉल किया गया है
    showResultWithConfetti();
}

function generateLoveMessage(percentage) {
    // यहां अलग-अलग पर्सेंटेज के लिए मैसेज जेनरेट करें
    if (percentage > 70) {
        return "There is deep love between you two! This relationship is very special.";
    } else if (percentage > 40) {
        return "There is good chemistry between you two. Keep trying!";
    } else {
        return "There is still some scope, but love can grow.";
    }
}

function generateLoveMessageHindi(percentage) {
    // यहां अलग-अलग पर्सेंटेज के लिए मैसेज जेनरेट करें
    if (percentage > 70) {
        return "आप दोनों के बीच गहरा प्यार है! यह रिश्ता बहुत खास है।";
    } else if (percentage > 40) {
        return "आप दोनों के बीच अच्छी केमिस्ट्री है। कोशिश करते रहिए!";
    } else {
        return "अभी थोड़ी गुंजाइश है, लेकिन प्यार बढ़ सकता है।";
    }
}

function shareResult() {
    let name1 = "";
    if (currentLanguage === 'en') {
        name1 = document.getElementById('name1_en').value;
    } else {
        name1 = document.getElementById('name1_hi').value;
    }

    let name2 = "";
    if (currentLanguage === 'en') {
        name2 = document.getElementById('name2_en').value;
    } else {
        name2 = document.getElementById('name2_hi').value;
    }

    let lovePercentage = "";
    let loveMessage = "";

    if (currentLanguage === 'en') {
        lovePercentage = document.getElementById('calculatorResult_en').textContent.split(':')[1].trim();
        loveMessage = document.getElementById('loveMessage_en').textContent;
    } else {
        lovePercentage = document.getElementById('calculatorResult_hi').textContent.split(':')[1].trim();
        loveMessage = document.getElementById('loveMessage_hi').textContent;
    }

    let shareText = "";
    if (currentLanguage === 'en') {
        shareText = `I used the Love Calculator for ${name1} and ${name2} and got ${lovePercentage}! Message: ${loveMessage} Check it out here: [your website link]`;
    } else {
        shareText = `मैंने ${name1} और ${name2} के लिए लव कैलकुलेटर का इस्तेमाल किया और ${lovePercentage} मिला! संदेश: ${loveMessage} यहां चेक करें: [आपकी वेबसाइट का लिंक]`;
    }

    // सोशल मीडिया पर शेयर करने के लिए यहां लॉजिक जोड़ें
    alert('Copy this text to share:\n' + shareText);
}

function showCalculating(callback) {
    const aiCalculating = document.getElementById('ai-calculating');
    aiCalculating.style.display = 'flex';

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0';

    const intervalTime = 50;
    const totalTime = 5000;
    const widthMax = 100; // maximum width for the code.
    const increment = (widthMax / (totalTime / intervalTime));

    let width = 0;
    progressBar.style.width = width + '%';

    const interval = setInterval(() => {
        width += increment;
        if (width >= widthMax) {
            width = widthMax;
            clearInterval(interval);
            setTimeout(() => {
                aiCalculating.style.display = 'none';
                callback();
            }, 0);
        }
        progressBar.style.width = width + '%';
    }, intervalTime);
}

function toggleMusic() {
    var music = document.getElementById("romanticMusic");
    music.muted = !music.muted;
}

function playMusic() {
    var music = document.getElementById("romanticMusic");
    music.play();
    document.removeEventListener('click', playMusic);
    document.removeEventListener('touchstart', playMusic);
}

document.addEventListener('click', playMusic);
document.addEventListener('touchstart', playMusic);

function showResultWithConfetti() {
    // परिणाम कंटेनर दिखाएं
    document.getElementById('result').style.display = 'block';

    // कंफेट्टी बनाने के लिए 50 तत्वों का उपयोग करें
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
}

// कंफेट्टी बनाने के लिए फ़ंक्शन
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDelay = Math.random() + 's';
    document.body.appendChild(confetti);
    // कंफेट्टी निकालने के लिए
    setTimeout(function() {
        confetti.remove();
    }, 3000);
}

// रैंडम कलर जनरेट करने के लिए फ़ंक्शन
function getRandomColor() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}