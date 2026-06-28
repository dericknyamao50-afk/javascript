let grossMonthlySalary=null;
while (true) {
    let gross=prompt("Enter your gross salary")
    if (!isNaN(gross)) {
       gross=Number(gross) 
    }
    if (gross>0) {
        grossMonthlySalary=gross;
        break
    }else{
        alert(`enter a number greater than zero`)
    }
    
    
}
console.log(
    `gross salary is ${`grossMonthlySalary`}its type ${`typeof grossMonthlySalary`}`
);

let nssftier1=null;
let nssftier2=(grossMonthlySalary-9000)*0.06
if (grossMonthlySalary<=9000) {
    nssftier1=grossMonthlySalary*0.06

}
let nssf=nssftier1+nssftier2

let taxableIncome=grossMonthlySalary-nssf;
let paye=null;
let bracket1=24000;
let bracket2=32333;
let bracket3=500000;
let bracket4=800000;

let band1=bracket1*0.10;
let band2=(bracket2-bracket1)*0.25;
let band3=(bracket3-bracket2)*0.30;
let band4=(bracket4-bracket3)*0.325;

if (taxableIncome<=24000) {
    paye=band1
}else if (taxableIncome>24000 && taxableIncome<=32333) {
    paye=(taxableIncome-bracket1)*0.25 + band1
}else if (taxableIncome>32333 && taxableIncome<=500000) {
    paye=(taxableIncome-bracket2)*0.30+band1+band2
}else if (taxableIncome>500000 && taxableIncome<=800000) {
    paye=(taxableIncome-bracket3)*0.325+band1+band2+band3
}else{(taxableIncome-bracket4)*0.35+band1+band2+band3+band4}

//shif
const shif=grossMonthlySalary*0.0275;
//housing levy
const levy=grossMonthlySalary*0.015;

let personalRelief=2400;
let grossPaye=paye-personalRelief;
//total deduction
let totalDeduction=nssf+grossPaye+shif+levy;
let netSalary=grossMonthlySalary-totalDeduction;

alert(`
    grossMonthlySalary ${grossMonthlySalary}
    nssf ${nssf}
    taxableIncome ${taxableIncome}
    paye ${paye}
    grossPaye ${grossPaye}
    personalRelief ${personalRelief}
    totalDeduction ${totalDeduction}
    netSalary ${netSalary}`)







    

    



