function getData(){
    let fullName = document.getElementById("name").value;
    let group = document.getElementById("group").value;
    let fac = document.getElementById("fac").value;
    let town = document.getElementById("town").value;
    let telegram = document.getElementById("telegram").value;
    let validated = true;
    let result = "";
    console.log('1')
    let fullNameReg = /^[Є-ЯҐ][а-їґ]* [Є-ЯҐ]\.[Є-ЯҐ]\.$/
    let groupReg = /^[А-ЯҐЄІЇ]{2}-[0-9]{2}$/
    let facReg = /^[А-ЯҐЄІЇ]{4}$/
    let townReg = /^м\. [a-Яа-яґҐєЄіІїЇ]+$/
    let telegramReg = /^@[\w_]+$/

    if (fullName.match(fullNameReg)){
        console.log(fullName);
        document.getElementById("name").style.borderColor ="black";
    }else {
        alert("Неправильно введено факультет (Приклад: Богоцький О.В.)")
        document.getElementById("name").style.borderColor ="red";
        validated = false;
    }
    if (group.match(groupReg)){
        console.log(group);
        document.getElementById("group").style.borderColor ="black";
    }else {
        alert("Неправильно введено групу (Приклад: ІК-03) ")
        document.getElementById("group").style.borderColor ="red";
        validated = false;
    }
    if (fac.match(facReg)){
        console.log(fac);
        document.getElementById("fac").style.borderColor ="black";
    }else {
        alert("Неправильно введено факультет (Приклад: ФІОТ)")
        document.getElementById("fac").style.borderColor ="red";
        validated = false;
    }
    if (town.match(townReg)){
        console.log(town);
        document.getElementById("town").style.borderColor ="black";
    } else {
        alert("Неправильно введено адресу (Приклад: м. Вінниця)")
        document.getElementById("town").style.borderColor ="red";
        validated = false;
    }
    if (telegram.match(telegramReg)){
        console.log(telegram);
        document.getElementById("telegram").style.borderColor ="black";
    } else {
        alert("Неправильно введено telegram (Приклад: @s_shurik)")
        document.getElementById("telegram").style.borderColor ="red";
        validated = false;
    }
    if (validated){
        result = "ПІБ: " + fullName + "<br/>" + "Група: " + group + "<br/>"
            + "Факультет: " + fac + "<br/>" + "Адреса: " + town +
            "<br/>" + "Telegram: " + telegram
        document.getElementById("result").innerHTML = result;
    }
}
function changeColorToRandom(id){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(id).style.backgroundColor = "#" + randomColor;
}
function changeColor(id){
    document.getElementById(id).style.backgroundColor =
        document.getElementById('color-pal').value;
}
function changeRowColor(){
    changeColor(30)
    changeColor(28)
    changeColor(26)
}