const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener ('submit', formfunc)
// функцию фиксирую как аргумет

function formfunc(event) {
  event.preventDefault(); 

  const taskText = todoInput.value;
// что введем в инпуте будет хранится в taskText


// Создаем атрибут <li>
const newTask = document.createElement ('li'); 
// Внутренее наполнение li будет taskText
  newTask.innerText = taskText;
 

   
  // создаем кнопку удалить

  const deleteItem = document.createElement ('button')
  // Coздаем атрибут role внутри кнопки и задаем ему button
  deleteItem.setAttribute('role', 'button');
  deleteItem.innerText = '-';
  deleteItem.style['margin-right'] = '20px';
  deleteItem.style['backgroundColor'] = ' rgb(224, 223, 223)';
  
 
  // Вместе с текстом задачи будет добавлятся и кнопка
  newTask.append(deleteItem);
  // Прописываем событие, что буудет происходить когда она будет удалятся

  deleteItem.addEventListener('click', function(){
    // какой ближе к нему находится li тот this и удалит
      this.closest('li').remove();

  });

   // Добавляю тег в контейнер методом
   todoList.append(newTask);

   //  создаем эллемент текста через разметку
     // const li = `<li>${taskText}</li>`;
     // // вызываем метод и вставляем текст перед концом контейнера в конце списка
     // todoList.insertAdjacentHTML('beforeend', li)
   
     todoInput.value = ' ';
     todoInput.focus(); //оставляет курсор на месте

};