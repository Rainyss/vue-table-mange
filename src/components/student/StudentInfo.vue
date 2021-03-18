<template>
  <div>
    <StudentDetail />
    <pagination />
  </div>
</template>

<script>
import StudentDetail from './StudentDetail';
import crud from '@/components/crud/crud';
import pagination from '@/components/crud/pagination';
export default {
  components: {
    StudentDetail,
    pagination
  },
  mixins: [crud]
};
</script>

<style>

</style>
