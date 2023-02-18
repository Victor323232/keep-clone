<script lang="ts">
    type AddTodoType = (todo: string) => void
    type ToggleCompletedType = (event: MouseEvent) => void
    type TodosAmountType = number
  
    export let addTodo: AddTodoType
    export let toggleCompleted: ToggleCompletedType
    export let todosAmount: TodosAmountType
  
    let todo = ''
  
    function handleSubmit() {
      addTodo(todo)
      todo = ''
    }
  </script>
  <!-- Formulario pra adicionar tarefas-->
  <form on:submit|preventDefault={handleSubmit}>
      {#if todosAmount > 0}
      <input
        on:click={toggleCompleted}
        type="checkbox"
        id="toggle-all"
        class="toggle-all"
      />
        <label aria-label="Marque todas tarefas concluidas" for="toggle-all">
          Marque todas tarefas concluidas
        </label>
      {/if}
  
    <input
          bind:value={todo}
      id="new-todo"
      class="new-todo"
      placeholder="Escreva aqui sua tarefa"
      type="text"
      autofocus
    />
  </form>
  
  <!-- ... -->
  