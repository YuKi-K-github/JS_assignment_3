  const input_Text = document.getElementById('input-todo-text');
  const add_Button = document.getElementById('add-button');
  const table_Body = document.getElementById('todo-body');

  const todos = [];

  add_Button.addEventListener('click', (event) => {
    const todo = { comment: input_Text.value, status: '作業中'}
    input_Text.focus();
    if (input_Text.value) {
      todos.push(todo);
      input_Text.value = '';
      showTodos();
    }
  });

  const showTodos = () => {
    table_Body.textContent = '';

    todos.forEach((todo, number) => {
      const tableRecord = document.createElement('tr');
      table_Body.appendChild(tableRecord);

      const tableId = document.createElement('td');
      const tableComment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableDelete = document.createElement('td');

      tableId.textContent = number;
      tableComment.textContent = todo.comment;

      tableRecord.appendChild(tableId);
      tableRecord.appendChild(tableComment);
      tableRecord.appendChild(tableStatus);
      tableRecord.appendChild(tableDelete);

      tableStatus.appendChild(createStatusButton());
      tableDelete.appendChild(createDeleteButton(tableRecord));
    });
  };

  const createStatusButton = () => {
    const statusButton = document.createElement('button');
    statusButton.textContent = '作業中';
    return statusButton;
  };

const createDeleteButton = (tableRecord) => {
  var index = tableRecord.rowIndex-1;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => {
    todos.splice(index, 1);
    showTodos();
  });
  return deleteButton;
};