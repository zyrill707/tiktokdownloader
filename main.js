function changeCont() {
  var button = document.getElementById("convertBtn");
  button.textContent = "Please wait";
  button.disabled = true;
}

function revertCont() {
  var button = document.getElementById("convertBtn");
  button.textContent = "Convert";
  button.disabled = false;
}
function changeText() {
  let download = document.getElementById("downloadBtn");
  
  download.textContent = "Rederecting";
}
function changeLabel() {
  let sound = document.getElementById("conBtn");
  sound.textContent = "Rederecting";
}
let convert = document.getElementById("convertBtn").onclick = function() {
  changeCont();
  let input = document.getElementById("userInput").value;

  const url = `https://tiktok-api15.p.rapidapi.com/index/Tiktok/getVideoInfo?url=${input}%2F&hd=1`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fddac2cc2emsh54d66c3425a468cp14354bjsn9753fb99c348',
      'X-RapidAPI-Host': 'tiktok-api15.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      
      let image = document.getElementById("prev");
      image.src = data.data.cover;
      data.data.hdplay;
      let videoUrl = data.data.hdplay;
      data.data.author.unique_id;
      let author = data.data.author.unique_id;
      data.data.music_info.play;
      let msc = data.data.music_info.play;
      let auth = document.getElementById("creat").innerHTML = "@" + author;
      let download = document.getElementById("downloadBtn");

      download.addEventListener('click', function() {
        let downloadLink = document.createElement("a");
        downloadLink.href = videoUrl;
        downloadLink.download = "Video.mp4";
        downloadLink.click();
      });
      let mp = document.getElementById("conBtn");
      mp.addEventListener
      ('click', function(){
        changeLabel();
        let mp3Link = document.createElement("a");
        mp3Link.href = msc;
        mp3Link.download = "Music.mp3";
        mp3Link.click()
      })


      revertCont();
    })
    .catch(error => {

      console.log('error', Error);
      revertCont();
    });
};
