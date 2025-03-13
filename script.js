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

      if (typeof data !== 'object') {
          throw new Error('Data is not an object');
      }

      const queryWords = query.toLowerCase().split(/\s+/);

      const results = Object.keys(data).filter(key => {
          const keyLower = key.toLowerCase();
          return queryWords.some(word => keyLower.includes(word));
      });

      results.forEach(key => {
          console.log(`Found match in: ${key}`);
          hits += 1;
          console.log(data[key].content);
      });

      // Update results in the DOM
      document.getElementById('searchResults').innerHTML = 
          hits + " successful hits in the data(bass) " + 
          results.map(key => `<p class="math">${data[key].content}</p>`).join('');

      // Wait for the DOM to update, then render KaTeX
      requestAnimationFrame(() => {
          const elements = document.querySelectorAll('.math');
          elements.forEach(el => {
              katex.render(el.innerText, el, {
                  throwOnError: false
              });
          });
      });

  } catch (error) {
      console.error('Error reading or parsing JSON:', error);
      return '';
  }
}

async function GLaDOS(){
  var text = document.getElementById('searchResult').innerHTML;
  var apiUrl = `https://glados.c-net.org/generate?text=${encodeURIComponent(text)}`;
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audio.play();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
    fetch(apiUrl)
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