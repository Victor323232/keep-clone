<script lang="ts">
    import type { ITodo } from '$root/types/todo'
  
    import AddTodo from './AddTodo.svelte'
    import Todo from './Todo.svelte'
  
    // state
    let todos: ITodo[] = [
      { id: '1e4a59703af84', text: 'Todo 1', completed: true },
      { id: '9e09bcd7b9349', text: 'Todo 2', completed: false },
      { id: '9e4273a51a37c', text: 'Todo 3', completed: false },
      { id: '53ae48bf605cc', text: 'Todo 4', completed: false },
    ]
  
    // computed
    $: todosAmount = todos.length
  
    // methods
    function generateRandomId(): string {
      return Math.random().toString(16).slice(2)
    }
  
    function addTodo(todo: string): void {
      let newTodo: ITodo = {
        id: generateRandomId(),
        text: todo,
        completed: false,
      }
      todos = [...todos, newTodo]
    }
  
    function toggleCompleted(event: MouseEvent): void {
      let { checked } = event.target as HTMLInputElement
  
      todos = todos.map((todo) => ({
        ...todo,
        completed: checked,
      }))
    }
  
    function completeTodo(id: string): void {
      todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    }
  </script>
  
  <main>
    <h1 class="title">todos</h1>
  
    <section class="todos">
      <AddTodo {addTodo} {toggleCompleted} {todosAmount} />
  
      {#if todosAmount}
        <ul class="todo-list">
          {#each todos as todo (todo.id)}
            <Todo {todo} {completeTodo} />
          {/each}
        </ul>
  
        <div class="actions">
          <span class="todo-count">0 left</span>
          <div class="filters">
            <button class="filter">All</button>
            <button class="filter">Active</button>
            <button class="filter">Completed</button>
          </div>
          <button class="clear-completed">Clear completed</button>
        </div>
      {/if}
    </section>
  </main>
  
  <!-- ... -->
