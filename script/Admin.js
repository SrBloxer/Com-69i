const musics = JSON.parse(localStorage.getItem('storagemusic')) || [
    {
        songname : "Carnaval",
        artist : "Maluma",
        length : "3:32",
        public : false,
        img : "",
        urlaudio : "https://open.spotify.com/embed/track/1VG7hlZpY73n8h8NgidVTh?utm_source=generator",
        date:"2014",
    },
    {
        songname : "GTA.mp3 ",
        artist : "Emilia Mernes",
        length : "2:31",
        public : false,
        img : "",
        urlaudio : "https://open.spotify.com/embed/track/6hv8hai0yo19JF2c6pppj6?utm_source=generator",
        date:"2023",
    },
    {
        songname : "Rockstar",
        artist : "Duki",
        length : "3:32",
        public : false,
        img : "",
        urlaudio : "https://open.spotify.com/intl-es/track/3E4ZzO4ySupnYypDPXcc3D?si=508a6b318fda43a6",
        date:"2018",
    },
    {
        songname : "Chulo pt.2",
        artist : "Bad Gyal, Tokischa, Young Miko",
        length : "3:39",
        public : false,
        img : "",
        urlaudio : "https://open.spotify.com/intl-es/track/0J9g1MMJDhyvOb3NWckHMm?si=ab9fb44b3bb34e75",
        date:"2023",
    },
    {
        songname : "Se preparó",
        artist : "Ozuna",
        length : "3:08",
        public : false,
        img : "",
        urlaudio : "https://open.spotify.com/intl-es/track/1m69ELEgE6k5ZWsap40ozt?si=def024fb34c7473b",
        date:"2017",
    },

]

const tableContainer = document.getElementById('tableContainer')

musics.map((song,index)=>{
  tableContainer.innerHTML += `
  <tr>
    <th scope="row">${index}</th>
    <td>${song.songname}</td>
    <td>${song.artist}</td>
    <td>${song.length}</td>
    <td><a href="#"><i class="bi bi-pencil-square"></i></a></td>
    <td><a href="#"><i class="bi bi-trash"></i></a></td>
  </tr>
  `
})

let regexText = /^[A-Za-z]{2,40}^\d+$/;
let regexSongImg = /^[A-Za-z0-9]+\\.(jpg|jpeg|png|gif|bmp)$/i;
let regexMusicAudio = /^[A-Za-z0-9_.]+\\.(mp3|wav|flac|ogg)$/i;
let regexNumber = /^\d{2,6}^\d+$/;


const newSong = {
    songname : "",
    artist : "",
    length : "",
    public : false,
    img : "",
    urlaudio : "",
    date:"",
    id:""
}

const handleChange = (event) => {

    switch (event.target.id) {
      case 'songName':
        if (regexText.test(event.target.value)) {
          alert("El nombre de la canción debe contener un mínimo de 2 caracteres");
        } else {
          newSong.songname = event.target.value;
        }
        break;
      case 'songArtist':
        if (regexText.test(event.target.value)) {
            alert("El nombre del artista debe contener un mínimo de 2 caracteres");
          } else {
            newSong.artist = event.target.value;
          }
        break;
      case 'songLength':
        if (regexNumber.test(event.target.value)) {
          alert("ingresa cuánto dura la canción");
        } else {
          newSong.length = event.target.value;
        }
      case 'songImg':
        if (regexSongImg.test(event.target.value)) {
          alert("Ingresa una imagen en formato válidos");
        } else {
          newSong.img = event.target.value;
        }
        break;
      case 'songAudio':
        if (regexMusicAudio.test(event.target.value)) {
          alert("Ingresa una url válida");
        } else {
          newSong.urlaudio  = event.target.value;
        }
        break;
      case 'songDate':
        if (regexNumber.test(event.target.value)) {
          alert("Ingresa el año de lanzamiento de la canción");
        } else {
          newSong.date = event.target.value;
        }
        break;
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    const saveSong = JSON.parse(localStorage.getItem('storagemusic'));
    console.log(saveSong)
    if (saveSong) {
      saveSong.push(newSong);
      const jsonSong = JSON.stringify(saveSong)
      localStorage.setItem('storagemusic', jsonSong)
      window.location.reload()
    } else {
      let storagemusic = musics;
      storagemusic.push(newSong);
      const jsonSong = JSON.stringify(storagemusic)
      localStorage.setItem('storagemusic', jsonSong)
      window.location.reload()
    }
  }