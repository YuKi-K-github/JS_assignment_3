
document.addEventListener('DOMContentLoaded', function() {
  const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
  const addTaskTarget = document.getElementsByClassName('addTask-target')[0];
  const addTaskValue = document.getElementsByClassName('addTask-value')[0];
  
  let nextId = 0;
  const todos = [];
  let tableItem;
  let idSpanTd;
  let taskSpanTd;
  let createButtonTd;
  let removeButtonTd;

  const addTask = (task, id) => {    
    //要素内のHTML文章を変更する
    idSpanTd.innerText = id;
    taskSpanTd.innerText = task;
    //生成したテーブル要素をブラウザに表示する
    tableItem.append(idSpanTd);
    tableItem.append(taskSpanTd);
    addTaskTarget.appendChild(tableItem);
    return(task,id)
  };
  let removeButton;
  let createButton;
  const addButton = (button) => {
    //要素内のHTML文章を変更する
    createButton.innerText = '作業中';
    removeButton.innerText = '削除';
    //生成したテーブル要素をブラウザに表示する
    tableItem.append(createButtonTd);
    tableItem.append(removeButtonTd);
    addTaskTarget.appendChild(tableItem);
    //生成したbutton要素を生成する
    createButtonTd.append(createButton);
    removeButtonTd.append(removeButton); 
    return(button)
    };
    //追加ボタンをクリックした際にタスクを追加する処理を行う
  addTaskTrigger.addEventListener('click', () => {
     //テーブル要素を生成する　td要素を作る
     //Button要素を生成する
     tableItem = document.createElement('tr');
     idSpanTd = document.createElement('td');
     taskSpanTd = document.createElement('td');
     createButtonTd = document.createElement('td');
     removeButtonTd = document.createElement('td');
     removeButton = document.createElement('button');
     createButton = document.createElement('button');
     const task = addTaskValue.value;
     addTask(task, nextId++);
     addButton();
     addTaskValue.value = '';
    });
  //チェックリスト用オブジェクト
  const todo = {
     task: 'taskSpanTd',
     status: '作業中'
    };
  todos.push(todo);
  
  });