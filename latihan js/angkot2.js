// pengulangan while dan for
let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('angkot no.' + noAngkot + ' ' +  'sedang beroperasi');
    noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('angkot no.' + noAngkot + ' ' + 'sedang tidak beroperasi');
}