<script lang="ts">
    type ClearCompletedType = () => void
    type CompletedTodosType = number

  
  
    export let clearCompleted: ClearCompletedType
    export let completedTodos: CompletedTodosType
  </script>
  <!-- Apagar tarefas que foram concluidas OBS: -->
  <button
    on:click={clearCompleted}
    class:hidden={completedTodos === 0}
    class="clear-completed"
  >
    Apagar Tarefa concluida
  </button>
  