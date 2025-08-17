// Kalp ve şifre paneli elementlerini seçme
const heart = document.getElementById('heart');
const passwordPanel = document.getElementById('passwordPanel');
const passwordInput = document.getElementById('passwordInput');

// Kalbe tıklandığında şifre panelini gösterme
heart.addEventListener('click', () => {
    passwordPanel.style.display = 'flex';
});

// Şifre kontrolü
function checkPassword() {
    const password = passwordInput.value;
    if (password === "MA") {
        window.location.href = 'gallery.html';
    } else {
        alert('Yanlış şifre! Tekrar deneyin.');
        passwordInput.value = '';
    }
}

// Enter tuşuna basıldığında şifre kontrolü
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Şifre paneli dışına tıklandığında paneli kapatma
passwordPanel.addEventListener('click', (e) => {
    if (e.target === passwordPanel) {
        passwordPanel.style.display = 'none';
        passwordInput.value = '';
    }
}); 
