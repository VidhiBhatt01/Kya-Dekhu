document.addEventListener('DOMContentLoaded', function() {
    var suggestButton = document.getElementById('suggestButton');
    suggestButton.addEventListener('click', suggestVideo);
  });
  
  function suggestVideo() {
    // Read the JSON file containing video URLs
    fetch(chrome.runtime.getURL('drama.json'))
      .then(response => response.json())
      .then(data => {
        // Get a random video URL from the JSON data
        var randomIndex = Math.floor(Math.random() * data.length);
        var videoUrl = data[randomIndex].url;
  
        // Open the suggested video in a new tab
        chrome.tabs.create({ url: videoUrl });
      })
      .catch(error => console.log(error));
  }
  
