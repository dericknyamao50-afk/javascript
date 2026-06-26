let grossMonthlySalary=null;
while (true) {
    let gross=prompt["Enter your gross salary"]
}
if (!isNaN) {
    gross=Number[gross];
    if (gross>0) {
       grossMonthlySalary=gross;
       break;


    }
    alert(`Invalid amount entered
        Ensure you enter a number greater than o`
    );
    
}
console.log(
    `gross salary is ${`grossMonthlySalary`}its type ${`typeof grossMonthlySalary`}`
);
let paye=null;

if (grossMonthlySalary<24000) {
    paye=grossMonthlySalary*0.1
}else if (grossMonthlySalary>24000 && grossMonthlySalary<=32333) {
    paye=theSalary*0.25
}else if (grossMonthlySalary>32333 && grossMonthlySalary<=500000) {
    paye=grossMonthlySalary*0.30
}else if (grossMonthlySalary>500000 && grossMonthlySalary<=800000) {
    paye=grossMonthlySalary*0.325
}else if (grossMonthlySalary>800000) {
    paye=grossMonthlySalary*0.35
}
console.log(`paye ${`paye`}`);

let nssf=null
if (grossMonthlySalary>=9000) {
    nssf=grossMonthlySalary*0.06
}else if (grossMonthlySalary>9000 &&grossMonthlySalary<=108000) {
    nssf=9000*0.06+(grossMonthlySalary-9000)*0.06
}else if (grossMonthlySalary>=108000) {
    nssf=6480
}

    

    



