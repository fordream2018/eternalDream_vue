<template>
    <div class="list_main">
        <h2>表格设计</h2>
        <div class="table">
            <el-table
                    :data="tempList"
                    stripe
                    border style="margin-bottom:14px;"
                    :empty-text="emptyText" height="580">
                <el-table-column property="name" label="债券名称" width="228"></el-table-column>
                <el-table-column property="marketValue" label="市值" width="228" align="right"></el-table-column>
                <el-table-column property="type" label="债券类型"></el-table-column>
                <el-table-column property="ratio" label="占母基金的比重" align="right"></el-table-column>
            </el-table>
            <div class="paginationClass">
                <el-pagination
                        @size-change="handleSizeChange1"
                        @current-change="handleCurrentChange1" :current-page="currentPage1"
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                        class="pagination"
                        :total="bondsAllList.length">
                </el-pagination>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {CreateElement} from "vue";
    import {tableModule} from "../../../store/moudles/list/table"

    @Component
    export default class TableMain extends Vue {
        @Prop() private msg: string;
        private name: string = "简单的表格 可横竖向滚动";
        private total1: number = 0;
        currentPage1: number = 1;
        pageSize: number = 10;
        private tempList: Array = [];
        private emptyText: string = "no data";
        private bondsAllList: Array=[];

        handleSizeChange1(pageSize) {
            this.pageSize = pageSize;
            this.handleCurrentChange1(this.currentPage1);
        };

        handleCurrentChange1(currentPage) {//页码切换
            this.currentPage1 = currentPage;
            this.currentChangePage(this.bondsAllList, currentPage)

        };

        //分页方法（重点）
        currentChangePage(list, currentPage) {
            let from = (currentPage - 1) * this.pageSize;
            let to = currentPage * this.pageSize;
            this.tempList = [];
            for (; from < to; from++) {
                if (list[from]) {
                    this.tempList.push(list[from]);
                }
            }
        };


        private created() {
            this.tempList = tableModule.getBondsAllList;
            this.bondsAllList = tableModule.getBondsAllList;
        };

        //vue3计算属性
        get demo() {
            return "lifei";
        };

        //vue3 watch监听方法
        @Watch('pageSize')
        private pageSizeOnChange(newVal: number) {
            console.info(newVal);
        };

        //使用vuex

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .list_main {
        width: 100%;
        overflow: auto;
        font-size: 12px;
        .table {
            width: 100%;
            height: auto;
            margin: 0 auto;
            border-radius: 20px;
            .pagination {
                background: #303133;
                .el-pagination__total {
                    color: #ffffff;
                }
                .el-input__inner {
                    color: #303133;
                }
            }

        }
    }

</style>
