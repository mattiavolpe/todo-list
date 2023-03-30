/*
MILESTONE 1
Realizzare un'applicazione per inserire delle task in una lista.
La lista avrà delle task iniziali da stampare in pagina.

MILESTONE 2
Tramite un input ed un pulsante permettiamo all'utente di inserire una nuova task e visualizzare la lista aggiornata.

MILESTONE 3
L'utente non deve poter inserire una task vuota.
Le task devono avere almeno 3-5 caratteri.

MILESOTNE 4
Se l'utente clicca sulla task  (o su un pulsante nella task) la può marcare come completa e rimuoverla dalla lista di task da completare.
Se l'utente ha completato tutte le task mostriamo un messaggio.

BONUS:
Man mano che le task vengono completate le visualizziamo in una lista a parte
*/

const { createApp } = Vue
  
  createApp({
    data() {
      return {
        showWarning: false,
        errorMessage: "Inserisci almeno 5 caratteri",
        newTask: "",
        completedTasks: [],
        tasks: ["Learn HTML", "Learn CSS", "Learn JS", "Learn PHP",],
      }
    },
    methods: {
      addTask() {
        if (this.newTask.length >= 5) {
          this.tasks.unshift(this.newTask);
          this.newTask = "";
          this.showWarning = false;
        } else {
          this.showWarning = true;
        }
      },
      completeTask(index) {
        this.completedTasks.push(this.tasks[index]);
        this.tasks.splice(index, 1);
      }
    }
  }).mount('#app')