<script lang="ts">
    import type { FiltersType } from '$root/types/todo'
  
    type SetFilterType = (newFilter: string) => void
  
    export let selectedFilter: FiltersType
    export let setFilter: SetFilterType
  
      let filters = ['Todos', 'Pendentes', 'Completos']
  </script>
  
  <div class="filters">
    {#each filters as filter}
      <button
        on:click={() => setFilter(filter)}
        class:selected={selectedFilter === filter}
        class="filter"
      >
        {filter}
      </button>
    {/each}
  </div>
  
  <!-- ... -->
  