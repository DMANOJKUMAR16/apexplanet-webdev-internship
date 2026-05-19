const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        alert("Please enter a valid email address.");

        return;
    }

    alert("Form submitted successfully!");

    form.reset();
});

const addTaskBtn = document.getElementById("addTaskBtn");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
    <span class="task-text">${taskText}</span>

    <div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </div>
   `;

    taskList.appendChild(li);

    taskInput.value = "";

    const deleteBtn = li.querySelector(".delete-btn");
    const editBtn = li.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", function() {

        li.remove();

    });
    editBtn.addEventListener("click", function() {

    const taskSpan = li.querySelector(".task-text");

    const updatedTask = prompt(
        "Update your task:",
        taskSpan.textContent
    );

    if (updatedTask !== null && updatedTask.trim() !== "") {

        taskSpan.textContent = updatedTask;

    }

 });

});