<template>
  <Table :tableOption="stateTable"></Table>
</template>

<script setup>
import Table from '../components/table.vue';
import { reactive } from 'vue';
let stateTable = {
  columns: [
    {
      prop: 'name',
      
    },
  ],
  data: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
};
</script>

<style lang="scss" scoped></style>
