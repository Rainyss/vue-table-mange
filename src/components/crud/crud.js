const crud = {
  data() {
    return {
      pages: {
        page: 1,
        size: 10,
        pageSizes: [10, 20, 50, 100],
        total: 34
      },
      params: {},
      form: [],
      data: {}
    }
  },
  methods: {
    toQuery: () => {
      console.log(`发送了请求`);
    },
    sizeChange: (size) => {
      console.log(size);
      console.log(crud);
      console.log(crud.methods.toQuery);
    },
    pageChange: (page) => {
      console.log(`当前页: ${page}`);
    }
  }
};

export default crud;
