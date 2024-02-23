const noteList = document.getElementById("note-list");
const newNoteInput = document.getElementById("new-note");

function addNote() {
  const noteText = newNoteInput.value;
  if (noteText.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${noteText}</span>
      <input type="text" class="edit-input">
      <button onclick="editNote(this)">Edit</button>
      <button onclick="deleteNote(this)">Delete</button>
    `;
    noteList.appendChild(li);
    newNoteInput.value = "";
  }
}

function editNote(button) {
  const li = button.parentNode;
  const span = li.querySelector("span");
  const input = li.querySelector(".edit-input");
  const editButton = li.querySelector("button");
  if (input.style.display === "none") {
    input.style.display = "inline-block";
    span.style.display = "none";
    input.value = span.textContent;
    editButton.textContent = "Save";
  } else {
    input.style.display = "none";
    span.style.display = "inline-block";
    span.textContent = input.value;
    editButton.textContent = "Edit";
  }
}

function deleteNote(button) {
  const li = button.parentNode;
  noteList.removeChild(li);
}
