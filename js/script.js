document.addEventListener("DOMContentLoaded", function() {
    // Menyembunyikan card hasil BMI pada awalnya
    document.querySelector(".result-card").style.display = "none";
});

document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value) / 100;
    const beratBadan = parseFloat(document.getElementById("berat-badan").value);
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    let kategori = "";
    let program = "";

    if (bmi < 18.5) {
        kategori = "Kurus";
        program = "Hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori kurus, yang berarti berat badan Anda di bawah standar kesehatan yang direkomendasikan. Kondisi ini dapat meningkatkan risiko kekurangan gizi, osteoporosis, dan masalah kesehatan lainnya yang berkaitan dengan rendahnya massa tubuh. Untuk mencapai berat badan yang lebih ideal, disarankan untuk memulai program peningkatan berat badan yang terfokus pada penambahan massa otot dan asupan kalori sehat. <br></br> Program ini dapat mencakup peningkatan konsumsi makanan kaya kalori yang sehat, seperti kacang-kacangan, biji-bijian, protein tanpa lemak, serta produk susu yang rendah lemak. Selain itu, aktivitas fisik yang terarah seperti latihan kekuatan dapat membantu meningkatkan massa otot. Konsultasikan dengan ahli gizi atau dokter untuk memastikan bahwa Anda mendapatkan semua nutrisi yang diperlukan dan untuk memantau perkembangan kesehatan Anda secara berkala.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Ideal";
        program = "Selamat, hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori berat badan normal, yang berarti Anda memiliki keseimbangan antara berat badan dan tinggi badan yang ideal untuk mendukung kesehatan jangka panjang. Kondisi ini adalah tanda bahwa pola makan Anda sudah seimbang, dan aktivitas fisik Anda sudah mencukupi untuk mempertahankan berat badan yang sehat. Untuk menjaga berat badan ideal ini, sangat penting untuk terus menjalankan gaya hidup sehat. <br></br> Pastikan Anda tetap mengonsumsi makanan yang seimbang, yang mencakup berbagai kelompok makanan dengan fokus pada sayuran, buah-buahan, protein tanpa lemak, dan biji-bijian. Tetap aktif dengan berolahraga secara rutin, baik itu latihan kardio, kekuatan, atau aktivitas fisik lainnya yang Anda nikmati. Pemantauan berkala terhadap BMI dan kesehatan secara umum juga dianjurkan untuk memastikan bahwa Anda tetap berada dalam rentang yang sehat.";
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Berat badan berlebih";
        program = "Hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori kelebihan berat badan, yang menandakan adanya peningkatan risiko terhadap berbagai kondisi kesehatan, seperti penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi. Namun, dengan melakukan perubahan gaya hidup yang tepat, Anda dapat kembali ke berat badan yang lebih ideal dan menurunkan risiko ini. <br></br> Program penurunan berat badan yang disarankan melibatkan pengurangan asupan kalori, terutama dari sumber makanan yang tinggi lemak dan gula, serta peningkatan aktivitas fisik secara bertahap. Memasukkan lebih banyak buah, sayuran, dan protein tanpa lemak ke dalam diet harian Anda, serta melakukan olahraga rutin seperti berjalan kaki, jogging, atau berenang, dapat sangat membantu dalam mencapai tujuan penurunan berat badan. Sebaiknya, konsultasikan dengan ahli gizi atau dokter untuk merancang rencana yang sesuai dengan kebutuhan dan kondisi kesehatan Anda.";
    } else {
        kategori = "Obesitas";
        program = "Hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori obesitas, yang merupakan kondisi serius dan dapat meningkatkan risiko berbagai penyakit kronis, termasuk penyakit jantung, stroke, diabetes tipe 2, dan beberapa jenis kanker. Untuk mengurangi risiko ini, sangat penting untuk segera memulai program penurunan berat badan yang berkelanjutan dan sehat. <br></br> Program ini sebaiknya mencakup perubahan signifikan dalam pola makan, dengan fokus pada pengurangan kalori melalui penggantian makanan tinggi lemak dan gula dengan pilihan yang lebih sehat, seperti sayuran, buah-buahan, biji-bijian, dan protein tanpa lemak. Selain itu, meningkatkan aktivitas fisik secara bertahap adalah kunci, dengan latihan seperti berjalan cepat, bersepeda, atau latihan kekuatan. Konsultasikan dengan profesional kesehatan untuk mendapatkan panduan khusus yang disesuaikan dengan kebutuhan Anda, serta dukungan dalam menetapkan dan mencapai tujuan penurunan berat badan yang realistis.";
    }

    // Tampilkan hasil BMI setelah tombol ditekan
    document.getElementById("result-container").style.display = "block";
    document.querySelector(".result-card").style.display = "flex";  // Tampilkan card
    document.querySelector("main aside:first-child").style.width = "50%";
    
    // Menampilkan hasil ke dalam elemen HTML
    document.querySelector(".result-card").innerHTML = `
        <p><strong></strong> ${bmi.toFixed(2)}</p>
        <p><strong>Anda memiliki berat badan </strong> ${kategori}</p>
        <p><strong></strong> ${program}</p>
        <button class="button bg-lightseagreen">Download Hasil BMI</button>
    `;
});
