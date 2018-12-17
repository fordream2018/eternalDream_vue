<template>
    <div class="list_main">
        <div class="list_content">
            <div t_table>
                <el-table
                        :data="tableData.filter(data =>!search || data.name.toLowerCase().includes(search.toLowerCase()))"
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
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {tableModule} from "../../../store/moudles/list/table"

    @Component
    export default class ListMain extends Vue {
        @Prop() private msg: string;
        private name: string = "可拖动的列表";
        private search: String;
        private tableData: Array = [{
            date: '2016-05-02',
            name: '李飞１',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '李飞２',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '李飞３',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '李飞４',
            address: '上海市普陀区金沙江路 1516 弄'
        },
            {
                date: '2016-05-02',
                name: '李飞５',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '李飞６',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '李飞７',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '李飞８',
                address: '上海市普陀区金沙江路 1516 弄'
            },
            {
                date: '2016-05-02',
                name: '李飞９',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '李飞10',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '李飞11',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '李飞1２',
                address: '上海市普陀区金沙江路 1516 弄'
            }];


        get getBondsAllList() {
            return tableModule.getBondsAllList;
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
                _this.tableData.splice(index, 1);
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


        created() {
            this.search = "";
        };

        mounted() {
            //this.search="";
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
            background: red;
        }
        .t_table {

        }
    }
    .el-message-box{
        width: 40% ;
    }
</style>
