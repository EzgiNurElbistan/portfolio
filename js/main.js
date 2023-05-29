console.log("helloworldyazmaktanbiktim");
console.log("ibrahim yuzunden ogreniyom bunlari cunku isssiz kalmicam");
console.log("simdi size sirayla yazdigim degerlerin turunu gostericem.");
console.log("degerler sirasiyla: Ezgi,22,true,false");
console.log(typeof "ezgi");
console.log(typeof 22);
console.log(typeof true);
console.log(typeof false);
//tanimlamalar const ile olur!!!
//string
const myVariable = "Mathematics";
//length
console.log(myVariable.length);
console.log("every good girls does fine".length);
//returns the given number of letters
//first position 0!
console.log(myVariable.charAt(6));
//show which index the mentioned syllable is in
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.indexOf("at"));
console.log(myVariable.indexOf("mat"));
//baslangic parametresi bitis parametresinden buyuk olamaz
//bu slice metodunda verilen baslangic sayisinin indeksindeki harften verilen bitis sayisinin indeksine kadar olan harfleri döndürür
//eger bitis indeksi verilmezse son indekse kadar olan harflerin hepsini dondurur
console.log(myVariable.slice(5, 8));
console.log(myVariable.slice(5));
console.log(myVariable.slice(0, 4));
//klasik buyuk harf kucuk harf yapma
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
//boolean deger donduren merthod
//verdigimiz deger dizenin icinde degilse false deger dondurur
//eger icindeyse true deger dondurur
console.log(myVariable.includes("div"));
console.log(myVariable.includes("mat"));
//bolme methodu
//ornegin e sonuctaki dizelere dahil edilmez
console.log(myVariable.split("e"));
//eger tirnak icini bos veriyorsan her karekter tek tek tirnak icinde verilir
console.log(myVariable.split(""));
console.log("john,joe,dave".split(","));
//numbers
const myNumber = 42;
console.log(myNumber);
const myFloat = 42.01;
console.log(myFloat);
console.log(myNumber === myFloat);
//false deger dondurur
const myNum = 41;
const myFlo = 41.0;
console.log(myNum === myFlo);
//true deger dondurur
const myString = "41";
console.log(myNum === myString);
//veri turleri farkli oldugu icin false deger doner
//stringe sayı eklemeye calisirsak stringin sonuna o sayıyı ekler matematiksel olarak eklemez ornek
console.log(myString + 3);
//bir stringi sayı türüne dönüştürebiliriz
console.log(Number(myString) + 3);
console.log(Number(myString) === myNum);
//eger iceride tırnak isaretiyle bir yazı bukunuyorsa not a number kısaltması olan NaN consola yazılır
console.log(Number("dave"));
console.log(Number(undefined));
//ama eger boolean deger varsa true icin 1 flase icin 0 degerleri dondurulur
console.log(Number(true));
console.log(Number(false));
//number methods
//the Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myFloat));
//Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
console.log(Number.parseFloat(myString));
const myStr = "41.123abc";
console.log(Number.parseFloat(myStr));
//abc yi almadi cunku sayi degiller
//the Number.parseInt() method parses a string argument and returns integer
console.log(Number.parseInt(myString));
