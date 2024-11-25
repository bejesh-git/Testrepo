package com.QuizApp;

public class BankAccount {
	
	private double balance;
	private double withdraw;
	private double deposit;
	
	
	
	public BankAccount(double balance, double withdraw, double deposit) {
		super();
		this.balance = balance;
		this.withdraw = withdraw;
		this.deposit = deposit;
	}
	
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public double getWithdraw() {
		return withdraw;
	}
	public void setWithdraw(double withdraw) {
		this.withdraw = withdraw;
	}
	public double getDeposit() {
		return deposit;
	}
	public void setDeposit(double deposit) {
		this.deposit = deposit;
	}
	
	@Override
	public String toString() {
		return "BankAccount [balance=" + balance + ", deposit=" + deposit + ", withdraw=" + withdraw + "]";
	}
	
	public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
 
    public void withdraw(double amount) throws IllegalArgumentException {
        if (amount > balance || amount < 0) {
            throw new IllegalArgumentException("Insufficient balance"); //Exceptional handling
        }
        balance -= amount;
    }

}
