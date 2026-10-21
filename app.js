// let x = 5;
// let a = 120000;
// let b = a / x;
// let y = 20;
// let c = y * b;
// console.log(c);

// let son = 64;
// let birlik = son % 10;
// let onlik = son / 10 - birlik / 10;
// console.log("birlik=", birlik);
// console.log("onlik=", onlik);
// console.log("yigindisi=", onlik + birlik);

// let sonuch = 122;
// let birlikuc = sonuch % 10;
// let onlikuc = sonuch % 100;
// let yuzlik = sonuch / 100 - onlikuc / 100;
// console.log("yuzlik=", yuzlik);
// console.log(birlikuc);

// let N = 7200;
// let soat = 3600;
// let min = 60;
// let sek = 1;
// console.log(N / soat, N / min, N / sek);

const matn =
  "Assalomu Aleykum , xush kelibsiz , masalalarni javobini ko'rishiz mumkin";
console.log(matn);
alert("xush kelibsz");

//--------------------------------------------------------------------------------------------

// Begin1. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va
// perimetri aniqlansin.
// S = a * b
// P = 2 * (a + b)
let a = 10;
let b = 15;
let s = a * b;
let p = 2 * (a + b);
console.log("1-masala");

console.log("To'rtburchak yuzasi =", s);
console.log("To'rtburchak paramerti =", p);

//---------------------------------------------------------------------------------------

// Begin2. Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin.
// L = π * d
// π = 3.14
// r = d / 2;
// S = π * r^2
let d = 8;
let r = d / 2;
let pi = 3.14;
let L = pi * d;
let S = pi * r ** 2;
console.log("2-masala");

console.log("aylana yuzasi = ", S);
console.log("uzunligi = ", L);

//--------------------------------------------------------------------------------------

// Begin3. Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S
// aniqlansin.
// V = a^3
// S = 6 * a^2

let yontamoni = 3;
let kubhajmi = yontamoni ** 3;
let kubtolasirti = 6 * yontamoni ** 2;
console.log("3-masala");
console.log("hajmi = ", kubhajmi);
console.log("to'la sirti =", kubtolasirti);

//-------------------------------------------------------------------------------------

// Begin4. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti
// Sni aniqlansin.
// V = a * b * c
// S = 2 * (a * b + b * c + a * c)

let tamonA = 1;
let tamonB = 2;
let tamonC = 3;
let Paralelepephajmi = tamonA * tamonB * tamonC;
let Paralelepeptolasirti =
  2 * (tamonA * tamonB + tamonB * tamonC + tamonA * tamonC);
console.log("4-masala ");
console.log("Paralelepep hajmi = ", Paralelepephajmi);
console.log("Paralelepep sirti =", Paralelepeptolasirti);

//--------------------------------------------------------------------------------------------

// Begin5. Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
// M = (a+b)/2

let birinchison = 20;
let ikkinchison = 12;
let ortaarifmetigi = (birinchison + ikkinchison) / 2;
console.log("5-masala");
console.log("O'rta arifmetigi = ", ortaarifmetigi);

//-----------------------------------------------------------------------------------------------

// Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2).
// Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// S1 = π * r1
// S2 = π * r2
// S = π * (r1^2 − r2^2)

let r1 = 6;
let s1 = pi * r1;
let r2 = 5;
let s2 = pi * r2;

let yuzalarayirmasi = s1 - s2;
console.log("7-masala");
console.log("Yuzalar ayirmasi = ", yuzalarayirmasi);

//--------------------------------------------------------------------------------------------------

// Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// L = 2 * π * R
// S = π * R^2
// π = 3.14

let uzunligialanani = 30;
let radiusi = uzunligialanani / (2 * pi);
let yuzasi = pi * radiusi ** 2;
console.log("8-masala");
console.log("Radiusi = ", radiusi);
console.log("Yuzasi = ", yuzasi);

//-------------------------------------------------------------------------------------------------------------

// Begin10. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni
// qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.

let A = 52;
let B = 13;
let C = 31;
console.log("10 - masala");

console.log("A =", A, "B=", B, "C =", C);

//------------------------------------------------------------------------
// Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
// y = 4 * (x - 3)^6 - 7 * (x - 3)^3 + 2

let x = 0;
let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
console.log("11-masala");
console.log("y =", y);

//-----------------------------------------------------------------------------------------

// Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
// A^3‚ A^6‚ A^9, A^15

let asoni = 3;
console.log("12 - masala");

console.log("A darjalari ->", asoni ** 3, asoni ** 6, asoni ** 9);

//-------------------------------------------------------------------------------

// Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg
// shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.

let xkg = 5;

let asom = 120000;
let bsom = asom / xkg;

let ykg = 20;

let csom = ykg * bsom;
console.log("14-masala");

console.log(csom);
//-----------------------------------------------------------------------------

//  Begin15. Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi.
// Abdulaziz jami qancha savdo qilgan?

let X = 5;
let Asom = 1000;
let jamipul1 = x * Asom;
let Y = 4;
let Bsom = 500;
let jamipul2 = Y * Bsom;
let jamisavdo = jamipul1 + jamipul2;
console.log("15-masala");

console.log(jamisavdo);

//-----------------------------------------------------------------------------------
// Integer1. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng
// o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.

let uchxonalison = 123;
let birliklar = uchxonalison % 10;
let onliklar = ((uchxonalison % 100) - birliklar) / 10;
console.log("integer1");

console.log("birliklar = ", birliklar, "onliklar = ", onliklar);

//------------------------------------------------------------------------------------------------

// Integer2. Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi
// programma tuzilsin.

let n = 456;
let birlik6 = n % 10;
let onlik5 = ((n % 100) - birlik6) / 10;
let yuzlik4 = n / 100 - (birlik6 + onlik5 * 10) / 100;
console.log("integer2");

console.log("raqamlari yig'indisi = ", yuzlik4 + onlik5 + birlik6);

//=====================================================================================

// Integer3. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan
// hosil bo`lgan sonni aniqlovchi program tuzilsin.

let m = 678;

let birlik2 = m % 10;
let onlik2 = ((m % 100) - birlik2) / 10;
let yuzlik2 = (m - (m % 100)) / 100;
let teskari = birlik2 * 100 + onlik2 * 10 + yuzlik2;
console.log("integer3");
console.log("Teskari son: " + teskari);
//==================================================================

// Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan
// yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi
// programma tuzilsin.
// Input: 123
// Output: 213

let h = 123; // uch xonali son

let birlik3 = h % 10;
let onlik3 = ((h % 100) - birlik3) / 10;
let yuzlik3 = (h - (h % 100)) / 100;
let yangi = onlik3 * 100 + yuzlik3 * 10 + birlik3;
console.log("ineteger4");

console.log("Berilgan son: " + h);
console.log("Yangi son: " + yangi);

//-----------------------------------------------------------------------------------

// Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar
// xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma
// tuzilsin.
// Input: 123
// Output: 132

birlik3 = h % 10;
onlik3 = ((h % 100) - birlik3) / 10;
yuzlik3 = (h - (h % 100)) / 100;
let yangi2 = yuzlik3 * 100 + birlik3 * 10 + onlik3;
console.log("ineteger5");
console.log("yangi son =", yangi2);

//==========================================================================================

// Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha
// minut to'la o`tganligini aniqlovchi programma tuzilsin

let Nsekunt = 7200;
let minut = 60;
let tolaminut = Nsekunt / minut;
console.log("integer7");

console.log("Kun boshidan boshlab o'tgan minut ", tolaminut);

//=====================================================================================
// Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha
// to'la soat o`tganligini aniqlovchi programma tuzilsin.

Nsekunt = 7200;
let soat = 3600;
let tolasoat = Nsekunt / soat;
console.log("integer8");
console.log("Kun boshidan boshlab o'tgan soat ", tolasoat, "soat");

//====================================================================================================

// Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha
// minut va sekund o'tganini aniqlovchi programma tuzilsin.

Nsekunt = 7200;
minut = 60;
let sekund = 1;
tolaminut = Nsekunt / minut;
let tolasekunt = Nsekunt * sekund;
console.log("integer9");
console.log(
  "kun boshidan boshlab ",
  tolaminut,
  "minut ",
  tolasekunt,
  " sekunt o'tgan",
);

//=======================================================================================

// Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab
// qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.

Nsekunt = 7200;
tolasoat = Nsekunt / soat;
tolasekunt = Nsekunt * sekund;
console.log("integer10");
console.log(
  "Kun boshidan boshlab ",
  tolasoat,
  "soat  va ",
  tolasekunt,
  "sekun o'tgan",
);
