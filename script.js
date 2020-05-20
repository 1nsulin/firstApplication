"use strict"

let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while( isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц", "");
    }

}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for( let i = 0; i<2; i++){

            let a = prompt("Введите обязательную статью расходов в этом месяце ", "");
            let b = +prompt("Во сколько обойдется?", "");
        
            if( a != null && b != null && a != "" && b != "" && a.length < 50 ){
                appData.expenses[a] = b;
            } else{
                i--;
            };
        
        }

    },
    detectDayBudget: function(){
        appData.moneyPerDay = +(appData.budget / 30).toFixed(1);
        alert(appData.moneyPerDay);

    },
    detectLevel: function(){
        if( appData.moneyPerDay <= 100 ){
            alert("Очень маленький дневной бюджет");
        } else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
            alert("Бюджет среднего размера");
        } else if ( appData.moneyPerDay >= 2000){
            alert("Жируешь дядя");
        } else {
            alert("Произошла пижня вселенского масштаба");
        };
    
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Введите накопления", "");
            let percent = +prompt("Под какой процент", "");
        
            appData.monthIncome = save/100/12*percent;
            alert("Доход с вашего депозита: " + appData.monthIncome + "$ в месяц");
            }
    },
    chooseOptExpenses: function(){
        for(let i = 1; i<=3; i++){
            let a = prompt("Статья необязательных расходов", "");
    
            if(a != null && a != ""){
                appData.optionalExpenses[i] = a;
            } else{
                i--;
            };
        }
    },
    chooseIncome: function(){
        for(let i = 0; i<1; i++){
        let a = prompt("Перечислите статьи дохода (через запятую)", "");
            if (a != "" && a != null){
                appData.income = a.split(", ");
                appData.income.push( prompt("Может что-то еще?", '') );
                appData.income.sort();
            } else {
                i--;
            };
        };

    },
};

// appData.chooseIncome();
// appData.income.forEach(function(item, index){
//     let modIndex = index + 1;
//     alert("Способы доп. заработка: " + modIndex + ": " + item);
// });

for(let k in appData){
    console.log("Наша программа содержит " + appData.k + " : " + appData[k]);
};

// РЕШИТЬ ЗАДАНИЕ 5.3, 5.4 






