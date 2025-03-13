var audio = new Audio('https://wilburwilliams.uk/assets/aprilscattered.opus');
document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevents the page from refreshing
    await searchHTML();
});

async function searchHTML() {
    try {
        const query = document.getElementById('searchText').value;
        const response = await fetch('main.json');
        const data = await response.json();
        hits = 0;
        
        console.log(data); // Log the data to inspect its structure

        // Check if data is an object
        if (typeof data !== 'object') {
            throw new Error('Data is not an object');
        }

        const queryWords = query.toLowerCase().split(/\s+/);

        // Filter keys that contain at least one of the query words
        const results = Object.keys(data).filter(key => {
            const keyLower = key.toLowerCase();
            return queryWords.some(word => keyLower.includes(word)); // Check if any word matches
        });

        // Print the matching results and their content
        results.forEach(key => {
            console.log(`Found match in: ${key}`);
            hits += 1;
            console.log(data[key].content); // Print the content associated with the key
        });

        // Optionally, return all matching content if needed
        document.getElementById('searchResults').innerHTML = hits+" successful hits in the data(bass) "+results.map(key => data[key].content).join('');
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        return '';
    }
    const elements = document.querySelectorAll('.math');
    elements.forEach(el => {
        katex.render(el.innerText, el, {
            throwOnError: false
        });
    });
}

async function songPlay(songURL) {
    if (easterAudio) {
      easterAudio.pause();
      easterAudio = new Audio(songURL);
    } else {
      var easterAudio = new Audio(songURL);
    }
  
    eaudion = true;
  
    if (audio) {
      audio.pause();
    }
  
    easterAudio.play();
    easterAudio.addEventListener("ended", function () {
      eaudion = false;
      try {
        muct = document.getElementById('musiccontrol');
        muct.innerHTML = "Click to pause music";
        muct.onclick = pausemusic;
        audio.play();
      } catch {
        console.log("djsifsd2");
      }
    });
  }
  
  async function playAprilCells() {
    await songPlay('https://wilburwilliams.uk/assets/aprilscattered.opus');
  }
  

document.addEventListener("DOMContentLoaded", function(){
    console.log("This site uses the RMT (Rescue My Tests) Database and search system. If you're reading this on a site that isn't rescue-my-tests.pages.dev, congratulations! Now you know who the website dev is stealing from!")
})