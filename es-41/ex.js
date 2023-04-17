const container = document.querySelector('#container');

async function fetchList(){
 const response = await fetch('https://jsonplaceholder.typicode.com/todos/4')
 const result = await response.json()

 const dataTitle = document.createElement('h2');
 dataTitle.innerHTML = result.title;
 container.append(dataTitle);

 const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if(result.completed == true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false
    }
    container.appendChild(checkbox);
  }

  fetchList();
