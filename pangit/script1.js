let availableKeywords = [
    'ang pogi',
    'mo naman',
    'tadz sobra',
    'haysss',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result=availableKeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML='';
    }
}
function display(result){
    resultsBox.innerHTML = ''; // Clear the previous content
    result.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.addEventListener('click', () => selectInput(listItem));
        resultsBox.appendChild(listItem);
    });
}


function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML='';
}