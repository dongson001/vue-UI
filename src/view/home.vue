<template>
  <DTable :tableOption="stateTable"></DTable>
</template>

<script setup>
import DTable from '../components/table.vue';
import { reactive } from 'vue';
let stateTable = {
  columns: [
    {
      prop: 'name',
      label: '姓名',
    },
    {
      prop: 'date',
      label: '日期',
    },
    {
      prop: 'address',
      label: '地址',
    },
  ],
  total: 0,
  url: '/api/getList',
  method: 'GET',
  page: {
    pageNum: 1,
    pageSize: 3
  },
  data: [],
};
</script>

<style lang="scss" scoped></style>
