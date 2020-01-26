//function is_numeric(str){ // функция проверки для регистронезависимости
  //  return /^\d+$/.test(str);
//}

function onButtonClick() {
    const str = document.getElementById('inputArr').value;
    const pairsArr = str.split(' ')// по пробелам '12 23 43' => ['12', '23', '34']
    
    const pairs = [];
    const notPairs = [];
    
    
    const counts = {   // пустой объект куда заносятся значения вводимые пользователем

    }

    pairsArr.forEach(item => { //проверка того что попало в массив
        
        if (counts[item.toLowerCase()]) {  // если слово или есть в объекте
            counts[item.toLowerCase()]++ // его значение увеличивается 
        } else {
            counts[item.toLowerCase()] = 1 // если нет, то будет равно 1
        }
        
    })

    pairsArr.forEach(item => { //проверка того что попало в массив
        
        if (counts[item.toLowerCase()] === 1) {  // если значение всего 1 то заносится в правый
            notPairs.push(item)
        } else {
            pairs.push(item) // если больше 1
        }
        
    })
    console.log(counts);

    renderInElem( 
        render(pairs, notPairs),
        document.getElementById('columns')
    ) // вызов функции рендер

 } // end onButtonClick
function renderPairs(pairs) {
    return `${pairs.map(pair => `<p>${pair}</p>`).join(' ')}`  // преобразоваение блоков в тег р
}

function render(pairs, notPairs) { // функция отображения элементов создаются 2 блока и 2 класса куда отправляются элементы полученного массива
    return ` <h1 class="title"> Полученные результаты </h1>
    <div class="column pairs"> 
    <p>Парные</p>  
        ${renderPairs(pairs)}
    </div>
    <div class="column notPairs">
    <p>Не парные</p>
        ${renderPairs(notPairs)}
    </div>
    `;
}

function renderInElem(textHtml, elem) { // функция которая рендерит html в браузер
    elem.innerHTML = textHtml
}

//получить элемент с id button и добавить событие click и какая функция сработает при клике
document
    .getElementById('button')
    .addEventListener('click', onButtonClick);








/*       if (is_numeric(item)) {
                    if (item[0] === item[1]) { // если 0й элемент равено 1му элементу в массиве
                pairs.push(item) // пушится в новый массив pairs
            } else {
                notPairs.push(item) // или в новый массив notPairs
            }
        } else { // для регистронезависимости
            if (item[0].toLowerCase() === item[1].toLowerCase()) { 
                pairs.push(item)
            } else {
                notPairs.push(item)
            }
        }


       if (item.lenght === item.lenght || item[0] === item[1] ) {     
        pairs.push(item)           
    } else {
        notPairs.push(item)
    }

} else { // для регистронезависимости
    if (item[0].toLowerCase() === item[1].toLowerCase()) { 
        pairs.push(item)
    } else {
        notPairs.push(item)
    }
}
 */