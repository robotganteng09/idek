function hitungBiaya() {
   
    var mobil = document.getElementById("mobil").value;
    var hari = parseInt(document.getElementById("hari").value);

   
    if (isNaN(hari) || hari <= 0) {
        alert("Jumlah hari sewa harus lebih dari 0.");
        return;
    }
  
    if (mobil === "avanza") {
        hargaPerHari = 300000;
    } else if (mobil === "innova") {
        hargaPerHari = 450000;
    } else if (mobil === "fortuner") {
        hargaPerHari = 750000;
    } else if (mobil === "pajero") {
        hargaPerHari = 800000;
    }

   
    var totalBiaya = hargaPerHari * hari;


    document.getElementById("hasil").innerHTML = "Total biaya sewa: Rp " + totalBiaya.toLocaleString();
}
