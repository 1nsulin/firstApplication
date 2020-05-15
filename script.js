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
    incom: [],
    savings: true,
};

function chooseExpenses() {

    for( let i = 0; i<2; i++){

        let a = prompt("Введите обязательную статью расходов в этом месяце ", "");
        let b = +prompt("Во сколько обойдется?", "");
    
        if( a != null && b != null && a != "" && b != "" && a.length < 50 ){
            appData.expenses[a] = b;
        } else{
            i--;
        };
    
    }
}

//chooseExpenses();

function detectDayBudget(){

    appData.moneyPerDay = +(appData.budget / 30).toFixed(1);
    alert(appData.moneyPerDay);
};
detectDayBudget();


function detectLevel(){

    if( appData.moneyPerDay <= 100 ){
        alert("Очень маленький дневной бюджет");
    } else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
        alert("Бюджет среднего размера");
    } else if ( appData.moneyPerDay >= 2000){
        alert("Жируешь дядя");
    } else {
        alert("Произошла пижня вселенского масштаба");
    };

};
detectLevel();


function checkSavings() {
    if(appData.savings == true){
    let save = +prompt("Введите накопления", "");
    let percent = +prompt("Под какой процент", "");

    appData.monthIncome = save/100/12*percent;
    alert("Доход с вашего депозита: " + appData.monthIncome + "$ в месяц");
    }
};
//checkSavings();

function chooseOptExpenses(){

    for(let i = 1; i<=3; i++){
        let a = prompt("Статья необязательных расходов", "");

        if(a != null && a != ""){
            appData.optionalExpenses[i] = a;
        } else{
            i--;
        };
    }

}
//chooseOptExpenses();



