// Theme color changed
document.getElementById("btn-theme").addEventListener("click", function () {
  let documentClasses = document.body.classList;

  for (let cls of documentClasses) {
    // Remove background color class from body
    if (cls.startsWith("bg-")) documentClasses.remove(cls);
  }

  // Generate random number and it's flooring because of fractional value
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Add new background color
  documentClasses.add(`bg-[rgb(${r}_${g}_${b})]`);
});

// Current date
const currentDate = getFormatedDate();

// Assign weekday
document.getElementById("week-day").innerText = currentDate.weekDay;
// Assign date
document.getElementById("current-date").innerText = currentDate.formatedDate;

const taskbBtns = document.querySelectorAll(".btn-task-completed");
for (const btn of taskbBtns) {
  btn.addEventListener("click", function (event) {
    //1. Task Assigned update
    const taskAssignedElement = document.getElementById("task-assigned");
    const taskAssigned = parseInt(taskAssignedElement.innerText) - 1;
    taskAssignedElement.innerText = taskAssigned;

    //2. Nav number update
    const totalTaskCompletedElement = document.getElementById(
      "total-task-completed"
    );
    const totalTaskCompleted =
      parseInt(totalTaskCompletedElement.innerText) + 1;

    totalTaskCompletedElement.innerText = totalTaskCompleted;

    //3. Add in history
    const historyElement = document.getElementById("task-completed-history");
    const newElement = document.createElement("p");
    newElement.classList.add(
      "mt-6",
      "bg-[rgb(244_247_255)]",
      "p-3",
      "rounded-md"
    );

    // Clear history
    // Get task header
    const cardElement = event.target.closest("div.card");
    const headerText = cardElement.querySelector("h3").innerText;

    newElement.innerText = `You have complete the task '${headerText}' at ${getFormatedTime()}.`;
    historyElement.appendChild(newElement);

    //5. Show alert
    alert("Board updated successfully.");

    // 6. Completed alert
    if (taskAssigned === 0) {
      alert("Congrates!!! You have completed ");
    }

    //4. Button disabled
    const btn = event.target;
    btn.classList.remove("text-white");
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-gray-400", "text-gray-300");
    btn.disabled = true;
  });
}

document
  .getElementById("btn-clear-history")
  .addEventListener("click", function () {
    document.getElementById("task-completed-history").innerHTML = "";
  });

document
  .getElementById("discover-something-new")
  .addEventListener("click", function () {
    window.location.href = "./blog.html";
  });
