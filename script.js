const window = document.querySelector('#window');
const Iya = document.querySelector(".next");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");
window.addEventListener('load', () => {
    Swal.fire({
      title: 'Do you want to play music in the background?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector('.song').play();
        resolveFetch().then(animationTimeline());
      } else {
        resolveFetch().then(animationTimeline());
      }
    });
  });  

Iya.addEventListener("click", function () {
    Iya.value = parseInt(Iya.value) + 1;
    Text.classList.remove('text-animate');

    if (Iya.value == 1) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Dari Aku Untuk Kamu 🤗";
        Text.classList.add('text-animate');
    }else if (Iya.value == 2) {
        Image.setAttribute("src", "eid.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Janji kadang kadang terabaikan";
        Text.classList.add('text-animate');
    }else if (Iya.value == 3) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Hati kadangkala berprasangka";
        Text.classList.add('text-animate');
    }else if (Iya.value == 4) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Sikap kadangkala menyakitkan";
        Text.classList.add('text-animate');
    }else if (Iya.value == 5) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Harapan ini menjadi indah <br> Jika selalu ada maaf diantara kita";
        Text.classList.add('text-animate');
    }else if (Iya.value == 6) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = " Maka alangkah indahnya saling memaafkan";
        Text.classList.add('text-animate');
    }else if (Iya.value == 7) {
        Image.setAttribute("src", "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br> Taqabbalallahu Minna Wa Minkum";
        Text.classList.add('text-animate');
    }else if (Iya.value == 8) {
        Image.setAttribute("src", "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Selamat hari raya Idul Fitri 1443 Hijriah <br> Mohon Maaf Lahir dan Batin 😁";
        Text.classList.add('text-animate');
    }else if (Iya.value == 9) {
        Image.setAttribute("src", "selamat-lebaran.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Dari Priya Risky Qurniawan 🤗";
        Text.classList.add('text-animate');
        Iya.remove();
    }
});