      // Fungsi untuk melakukan perhitungan berdasarkan input
      function hitung() {
        const angka1 = parseFloat(document.getElementById('angka1').value);
        const angka2 = parseFloat(document.getElementById('angka2').value);
        const operator = document.getElementById('operator').value;
        let hasil;

        // Mengecek apakah input valid (berupa angka)
        if (isNaN(angka1) || isNaN(angka2)) {
          showPopup('Masukan angka yang valid'); // Menampilkan pesan error jika input tidak valid
          return;
        }

        // Melakukan perhitungan berdasarkan operator yang dipilih
        switch (operator) {
          case '+':
            hasil = angka1 + angka2;
            break;
          case '-':
            hasil = angka1 - angka2;
            break;
          case '*':
            hasil = angka1 * angka2;
            break;
          case '/':
            hasil = angka1 / angka2;
            break;
          default:
            showPopup('Operator tidak valid'); // Menampilkan pesan error jika operator tidak valid
            return;
        }

        // Menampilkan hasil di dalam popup
        showPopup('Hasil: ' + hasil);
      }

      // Fungsi untuk menampilkan popup dengan pesan tertentu
      function showPopup(message) {
        document.getElementById('hasil-popup').innerHTML = message; // Menampilkan pesan di popup
        document.getElementById('popup').style.display = 'block'; // Memunculkan popup
        document.getElementById('overlay').style.display = 'block'; // Memunculkan overlay
      }

      // Fungsi untuk menutup popup
      function closePopup() {
        document.getElementById('popup').style.display = 'none'; // Menyembunyikan popup
        document.getElementById('overlay').style.display = 'none'; // Menyembunyikan overlay
      }