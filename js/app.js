// immediate invoked function expression
(function() {
  const pictures = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4',
    ];
// setup the counnter
let counter = 0;
// select buttons
const btn = document.querySelectorAll('.btn');
// console.log(btn);
btn.forEach(function(btn){
  btn.addEventListener('click', function(e){
e.preventDefault();
// get event target
let value = e.target;
console.log(value);
// setting an if and else statement
if (value.classList.contains('btn-left')){
  counter--;
  if (counter < 0){
    counter = pictures.length - 1;
  }
  console.log(counter);
  document.querySelector('.img-container').style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`
}
  })
})
})();

