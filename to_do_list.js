  const input_Text = document.getElementById('input-todo-text');
  const add_Button = document.getElementById('add-button');
  const table_Body = document.getElementById('todo-body');

  const todos = [];

  add_Button.addEventListener('click', (event) => {
    const todo = { id: todos.length, comment: input_Text.value, status: '作業中'}
    input_Text.focus();
    if (input_Text.value) {
      todos.push(todo);
      input_Text.value = '';
      radioChange()
    }
  });

  const showTodos = (todos) => {
    table_Body.textContent = '';

    todos.forEach((todo) => {
      const tableRecord = document.createElement('tr');
      table_Body.appendChild(tableRecord);

      const tableId = document.createElement('td');
      const tableComment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableDelete = document.createElement('td');

      tableId.textContent = todo.id;
      tableComment.textContent = todo.comment;

      tableRecord.appendChild(tableId);
      tableRecord.appendChild(tableComment);
      tableRecord.appendChild(tableStatus);
      tableRecord.appendChild(tableDelete);

      tableStatus.appendChild(createStatusButton(todo));
      tableDelete.appendChild(createDeleteButton(todo.id));
    });
  };

  const createStatusButton = (todo) => {
    const statusButton = document.createElement('button');
    statusButton.textContent = todo.status;
    statusButton.addEventListener('click', () => {
      if (todo.status === '作業中') {
        todo.status = '完了';
      } else {
        todo.status = '作業中';
      }
      showTodos(todos);
    });
    return statusButton;
  };

const createDeleteButton = (id) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => {
    todos.splice(id, 1);
    showTodos(todos);
    todos.reduce((Idnum, todo) => (todo.id = Idnum + 1), -1);
    showTodos(todos);
  });
  return deleteButton;
};

function radioChange() {
  const radioButton_All = document.getElementById('radio-all');
  const radioButton_Working = document.getElementById('radio-work');
  const radioButton_Done = document.getElementById('radio-done');

  if (radioButton_All.checked) {
    todos.slice();
    return showTodos(todos);
  } else if (radioButton_Working.checked) {
    const taskDoing = todos.filter((todo) => {
      return todo.status === '作業中';
    });
    return showTodos(taskDoing);
  } else if (radioButton_Done.checked) {
    const taskDone = todos.filter((todo) => {
      return todo.status === '完了';
    });
    return showTodos(taskDone);
  }
}