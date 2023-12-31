var currentIndex = 0;

    function changeImage(index) {
      // Hapus class 'active' dari semua elemen <a>
      var links = document.querySelectorAll('.thumb a');
      links.forEach(function(link) {
        link.classList.remove('active');
      });

      // Tambahkan class 'active' pada elemen <a> yang sesuai dengan indeks gambar yang diganti
      var clickedLink = document.querySelector(`.thumb a:nth-child(${index + 1})`);
      clickedLink.classList.add('active');

      // Ganti gambar di slider sesuai dengan indeks gambar yang diganti
      var sliderImages = document.querySelectorAll('.slider img');
      sliderImages.forEach(function(image) {
        image.style.display = 'none';
      });
      sliderImages[index].style.display = 'block';
      
      currentIndex = index;
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + 3) % 3; // Handling wrap-around for previous
      changeImage(currentIndex);
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % 3; // Handling wrap-around for next
      changeImage(currentIndex);
    }