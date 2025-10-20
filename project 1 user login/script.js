document.getElementById('toggleBtn').addEventListener('click', function() {
    this.classList.toggle('fa-toggle-on');
    this.classList.toggle('fa-toggle-off');

// switching price.............
const priceList = document.querySelector('.price');
if(this.classList.contains('fa-toggle-on')){
     priceList.textContent = ('₹4999 - Yr.')
} else {
    priceList.textContent = ('₹499 - Mon.')
}

 
// Optional: Switch active 
    const monthly = document.querySelector('.toggle-plans .active');
    const yearly = document.querySelector('.toggle-plans span:not(.active)');
    
    monthly.classList.remove('active');
    yearly.classList.add('active');
});

//url clicked function...............


function showAlert(say,) {
    const print = document.createElement('div');
    print.className = 'alert-card';
    print.innerHTML = say;

    document.body.appendChild(print)

    setTimeout(() =>
        print.classList.add('show'));
    setTimeout(() => {
    setTimeout(() => print.classList.remove('show'))
    },2000)
}

document.getElementById('Product').addEventListener('click', function(){
    showAlert('<b>⚙️ please wait...</b><br>We are loading your content')
})

//login Modal..........

const loginBtn = document.querySelector('.login')
const modal = document.getElementById('loginModal')
const closeBtn = document.querySelector('.closeBtn')

// open login modal........

loginBtn.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'block';
})

//close login modal..........

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})

window.addEventListener('click', function(e){
   if(e.target === modal){
    modal.style.display = 'none';
   }
})

//login form submit......

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Login Successful!\nEmail " + email.value)
    modal.style.display = 'none';
})
