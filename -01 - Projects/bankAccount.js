const bankAccount = {
    bankHolder: "Nadir Ashraf",
    accountNumber: 1234567890,
    balance: 500,

    deposit: function(amount){
        this.balance += amount;
        return amount;
    },

    withdraw: function(amount){
        if(this.balance < amount){
            return "Insufficient balance"
        }
        else{
            this.balance -= amount;
            return amount;
        }
    }
}


console.log(`Deposited: ${bankAccount.deposit(500)}`);
console.log(`Your Bank balance: ${bankAccount.balance}`);

console.log(`Withdraw Amount: ${bankAccount.withdraw(22)}`);
console.log(`Bank balance: ${bankAccount.balance}`);

console.log(`Withdraw Amount: ${bankAccount.withdraw(100_000)}`);