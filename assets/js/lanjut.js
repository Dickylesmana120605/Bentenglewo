document.addEventListener('DOMContentLoaded', function() {
    // Ambil data terakhir dari Local Storage
    let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
    if (orders.length > 0) {
        const lastOrder = orders[orders.length - 1];
        const jenis_motor = lastOrder.jenis_motor;
        const totalHarga = jenis_motor === 'besar' ? 'Rp.30.000' : 'Rp.20.000';

        // Tampilkan total harga
        document.getElementById('totalHarga').textContent = 'Total Harga: ' + totalHarga;
    } else {
        document.getElementById('totalHarga').textContent = 'Tidak ada pesanan ditemukan.';
    }

    // Tambahkan event listener untuk tombol konfirmasi
    const confirmButton = document.getElementById('confirmButton');
    if (confirmButton) {
        confirmButton.addEventListener('click', function() {
            // Redirect ke halaman user.html
            window.location.href = '/assets/page/user.html'; // Sesuaikan dengan path yang benar
        });
    }
});