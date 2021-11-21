<script>
  import './global.css'
  import Heading from './lib/Heading.svelte'
  import MapCard from './lib/MapCard.svelte'
  import XCenter from './lib/XCenter.svelte'
  import YCenter from './lib/YCenter.svelte'
  import LayoutGrid, { Cell } from '@smui/layout-grid'
  import 'svelte-material-ui/bare.css'
</script>

<main>
  <XCenter>
    <Heading></Heading>
  </XCenter>
  <YCenter style="height: 100%;">
    <LayoutGrid style="background-color: rgba(255, 255, 255, 20%); border-radius: 20px; margin: 20px; width: 100%;">
      {#each Array(1) as _}
        <Cell span={6}>
          <MapCard></MapCard>
        </Cell>
      {/each}
    </LayoutGrid>
  </YCenter>
</main>

<style>
  :global(body, h1) {
    margin: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>