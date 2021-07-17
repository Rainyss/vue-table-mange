<template>
  <el-pagination
    @size-change="sizeChange"
    @current-change="pageChange"
    :current-page="pages.page"
    :page-sizes="pages.pageSizes"
    :page-size="pages.size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pages.total"
  >
  </el-pagination>
</template>

<script>
import { crud } from './crud';
export default {
  mixins: [crud]
};
</script>

<style>
</style>
