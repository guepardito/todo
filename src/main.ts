let noteCounter: number = 0;

const noteContainer = document.getElementById('note-container');
const newNoteContainer = document.getElementById('new-note-container');

function addNoteListener(): void {
  document.getElementById("add-note")?.addEventListener("click", () => {
    const titleInput = document.getElementById("cr-noteTitle") as HTMLInputElement;
    const textInput = document.getElementById("cr-noteText") as HTMLInputElement;

    if (titleInput && textInput) {
      const title: string = titleInput.value;
      const text: string = textInput.value;

      if (text) {
        if (title) {
          createNote(title, text);
        } else {
          createNote("Nota " + noteCounter, text);
        }

        document.getElementById("cr-noteContainer")?.remove();
      } else {
        alert("Introduce un texto para crear la nota");
      }
    }
  });
}

function createNote(title: string, text: string): void {
  // crear un nuevo elemento <section> que contenga la nota
  const section: HTMLElement = document.createElement("section");
  section.id = noteCounter.toString();
  section.classList.add("note");

  section.innerHTML = `
    <h2>${title}</h2>
    <p>${text}</p>
  `;

  noteContainer?.appendChild(section);
  noteCounter++;
}

function createNoteForm(): void {
  if (document.getElementById("cr-noteContainer")) {
    return
  }
  const noteForm: HTMLDivElement = document.createElement("div");
  noteForm.id = "note-form";
  noteForm.innerHTML = `
    <div id="cr-noteContainer">
      <div class="cr-noteInputContainer">
        <label for="cr-noteTitle">Titulo</label><input id="cr-noteTitle" type="text" min="1" max="64" step="1"/>
      </div>
      <div class="cr-noteInputContainer">
        <label for="cr-noteText">Texto:</label><textarea name="text" id="cr-noteText" cols="30" rows="10" ></textarea>
      </div>
      <button id="add-note" class="addButton">Añadir nota</button>  
    </div>
  `;

  newNoteContainer?.appendChild(noteForm);
}

document.getElementById("newNoteBtn")?.addEventListener("click", () => {
  createNoteForm();
  addNoteListener();
});

document.onkeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    document.getElementById("cr-noteContainer")?.remove();
  }
}
