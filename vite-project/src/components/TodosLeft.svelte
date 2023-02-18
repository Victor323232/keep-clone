<script lang="ts">
    export let incompleteTodos: number
  </script>
  <!-- contador de tarefas-->
  <span class="todo-count">
    {incompleteTodos}
    {incompleteTodos === 1 ? 'Tarefa' : 'Tarefas'} esquerda
  </span>
  