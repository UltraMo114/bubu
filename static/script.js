document.addEventListener('DOMContentLoaded', function() {
    // Get sticker data from the template
    const stickers = JSON.parse(document.getElementById('stickers-data').textContent);
    const currentSticker = document.getElementById('current-sticker');
    const forgiveBtn = document.getElementById('forgive-btn');
    const notForgiveBtn = document.getElementById('not-forgive-btn');
    const finalMessage = document.getElementById('final-message');
    const stickerContainer = document.querySelector('.sticker-container');
    const apologyText = document.querySelector('.apology-text');
    
    let currentIndex = 0;
    
    // Initial button sizes
    let forgiveBtnScale = 1;
    let notForgiveBtnScale = 1;
    
    // Function to update the current sticker
    function updateSticker() {
        currentSticker.src = `/static/sticker/${stickers[currentIndex]}`;
    }
    
    // Event listener for "不原谅" button
    notForgiveBtn.addEventListener('click', function() {
        // Reduce the size of "不原谅" button by 20%
        notForgiveBtnScale *= 0.8;
        notForgiveBtn.style.transform = `scale(${notForgiveBtnScale})`;
        
        // Increase the size of "原谅" button by 20%
        forgiveBtnScale *= 1.2;
        forgiveBtn.style.transform = `scale(${forgiveBtnScale})`;
        
        // Move to next sticker
        currentIndex = (currentIndex + 1) % stickers.length;
        updateSticker();
        
        // Add a visual effect to the sticker
        stickerContainer.classList.add('shake');
        setTimeout(() => {
            stickerContainer.classList.remove('shake');
        }, 500);
    });
    
    // Event listener for "原谅" button
    forgiveBtn.addEventListener('click', function() {
        // Hide the apology text, buttons and stickers
        apologyText.classList.add('hidden');
        document.querySelector('.button-container').classList.add('hidden');
        stickerContainer.classList.add('hidden');
        
        // Show the final message
        finalMessage.classList.remove('hidden');
        
        // Add celebration effect
        document.body.classList.add('celebration');
    });
});