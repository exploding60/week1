// Task 1 - buat variabel
let name = "Rizky Syahputra"
let email = "rizkysyahputra14045@gmail.com"
let address = {
    Kota : "Kabupaten Tangerang",
    Provinsi: "Banten"
}
let isMerried = true
let hobbies = ["Makan","Tidur","Gaming"]

//Task 2 - printGajilGenap
function printGanjilGenap(){
    for (let i =1;i <= 15; i++){
        let loop = i%2===0 ? `${i} adalah bilangan genap` : `${i} adalah bilangan ganjil`
        console.log(loop)
    }
}
printGanjilGenap()

//task 3 - Segitiga
function segitiga(printSegitiga) {
    let hasil = '1';
    for (let i = 1; i <= printSegitiga; i++) {
      for (let j = 1; j <= i; j++) {
        hasil += i;
      }
      hasil += '\n';
    }
    return hasil;
  }
  console.log(segitiga(5));