function UpdateBalance(Amount){
    const Balance = document.getElementById('Wallet');
    const BalanceValue = Balance.innerText;
    const NewBalance = BalanceValue - Amount;
    Balance.innerText = NewBalance;
}

function QuotaMovementDonations(){
    const Balance = document.getElementById('Wallet');
    const BalanceValue = Balance.innerText;

    const Donation = document.getElementById("QuotaDonationAmount");
    const DonationValue = parseInt(Donation.value);

    if((BalanceValue - DonationValue) < 0){
        console.log('Insufficient Balance');
    }
    else{
        const Donations = document.getElementById("Quota-Donations");
        const DonationsValue = parseInt(Donations.innerText);
    
        if (Number.isFinite(DonationValue) && !isNaN(DonationValue)) {
            Donations.innerText = DonationsValue + DonationValue;
        
            UpdateBalance(DonationValue);
    
        }
        else{
            console.log('Please enter a valid number');
        }
    }
    
    Donation.value = '';
}

function FeniDonations(){
    const Balance = document.getElementById('Wallet');
    const BalanceValue = Balance.innerText;

    const Donation = document.getElementById("FeniDonationAmount");
    const DonationValue = parseInt(Donation.value);

    if((BalanceValue - DonationValue) < 0){
        console.log('Insufficient Balance');
    }
    else{
        const Donations = document.getElementById("Feni-Donations");
        const DonationsValue = parseInt(Donations.innerText);
    
        if (Number.isFinite(DonationValue) && !isNaN(DonationValue)) {
            Donations.innerText = DonationsValue + DonationValue;
        
            UpdateBalance(DonationValue);
    
        }
        else{
            console.log('Please enter a valid number');
        }
    }
    
    Donation.value = '';
}

function NoakhaliDonations(){
    const Balance = document.getElementById('Wallet');
    const BalanceValue = Balance.innerText;

    const Donation = document.getElementById("NoakhaliDonationAmount");
    const DonationValue = parseInt(Donation.value);

    if((BalanceValue - DonationValue) < 0){
        console.log('Insufficient Balance');
    }
    else{
        const Donations = document.getElementById("Noakhali-Donations");
        const DonationsValue = parseInt(Donations.innerText);
    
        if (Number.isFinite(DonationValue) && !isNaN(DonationValue)) {
            Donations.innerText = DonationsValue + DonationValue;
        
            UpdateBalance(DonationValue);
    
        }
        else{
            console.log('Please enter a valid number');
        }
    }
    
    Donation.value = '';
}

