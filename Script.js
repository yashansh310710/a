// script.js
document.getElementById('subscriberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const channelId = document.getElementById('channelId').value;
    const count = document.getElementById('count').value;

    // Make API call to add bot subscribers
    fetch(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&channelId=${channelId}&count=${count}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer AIzaSyACMPNtYF9U-G11bhKNHWGUmK2VBYv-LZw`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Parse the API response and check if subscribers were added successfully
        if (data.success) {
            // Display success message
            document.getElementById('message').textContent = 'Subscribers added successfully';
        } else {
            // Display error message
            document.getElementById('message').textContent = 'Failed to add subscribers';
        }
    })
    .catch(error => {
        // Handle error cases
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred';
    });
});
