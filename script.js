console.log("Hello world");
let element = document.getElementById('test');
element.innerText = new Date();
console.log({doc: element});

function setText(){
    document.getElementById('test').innerText = 'hello onclick';
}

document.querySelector('#coralbtn').addEventListener('click', function() {
    let className = document.querySelector('#coralbtn').className;
    if(className == 'btn btn-coral'){
        document.querySelector('#coralbtn').className = 'btn btn-danger';
    } else {
        document.querySelector('#coralbtn').className = 'btn btn-coral';
    }
});