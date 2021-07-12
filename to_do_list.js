
document.addEventListener('DOMContentLoaded', function() {
  const add_task_target = document.getElementsByClassName('add-task-target')[0];
  const add_task_value = document.getElementsByClassName('add-task-value')[0];
  const add_task_trigger = document.getElementsByClassName('add-task-trigger')[0];
  
  let nextId = 0;
  const todos = [];
  let tableItem;
  let id_Span_Td;
  let task_Span_Td;
  let statusButtonTd;
  let removeButtonTd;
  
  //追加ボタンをクリックした際にタスクを追加する処理を行う
　 add_task_trigger.addEventListener('click', () => {
    //テーブル要素を生成する　td要素を作る
    //Button要素を生成する
    tableItem = document.createElement('tr');
    id_Span_Td = document.createElement('td');
    task_Span_Td = document.createElement('td');
    statusButtonTd = document.createElement('td');
    removeButtonTd = document.createElement('td');
    removeButton = document.createElement('button');
    statusButton = document.createElement('button');
    const task = add_task_value.value;
    add_task(task, nextId++);
    addButton();
    add_task_value.value = '';
    removeButton.addEventListener('click', delete_element, false);
  });

  const add_task = (task, id) => {
    //要素内のHTML文章を変更する
    id_Span_Td.innerText = id;
    task_Span_Td.innerText = task;
    //生成したテーブル要素をブラウザに表示する
    tableItem.append(id_Span_Td);
    tableItem.append(task_Span_Td);
    add_task_target.appendChild(tableItem);
    return(task,id)
  };
  let statusButton;
  let removeButton;
  const addButton = (button) => {
    //要素内のHTML文章を変更する
    statusButton.innerText = '作業中';
    removeButton.innerText = '削除';
    //生成したテーブル要素をブラウザに表示する
    tableItem.append(statusButtonTd);
    tableItem.append(removeButtonTd);
    add_task_target.appendChild(tableItem);
    //生成したbutton要素を生成する
    statusButtonTd.append(statusButton);
    removeButtonTd.append(removeButton); 
    return(button)
    };
  //チェックリスト用オブジェクト
  const todo = {
    task: 'task_Span_Td',
    status: '作業中'
    };
  todos.push(todo);

  function delete_element () {
    let table_tag = this.closest ('tr');
    if (table_tag)
    table_tag.remove ();
    updateId();
  }  

  const updateId = () => {
    nextId = 0;
    for(i = 0; i <= todos.length; i++){
      id_Span_Td[i].innerText = nextId;
      tableItem.append(id_Span_Td);
      add_task_target.appendChild(tableItem);
      nextId++;
    }
  }
});
