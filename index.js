function addTask() {
    const task = document.getElementById('input-box').value;
    const ul = document.getElementById('list-container');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    document.getElementById('input-box').value = '';
}