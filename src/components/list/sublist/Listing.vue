<template>
    <div class="list_main">
        <div class="list_content">
            <div t_table>
                <el-table
                        :data="tempList.filter(data=>!search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%" height="600">
                    <el-table-column label="Date" prop="date">
                    </el-table-column>
                    <el-table-column label="Name" prop="name">
                    </el-table-column>
                    <el-table-column label="Address" prop="address">
                    </el-table-column>
                    <el-table-column align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input v-model="search" size="mini" placeholder="输入关键字搜索">
                            </el-input>
                        </template>
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="paginationClass">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange" :current-page="currentPage"
                            :page-sizes="[10, 20, 50, 100]"
                            :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                            class="pagination"
                            :total="tableData.length">
                    </el-pagination>

                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import {listModule} from "../../../store/moudles/list/listing"
    @Component
    export default class ListMain extends Vue {
        @Prop() private msg: string;
        private name: string = "可拖动的列表";
        private search: String;
        private total1: number = 0;
        private　currentPage: number = 1;
        private　pageSize: number = 10;
        private tempList: Array = [];
        private tableData: Array = [];


        get getBondsAllList() {
            return listModule.getTableData;
        }

        /**
         * 编辑方法 做弹出框提示
         * @param index
         * @param row
         */
        private handleEdit(index, row) {
            debugger;
            const h = this.$createElement;
            this.$msgbox({
                title: '编辑',
                message:h('div',null,[

                ]),
               /* message: h('p', null, [
                    h('span', null, '内容可是水水水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水是水水水水水水水水水以是 '),
                    h('i', {style: 'color: teal'}, 'VNode')
                ]),*/
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                roundButton:true,
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = '执行中...';
                        setTimeout(() => {
                            done();
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                            }, 300);
                        }, 3000);
                    } else {
                        done();
                    }
                }
            }).then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
            });
        };

        /**
         * 删除方法
         * @param index
         * @param row
         */
        private handleDelete(index, row) {
            let _this = this;
            console.log(index, row);
            _this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                roundButton:true,
                type: 'warning'
            }).then(() => {
                //
                listModule.changeTableData(index,row);
                _this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                _this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        };

        private handleSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.handleCurrentChange(this.currentPage);
        };
        private handleCurrentChange(currentPage) {//页码切换
            this.currentPage= currentPage;
            this.currentChangePage(listModule.getTableData, currentPage)
        };

        //分页方法（重点）
        private currentChangePage(list, currentPage) {
            let from = (currentPage - 1) * this.pageSize;
            let to = currentPage * this.pageSize;
            this.tempList = [];
            for (; from < to; from++) {
                if (list[from]) {
                    this.tempList.push(list[from]);
                }
            }
        };

        created() {
            debugger;
            this.search = "";
            this.tempList = listModule.getTableData;
            this.tableData=listModule.getTableData;
        };

        mounted() {
        };

        destored() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
    .list_main {
        width: 100%;
        height: auto;
        .list_content {
            width: 100%;
            height: auto;
            background: #000000;
        }
        .t_table {

        }
    }
    .el-message-box{
        width: 40% ;
    }
    .pagination {
        background: #303133;
        .el-pagination__total {
            color: #ffffff;
        }
        .el-input__inner {
            color: #303133;
        }
    }
</style>
