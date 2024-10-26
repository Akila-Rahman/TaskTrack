document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const noteColorInput = document.getElementById('note-color');
    const notesContainer = document.getElementById('notes-container');

    addNoteBtn.addEventListener('click', addNote);

    function addNote() {
        const noteText = noteInput.value.trim();
        const noteColor = noteColorInput.value;

        if (noteText) {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.style.backgroundColor = noteColor;
            noteElement.innerHTML = `
                <textarea readonly>${noteText}</textarea>
                <div class="note-actions">
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            notesContainer.appendChild(noteElement);
            noteInput.value = '';
        }
    }

    notesContainer.addEventListener('click', handleNoteActions);

    function handleNoteActions(e) {
        if (e.target.classList.contains('delete-btn')) {
            const note = e.target.closest('.note');
            notesContainer.removeChild(note);
        }
    }
});
