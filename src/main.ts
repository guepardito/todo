let noteCounter: number = 0;

const noteContainer = document.getElementById('note-container');
const newNoteContainer = document.getElementById('new-note-container');

function addCreateNoteListener(): void {
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

function addNoteEditListener(id: string): void {
  document.getElementById(id)?.addEventListener("click", () => {
    noteForm("edit");
  });
}

function createNote(title: string, text: string): void {
  // crear un nuevo elemento <section> que contenga la nota
  const section: HTMLElement = document.createElement("section");
  section.id = noteCounter.toString();
  section.classList.add("note");

  let editButtonId: string = "edit-note-button-" + noteCounter.toString();
  let downloadButtonId: string = "download-note-button-" + noteCounter.toString();
  let deleteButtonId: string = "delete-note-button-" + noteCounter.toString();

  section.innerHTML = `
    <h2>${title}</h2>
    <p>${text}</p>
    <div id="note-button-container">
      <button id=${editButtonId} class="edit-note-button note-button">
        <img src="images/pencil.svg" alt="Edit">
      </button>
      <button id=${downloadButtonId} class="download-note-button note-button">
        <img src="images/download.svg" alt="Descargar">
      </button>
      <button id=${deleteButtonId} class="delete-note-button note-button">
        <img src="images/cross.svg" alt="Eliminar">
      </button>
    </div>
  `;

  noteContainer?.appendChild(section);
  addNoteEditListener("edit-note-button-" + noteCounter.toString());
  noteCounter++;
}

function noteForm(method: string): void {
  if (document.getElementById("cr-noteContainer")) {
    return
  }
  let buttonText: string;
  if (method === "add") {
    buttonText = "Añadir Nota";
  } else if (method === "edit") {
    buttonText = "Moificar Nota"
  } else {
    buttonText = "Nota";
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
      <button id="add-note" class="addButton">${buttonText}</button>  
    </div>
  `;

  newNoteContainer?.appendChild(noteForm);
}

document.getElementById("newNoteBtn")?.addEventListener("click", () => {
  noteForm("add");
  addCreateNoteListener();
});

document.onkeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    document.getElementById("cr-noteContainer")?.remove();
  }
}

createNote("hola", "holis");
createNote("hola", "holis");
createNote("hola", "holis");
createNote("hola", "holis");
createNote("hola", "holis");
