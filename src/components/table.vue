<template>
  <div class="DTable">
    <el-table
      ref="myTable"
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
    <el-pagination
      class="myPagination"
      v-model:current-page="tableOption.page.pageNum"
      v-model:page-size="tableOption.page.pageSize"
      background
      hide-on-single-page
      small
      layout="total,sizes,prev, pager, next, jumper"
      :total="tableOption.total"
      :page-sizes="tableOption.pageSizes || [10, 20, 50, 100]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const myTable = ref(null);
const props = defineProps({
  tableOption: {
    type: Object,
    required: true,
  },
  autoRequest: {
    type: Boolean,
    default: true,
  },
  form: {
    type: Object,
  },
});
function handleCurrentChange() {
  getDataList();
}
function handleSizeChange() {
  getDataList();
}
function getDataList() {
  const { url, method, page, baseUrl } = props.tableOption;
  axios({
    method,
    url,
    data: { ...page, ...props.form },
    baseUrl,
  })
    .then((res) => {
      console.log('res:', res)
      props.tableOption.data = res.data.data || [];
      props.tableOption.total = res.data.totalCount || 0;
    })
    .catch((err) => {
      console.error(err);
    });
}
onMounted(() => {
  if (props.tableOption.url && props.autoRequest) {
    getDataList();
  }
});
</script>

<style lang="scss" scoped>
.DTable {
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 4%);
  border-radius: 4px;
  padding: 16px 24px;
}
.myPagination {
  display: flex;
  justify-content: flex-end;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #394961;
  align-items: center;
  padding-top: 14px;
}
</style>
