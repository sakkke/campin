<script>
  import { stats } from '../stores'
  import DataTable, { Body, Cell as TableCell, Head, Row } from '@smui/data-table'
  import LayoutGrid, { Cell } from '@smui/layout-grid'
</script>

<LayoutGrid style="background-color: rgba(255, 255, 255, 20%); border-radius: 20px; margin: 20px;">
  <Cell span={12}>
    <div class="cell-inner cell-stats-all">
      <div class="cell-content">
        <h2>All</h2>
        <DataTable style="width: 100%;" table$aria-label="Stats all">
          <Head>
            <Row>
              <TableCell>Key</TableCell>
              <TableCell>Value</TableCell>
            </Row>
          </Head>
          <Body>
            <Row>
              <TableCell>Number of camps</TableCell>
              <TableCell>{$stats.length}</TableCell>
            </Row>
          </Body>
        </DataTable>
      </div>
    </div>
  </Cell>
</LayoutGrid>

<style>
  .cell-content {
    padding: 20px;
  }

  .cell-inner {
    position: relative;
  }

  .cell-inner::before {
    border-radius: 20px;
    content: '';
    height: 100%;
    opacity: 50%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .cell-stats-all h2 {
    color: #fff;
    text-shadow: 0 0 2px #000;
  }

  .cell-stats-all::before {
    background-image: linear-gradient(to right bottom, #2bf, #f2b);
  }
</style>