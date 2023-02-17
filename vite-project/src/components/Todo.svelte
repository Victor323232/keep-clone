<script lang="ts">
    import type { ITodo } from '$root/types/todo'
  
    type CompleteTodoType = (id: string) => void
    type RemoveTodoType = (id: string) => void
  
    export let todo: ITodo
    export let completeTodo: CompleteTodoType
    export let removeTodo: RemoveTodoType
  </script>
  
  <li class="todo">
    <div class="todo-item">
      <div>
        <input
          on:change={() => completeTodo(todo.id)}
          checked={todo.completed}
          id="todo"
          class="toggle"
          type="checkbox"
        />
        <label aria-label="Check todo" class="todo-check" for="todo" />
      </div>
      <span class:completed={todo.completed} class="todo-text">
        {todo.text}
      </span>
      <button
        aria-label="Remove todo"
        on:click={() => removeTodo(todo.id)}
        class="remove"
      />
    </div>
  
    <!-- <input class="edit" type="text" autofocus /> -->
  </li>
  
  <!-- ... -->
  