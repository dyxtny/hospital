const dokterJadwal = {
    "Monday": ["dr. Andi Wijaya"],
    "Tuesday": ["dr. Andi Wijaya, dr. Melisa Tania"],
    "Wednesday": ["dr. Andi Wijaya, dr. Rendra Saputra"],
    "Thursday": ["dr. Melisa Tania, dr. Rendra Saputra"],
    "Friday": ["dr. Rendra Saputra"],
    "Saturday": ["dr. Clara Ayu"],
    "Sunday": ["dr. Clara Ayu"]
  };

  document.getElementById('formPasien').addEventListener('submit', function (e) {
    e.preventDefault();
    const hari = document.getElementById('hari').value;
    const list = dokterJadwal[hari] || [];

    const resultBox = document.getElementById('dokterResult');
    const listElement = document.getElementById('listDokter');

    listElement.innerHTML = '';

    if (list.length > 0) {
      list.forEach(nama => {
        const li = document.createElement('li');
        li.textContent = nama;
        listElement.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = "Tidak ada dokter di hari ini.";
      listElement.appendChild(li);
    }

    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth' });
  });
  
  AOS.init();