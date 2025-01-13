document.getElementById('form-pendaftaran').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const usia = document.getElementById('usia').value;
    const telp = document.getElementById('telp').value;
    const alamat = document.getElementById('alamat').value;
    
    // Menampilkan hasil input
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Terima kasih, ${nama}!</h3>
                           <p>Data Anda telah berhasil diterima.</p>
                           <ul>
                               <li>Usia: ${usia}</li>
                               <li>Nomor WhatsApp: ${telp}</li>
                               <li>Alamat: ${alamat}</li>
                           </ul>`;

    // Reset form setelah pengiriman
    document.getElementById('form-pendaftaran').reset();
});

