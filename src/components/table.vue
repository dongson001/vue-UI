<template>
  <el-table
    :data="tableOption.data"
    :border="tableOption.border || true"
    :stripe="tableOption.stripe || true"
    style="width: 100%"
  >
    <el-table-column
      v-for="(item, index) in tableOption.columns"
      :key="item.key || item.type || item.prop || index"
      v-bind="item"
      :show-overflow-tooltip="item.showOverflowTooltip === true"
      :width="item.width || ''"
      :align="item.align"
    ></el-table-column>
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

<style lang="scss" scoped></style>
