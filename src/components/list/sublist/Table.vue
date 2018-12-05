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
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {CreateElement} from "vue";

    @Component
    export default class TableMain extends Vue {
        @Prop() private msg!:string;
        private name: string = "简单的表格 可横竖向滚动";
        private total1: number = 0;
        currentPage1: number = 1;
        pageSize: number = 10;
        private tempList: Array = [];
        private emptyText: string = "no data";
        private bondsAllList: Array = [{
            "name": "16协信01",
            "marketValue": 691861.0999317318,
            "type": "信用债",
            "ratio": 0.0027959958264152343
        }, {
            "name": "16朗诗01",
            "marketValue": 690131.4471819025,
            "type": "信用债",
            "ratio": 0.002789005836849196
        }, {
            "name": "16三盛01",
            "marketValue": 688816.9110920322,
            "type": "信用债",
            "ratio": 0.0027836934447790073
        }, {
            "name": "17三鼎01",
            "marketValue": 685426.7917023668,
            "type": "信用债",
            "ratio": 0.002769993065229573
        }, {
            "name": "16临开债",
            "marketValue": 676640.4401650192,
            "type": "信用债",
            "ratio": 0.00273448506769905
        }, {
            "name": "16华讯01",
            "marketValue": 614990.17198298,
            "type": "信用债",
            "ratio": 0.0024853398381849607
        }, {
            "name": "16花样03",
            "marketValue": 614990.0028613778,
            "type": "信用债",
            "ratio": 0.0024853391547193142
        }, {
            "name": "15协信01",
            "marketValue": 614987.6443837617,
            "type": "信用债",
            "ratio": 0.0024853296234802085
        }, {
            "name": "16三盛03",
            "marketValue": 461240.73328782123,
            "type": "信用债",
            "ratio": 0.0018639972176101563
        }, {
            "name": "16山钢03",
            "marketValue": 384367.27773985104,
            "type": "信用债",
            "ratio": 0.0015533310146751303
        }, {
            "name": "14甘公01",
            "marketValue": 324002.01240352966,
            "type": "信用债",
            "ratio": 0.0013093788254893862
        }, {
            "name": "15新湖债",
            "marketValue": 307493.82219188084,
            "type": "信用债",
            "ratio": 0.0012426648117401043
        }, {
            "name": "16珠管01",
            "marketValue": 303035.16177009855,
            "type": "信用债",
            "ratio": 0.0012246461719698726
        }, {
            "name": "16重机债",
            "marketValue": 299103.36126325984,
            "type": "信用债",
            "ratio": 0.0012087567140880767
        }, {
            "name": "17三鼎01",
            "marketValue": 8163.960979194436,
            "type": "信用债",
            "ratio": 3.2992750751699765E-5
        }, {
            "name": "16重机债",
            "marketValue": 1475.2323613477674,
            "type": "信用债",
            "ratio": 5.961808700804324E-6
        }, {
            "name": "14甘公01",
            "marketValue": 723.1485963397557,
            "type": "信用债",
            "ratio": 2.92243697100979E-6
        }, {
            "name": "15新湖债",
            "marketValue": 707.2357910413259,
            "type": "信用债",
            "ratio": 2.85812906700224E-6
        }, {
            "name": "16珠管01",
            "marketValue": 153.74691109594042,
            "type": "信用债",
            "ratio": 6.213324058700521E-7
        }];

        handleSizeChange1(pageSize) {
            debugger;
            this.pageSize = pageSize;
            this.handleCurrentChange1(this.currentPage1);
        };

        handleCurrentChange1(currentPage) {//页码切换
            debugger;
            this.currentPage1 = currentPage
            this.currentChangePage(this.bondsAllList, currentPage)

        };

        //分页方法（重点）
        currentChangePage(list, currentPage) {
            debugger;
            let from = (currentPage - 1) * this.pageSize;
            let to = currentPage * this.pageSize;
            this.tempList = [];
            for (; from < to; from++) {
                if (list[from]) {
                    this.tempList.push(list[from]);
                }
            }
        };

        @CreateElement
        created(): void {
            this.tempList = this.bondsAllList;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
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
