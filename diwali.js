document.getElementById('generateBtn').addEventListener('click', function() {
    const friendName = document.getElementById('friendName').value;
    if (friendName) {
        // Redirect to the second page with the friend's name as a URL parameter
        window.location.href = `diwali1.html?name=${encodeURIComponent(friendName)}`;
    } else {
        alert('Please enter a name.');
    }
});
