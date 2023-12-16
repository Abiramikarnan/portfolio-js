var tablinks = document.getElementsByClassName('tab-links');

var tabcontents = document.getElementsByClassName('tab-contents');
console.log(tabcontents)

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}


// const myForm = document.getElementById('myForm')

// myForm.addEventListener('submit', function (event) {
//     // Prevent the default form submission
//     event.preventDefault();

// const name = document.getElementById('name').value;
// const email = document.getElementById('email').value;
// const message = document.getElementById('message').value;

// console.log('Name:' +name);
// console.log('Email:' +email);
// console.log('Message:' +message);
// })


const scriptURL = 'https://script.google.com/macros/s/AKfycbwcV0H9BCj53rwc2VVG-wDX2t25g00WW4j8EZPbxIvXVMZ8ubUcl3f96uxln47QxEFtFQ/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(res => {
        console.log(res)
        msg.innerHTML= "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    
  })