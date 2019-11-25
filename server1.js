const server = require('express')()
const port = 5000

let nilai = 90



// let data ={
//     nama: 'wina efg',
//     npm: 17411081,
//     jurusan: 'sistem informasi',
//     kuliah: (namaMatkul, nama) =>{
//         console.log('Selamat Kuliah ' + nama +',dimatakuliah ' + namaMatkul)
//     }
// }
// data.kuliah('Pemrograman III', data.nama)

let listmhs =[
  {
      nama: 'wina efg',
      npm: 17411081
  },
  {
      nama: 'donat jco',
      npm: 17411082
  },
  {
      nama: 'ardhito',
      npm: 17411083
  }
]
for (let i = 0; i < listmhs.length; i++) {    
console.log(listmhs[i].nama + '-' + listmhs[i].npm)
}

//if (nilai > 80) {
  //  console.log('Nilai Anda A')   
// } else if (nilai > 70) {
   // console.log('Nilai Anda B')
// } else {
   // console.log('Nilai Anda C')
// }

server.listen(port, function() {
    console.log('Server started on port' + port)

})