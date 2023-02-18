<script lang="ts">
    import type { FiltersType, ITodo } from '$root/types/todo'
  
    import AddTodo from './AddTodo.svelte'
    import Todo from './Todo.svelte'
    import TodosLeft from './TodosLeft.svelte'
    import FilterTodos from './FilterTodos.svelte'
    import ClearTodos from './ClearTodos.svelte'
  
    // state
    let todos: ITodo[] = [
      { id: '1e4a59703af84', text: 'Todo 1', completed: true },
      { id: '9e09bcd7b9349', text: 'Todo 2', completed: false },
      { id: '9e4273a51a37c', text: 'Todo 3', completed: false },
      { id: '53ae48bf605cc', text: 'Todo 4', completed: false },
    ]
  
    let selectedFilter: FiltersType = 'all'
  
    // computed
    $: todosAmount = todos.length
    $: incompleteTodos = todos.filter((todo) => !todo.completed).length
    $: filteredTodos = filterTodos(todos, selectedFilter)
    $: completedTodos = todos.filter((todo) => todo.completed).length
  
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
  
    function removeTodo(id: string): void {
      todos = todos.filter((todo) => todo.id !== id)
    }
  
    function editTodo(id: string, newTodo: string): void {
      let currentTodo = todos.findIndex((todo) => todo.id === id)
      todos[currentTodo].text = newTodo
    }
  
    function setFilter(newFilter: FiltersType): void {
      selectedFilter = newFilter
    }
  
    function filterTodos(todos: ITodo[], filter: FiltersType): ITodo[] {
      switch (filter) {
        case 'all':
          return todos
        case 'active':
          return todos.filter((todo) => !todo.completed)
        case 'completed':
          return todos.filter((todo) => todo.completed)
      }
    }
  
    function clearCompleted(): void {
      todos = todos.filter((todo) => todo.completed !== true)
    }
  </script>
  
  <main>
    <h1 class="title">todos</h1>
  
    <section class="todos">
      <AddTodo {addTodo} {toggleCompleted} {todosAmount} />
  
      {#if todosAmount}
        <ul class="todo-list">
          {#each filteredTodos as todo (todo.id)}
            <Todo {todo} {completeTodo} {removeTodo} {editTodo} />
          {/each}
        </ul>
  
        <div class="actions">
          <TodosLeft {incompleteTodos} />
          <FilterTodos {selectedFilter} {setFilter} />
          <ClearTodos {clearCompleted} {completedTodos} />
        </div>
      {/if}
    </section>
  </main>
  
  <!-- ... -->
  