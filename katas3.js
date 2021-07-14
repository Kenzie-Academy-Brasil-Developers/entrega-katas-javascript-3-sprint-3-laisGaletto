const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(result, katas) {
    let destiny = document.getElementsByTagName('body');
    let createTable = document.createElement("table");
    let createThead = document.createElement("thead");
    let createTh = document.createElement("th");
    let text = document.createTextNode(katas);
    createThead.appendChild(createTh);
    createTh.appendChild(text);
    
    createTable.appendChild(createThead);
    
    destiny[0].appendChild(createTable);
    let createTbody = document.createElement("tbody");
    let createTd = document.createElement("td");
    let texto = document.createTextNode(result);
    createTd.appendChild(texto);
    createTbody.appendChild(createTd);
    createTable.appendChild(createTbody);
    
    destiny[0].appendChild(createTable);
}

//Exibir os números de 1 a 25
function kata1() {
    let x = [];
    for(let a = 1 ; a<=25 ; a++){
        x.push(a);
    }
    let result = x.join(", ");
    showResults(result, "kata 1");
    return x;
}

//Exibir os números de 25 a 1
function kata2() {
    let x = [];
    for(let a = 25; a>=1; a--){
        x.push(a);
    }
    let result = x.join(", ");
    showResults(result, "katas 2");
    return x;
}

//Exibir os números de -1 a -25
function kata3() {
    let x = [];
    for(let a = -1; a>=-25; a--){
        x.push(a);
    }
    let result = x.join(", ");
    showResults(result, "katas 3");
    return x;
}

//Exibir os números de -25 a -1
function kata4() {
    let x = [];
    for(let a = -25; a<=-1; a++){
        x.push(a);
    }
    let result = x.join(", ");
    showResults(result, "katas 4");
    return x;
}

//Exibir os números ímpares de 25 a -25
function kata5() {
    let x = [];
    for(let a = 25; a>= -25; a--){
        if (a%2 !== 0){
            x.push(a)
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 5");
    return x;
}

//Exibir os números divisíveis por 3 até o 100
function kata6() {
    let x = [];
    for(let a = 0; a<= 100; a++){
        if (a%3 === 0){
            x.push(a)
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 6");
    return x;
}

//Exibir os números divisíveis por 7 até o 100
function kata7() {
    let x = [];
    for(let a = 0; a<= 100; a++){
        if (a%7 === 0){
            x.push(a)
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 7");
    return x;
}

//Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100
function kata8() {
    let x = [];
    for(let a = 100; a>= 0; a--){
        if (a%3 === 0 || a%7 === 0){
            x.push(a)
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 8");
    return x;
}

//Exibir os números ímpares divisíveis por 5 até o 100
function kata9() {
    let x = [];
    for(let a = 0; a<= 100; a++){
        if (a%5 === 0 && a%2 !== 0){
            x.push(a)
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 9");
    return x;
}

//Exibir os 20 elementos de sampleArray
function kata10() {
    showResults(sampleArray, "katas 10");
    return x;
}

//Exibir todos os números pares contidos em sampleArray
function kata11() {
    let x = [];
    for(let a = 0; a< sampleArray.length; a++){
        if (sampleArray[a]%2 === 0){
            x.push(sampleArray[a])
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 11");
    return x;
}

//Exibir todos os números ímpares contidos em sampleArray
function kata12() {
    let x = [];
    for(let a = 0; a< sampleArray.length; a++){
        if (sampleArray[a]%2 !== 0){
            x.push(sampleArray[a])
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 12");
    return x;
}

//Exibir os números divisíveis por 8 em sampleArray
function kata13() {
    let x = [];
    for(let a = 0; a< sampleArray.length; a++){
        if (sampleArray[a]%8 === 0){
            x.push(sampleArray[a])
        }
    }
    let result = x.join(", ");
    showResults(result, "katas 13");
    return x;
}

//Exibir o quadrado de cada elemento de sampleArray
function kata14() {
    let x = [];
    for(let a = 0; a< sampleArray.length; a++){
        x.push(sampleArray[a]*sampleArray[a])
    }
    let result = x.join(", ");
    showResults(result, "katas 14");
    return x;
}

//Exibir a soma de todos os números de 1 a 20
function kata15() {
    let x = 0;
    for(let a = 0; a< 20; a++){
        x += sampleArray[a];
    }
    showResults(result, "katas 15");
    return x;
}

 //Exibir a soma de todos os elementos de sampleArray.
function kata16() {
    let x = 0;
    for(let a = 0; a< sampleArray.length; a++){
        x += sampleArray[a];
    }
    showResults(result, "katas 16");
    return x;
}

//Exibir o menor elemento de sampleArray
function kata17() {
    let x = sampleArray[0];
    for(let a = 0; a< sampleArray.length; a++){
        if(sampleArray[a] < x){
            x = sampleArray[a];
        }
    }
    showResults(result, "katas 17");
    return x;
}

//Exibir o maior elemento de sampleArray
function kata18() {
    let x = sampleArray[0];
    for(let a = 0; a< sampleArray.length; a++){
        if(sampleArray[a] > x){
            x = sampleArray[a];
        }
    }
    showResults(result, "katas 18");
    return x;
}

kata1();
kata2();
kata3();
kata4();
kata5();
kata6();
kata7();
kata8();
kata9();
kata10();
kata11();
kata12();
kata13();
kata14();
kata15();
kata16();
kata17();
kata18();