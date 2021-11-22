<script>
  import './global.css'
  import Logo from './lib/Logo.svelte'
  import Home from './routes/Home.svelte'
  import Drawer, { Content, Title as DrawerTitle, Header } from '@smui/drawer'
  import IconButton from '@smui/icon-button'
  import List, { Graphic, Item, Text } from '@smui/list'
  import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar'
  import 'svelte-material-ui/bare.css'
  import Router from 'svelte-spa-router'

  const routes = {
    '/': Home,
  }

  let open = false
  let topAppBar
</script>

<Drawer bind:open fixed={false} style="z-index: 20000;" variant="modal">
  <Header>
    <DrawerTitle><Logo></Logo></DrawerTitle>
  </Header>
  <Content>
    <List>
      <Item href="#/">
        <Graphic class="material-icons" aria-hidden="true">home</Graphic>
        <Text>Home</Text>
      </Item>
    </List>
  </Content>
</Drawer>
<TopAppBar bind:this={topAppBar} style="height: 64px /* computed */; z-index: 10000;" variant="standard">
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={() => open = true}>menu</IconButton>
      <Title>Home</Title>
    </Section>
    <Section align="end" toolbar></Section>
  </Row>
</TopAppBar>
<div class="drawer-cover" class:hidden={!open} on:click={() => open = false}></div>
<AutoAdjust style="display: flex; flex-direction: column; min-height: 100vh;" {topAppBar}>
  <Router {routes}></Router>
</AutoAdjust>

<style>
  :global(body) {
    margin: 0;
  }

  .drawer-cover {
    background-color: rgba(0, 0, 0, 20%);
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 15000;
  }

  .hidden {
    display: none;
  }
</style>