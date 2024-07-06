function Task() {
    var input = document.getElementById("task-input");
    var task = input.value.trim();
    if (task !== "") {
      var li = document.createElement("li");
      var taskText = document.createTextNode(task);
      var completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.onclick = function() {
        li.classList.toggle("completed");
      };
      li.appendChild(taskText);
      li.appendChild(completeButton);
      document.getElementById("task-list").appendChild(li);
      input.value = "";
    }
  }