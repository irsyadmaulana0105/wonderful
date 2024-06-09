function changeLanguage(lang) {
    const translations = {
        'en': {
            'title': 'Hello'
        },
        'fr': {
            'title': 'Bonjour'
        }
    };

    // Mengubah teks berdasarkan bahasa yang dipilih
    document.getElementById('title').innerText = translations[lang]['title'];
}
