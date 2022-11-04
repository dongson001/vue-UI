<template>
  <el-table :data="tableOption.data" :border="tableOption.border || true" :stripe="tableOption.stripe || true" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  tableOption: {
    type: Object,
    required: true,
  },
});

</script>

<style lang="scss" scoped>
</style>
