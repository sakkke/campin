<script>
  import './global.css'
  import Logo from './lib/Logo.svelte'
  import Help from './routes/Help.svelte'
  import Home from './routes/Home.svelte'
  import Drawer, { Content, Title as DrawerTitle, Header } from '@smui/drawer'
  import IconButton from '@smui/icon-button'
  import List, { Graphic, Item, Text } from '@smui/list'
  import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar'
  import 'svelte-material-ui/bare.css'
  import Router, { location } from 'svelte-spa-router'

  const routes = {
    '/': Home,
    '/help': Help,
  }

  let open = false
  let topAppBar

  function closeDrawer () {
    open = false
  }

  function openDrawer () {
    open = true
  }
</script>

<Drawer bind:open style="z-index: 20000;" variant="modal">
  <Header>
    <DrawerTitle><Logo></Logo></DrawerTitle>
  </Header>
  <Content>
    <List>
      <Item
        activated={$location === '/'}
        href="#/"
        on:click={() => closeDrawer()}
      >
        <Graphic class="material-icons" aria-hidden="true">home</Graphic>
        <Text>Home</Text>
      </Item>
      <Item
        activated={$location === '/help'}
        href="#/help"
        on:click={() => closeDrawer()}
      >
        <Graphic class="material-icons" aria-hidden="true">help</Graphic>
        <Text>Help</Text>
      </Item>
    </List>
  </Content>
</Drawer>
<TopAppBar bind:this={topAppBar} style="height: 64px /* computed */; z-index: 10000;" variant="standard">
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={() => openDrawer()}>menu</IconButton>
      <Title>Home</Title>
    </Section>
    <Section align="end" toolbar></Section>
  </Row>
</TopAppBar>
<div class="drawer-cover" class:hidden={!open} on:click={() => closeDrawer()}></div>
<AutoAdjust style="display: flex; flex-direction: column; min-height: calc(100vh - 64px /* computed */);" {topAppBar}>
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