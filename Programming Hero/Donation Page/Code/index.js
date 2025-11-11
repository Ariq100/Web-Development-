function UpdateBalance(Amount){
    const Balance = document.getElementById('Wallet');
    const BalanceValue = Balance.innerText;
    const NewBalance = BalanceValue - Amount;
    Balance.innerText = NewBalance;

    alert('Thank you for your donation of ' + Amount + ' coins!');
}

function ShowHistory(){
    const DonationSection = document.getElementById('Donation');
    DonationSection.classList.add('hidden');

    const HistorySection = document.getElementById('Donation-History');
    HistorySection.classList.remove('hidden');
}

function ShowDonations(){
    const HistorySection = document.getElementById('Donation-History');
    HistorySection.classList.add('hidden');

    const DonationSection = document.getElementById('Donation');
    DonationSection.classList.remove('hidden');
}

function NoakhaliDonations(){
    const Balance = document.getElementById('Wallet');
    const BalanceValue = Balance.innerText;

    const Donation = document.getElementById("NoakhaliDonationAmount");
    const DonationValue = parseInt(Donation.value);

    if((BalanceValue - DonationValue) < 0){
        alert('Insufficient Balance');
    }
    else{
        const Donations = document.getElementById("Noakhali-Donations");
        const DonationsValue = parseInt(Donations.innerText);
    
        if (Number.isFinite(DonationValue) && !isNaN(DonationValue) && DonationValue>0) {
            Donations.innerText = DonationsValue + DonationValue;
        
            UpdateBalance(DonationValue);

            const DonationInfo = document.getElementById('Donation1').innerText;
            AddDonationHistory(DonationInfo, DonationValue)
        }
        else{
            alert('Please enter a valid number!!');
        }
    }
    
    Donation.value = '';
}

function QuotaMovementDonations(){
    const Balance = document.getElementById('Wallet');
    const BalanceValue = Balance.innerText;

    const Donation = document.getElementById("QuotaDonationAmount");
    const DonationValue = parseInt(Donation.value);

    if((BalanceValue - DonationValue) < 0){
        alert('Insufficient Balance');
    }
    else{
        const Donations = document.getElementById("Quota-Donations");
        const DonationsValue = parseInt(Donations.innerText);
    
        if (Number.isFinite(DonationValue) && !isNaN(DonationValue) && DonationValue>0) {
            Donations.innerText = DonationsValue + DonationValue;
        
            UpdateBalance(DonationValue);
            const DonationInfo = document.getElementById('Donation2').innerText;
            AddDonationHistory(DonationInfo, DonationValue)
        }
        else{
            alert('Please enter a valid number!!');
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
        alert('Insufficient Balance');
    }
    else{
        const Donations = document.getElementById("Feni-Donations");
        const DonationsValue = parseInt(Donations.innerText);
    
        if (Number.isFinite(DonationValue) && !isNaN(DonationValue && DonationValue>0)) {
            Donations.innerText = DonationsValue + DonationValue;
        
            UpdateBalance(DonationValue);
            const DonationInfo = document.getElementById('Donation3').innerText;
            AddDonationHistory(DonationInfo, DonationValue)
        }
        else{
            alert('Please enter a valid number!!');
        }
    }
    
    Donation.value = '';
}

function AddDonationHistory(DonationInfo, Amount){
    const cardSection = document.getElementById('card-section');
    const newCard = document.createElement('li');
    newCard.classList.add('Donation-cards', 'mx-auto');

    const title = Amount.toString() + ' Coin is Donated for ' + DonationInfo;

    newCard.innerHTML = `
        <h2>${title}</h2>
        <p>Date : ${new Date().toString()}</p>
    `;
    cardSection.appendChild(newCard);
}


function btnFeatureHistory(){
    const btnHistory = document.getElementById('btn-history');
    btnHistory.classList.add('bg-[#7CDF64]');
    btnHistory.classList.remove('bg-white');
    btnHistory.classList.remove('text-gray-600');
    btnHistory.classList.add('text-black');

    const btnDonations = document.getElementById('btn-donations');
    btnDonations.classList.remove('bg-[#7CDF64]');
    btnDonations.classList.add('bg-white');
    btnDonations.classList.add('text-gray-600');
    btnDonations.classList.remove('text-black');
}

function btnFeatureDonations(){
    const btnHistory = document.getElementById('btn-donations');
    btnHistory.classList.add('bg-[#7CDF64]');
    btnHistory.classList.remove('bg-white');
    btnHistory.classList.remove('text-gray-600');
    btnHistory.classList.add('text-black');

    const btnDonations = document.getElementById('btn-history');
    btnDonations.classList.remove('bg-[#7CDF64]');
    btnDonations.classList.add('bg-white');
    btnDonations.classList.add('text-gray-600');
    btnDonations.classList.remove('text-black');
}


// document.getElementById('btn-color').style.backgroundColor =  '#7b9e87';