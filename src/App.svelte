<script>
  import Heading from './lib/Heading.svelte'
  import MapCard from './lib/MapCard.svelte'
  import LayoutGrid, { Cell } from '@smui/layout-grid'
  import 'svelte-material-ui/bare.css'
</script>

<main>
  <Heading></Heading>
  <LayoutGrid>
    {#each Array(1) as _}
      <Cell span={6}>
        <MapCard></MapCard>
      </Cell>
    {/each}
  </LayoutGrid>
</main>

<style></style>