const addNoteBtn =
    document.getElementById("addNoteBtn");

const noteInput =
    document.getElementById("noteInput");

const notesContainer =
    document.getElementById("notesContainer");

/* Local Storage */

let notes =
    JSON.parse(localStorage.getItem("notes")) || [];

/* Display Notes */

function displayNotes() {

    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {

        const noteCard =
            document.createElement("div");

        noteCard.classList.add("note-card");

        noteCard.innerHTML = `

            <p>${note}</p>

            <div class="note-actions">

                <button class="edit-btn">
                    Edit
                </button>

                <button class="delete-btn">
                    Delete
                </button>

            </div>

        `;

        const editBtn =
            noteCard.querySelector(".edit-btn");

        const deleteBtn =
            noteCard.querySelector(".delete-btn");

        /* Edit Note */

        editBtn.addEventListener("click", function() {

            const updatedNote = prompt(
                "Edit your note:",
                note
            );

            if (
                updatedNote !== null &&
                updatedNote.trim() !== ""
            ) {

                notes[index] = updatedNote;

                localStorage.setItem(
                    "notes",
                    JSON.stringify(notes)
                );

                displayNotes();

            }

        });

        /* Delete Note */

        deleteBtn.addEventListener("click", function() {

            deleteNote(index);

        });

        notesContainer.appendChild(noteCard);

    });

}

/* Add Note */

addNoteBtn.addEventListener("click", function() {

    const noteText = noteInput.value.trim();

    if (noteText === "") {

        alert("Please write a note.");

        return;
    }

    notes.push(noteText);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    noteInput.value = "";

    displayNotes();

});

/* Delete Function */

function deleteNote(index) {

    notes.splice(index, 1);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    displayNotes();

}

/* Initial Render */

displayNotes();