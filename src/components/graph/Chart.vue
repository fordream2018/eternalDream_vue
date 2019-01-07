<template>
    <div class="chartElem">
        <div class="row">
            <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
            <div>
                <form class="row points">
                    <div v-for="index in 8" :key="index">
                        <p>{{index}}</p>
                        <input v-model.number="points[index-1]" type="number" class="numberInput">
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div id="title">
                <h3>Set chart title dynamically:</h3>
                <input type="text" v-model="title">
            </div>
            <div id="chartType">
                <h3>Select chart type:</h3>
                <select v-model="chartType">
                    <option>Spline</option>
                    <option>AreaSpline</option>
                    <option>Line</option>
                    <option>Scatter</option>
                    <option>Column</option>
                    <option>Area</option>
                </select>
            </div>
            <div id="animationDuration">
                <h3>Select update animation duration:</h3>
                <select v-model="animationDuration" type="number">
                    <option>0</option>
                    <option>500</option>
                    <option>1000</option>
                    <option>2000</option>
                </select>
            </div>
            <div id="seriesColor">
                <h3>Select color of the series:</h3>
                <div class="row">
                    <input id="colorPicker" v-if="colorInputIsSupported" type="color" value="#6fcd98"
                           v-model="seriesColor">
                    <select v-else v-model="seriesColor">
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Pink</option>
                        <option>Orange</option>
                        <option>Brown</option>
                        <option>Black</option>
                        <option>Purple</option>
                    </select>
                </div>
                <p>Current color: {{seriesColor}}</p>
            </div>
        </div>
    </div>
</template>

<script scoped lang="ts">

    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class TechSupport extends Vue {
        private title: String = "";
        private points: Array<Number> = [10, 0, 8, 2, 6, 4, 5, 5];
        private chartType: string = "Spline";
        private seriesColor: string = "#6fcd98";
        private colorInputIsSupported: boolean = false;
        private animationDuration: number = 1000;
        private updateArgs: Array<any> = [true, true, {duration: 1000}];
        private chartOptions = {
            chart: {
                type: 'spline'
            }
            ,
            title: {
                text: 'Sin chart'
            }
            ,
            series: [{
                data: [10, 0, 8, 2, 6, 4, 5, 5],
                color: '#6fcd98'
            }]
        };

        created() {
            let input = document.createElement('input')
            input.setAttribute('type', 'color');
            (input.type === 'color') ? this.colorInputIsSupported = true : this.colorInputIsSupported = false;
        }

        @Watch("title")
        changeTitle(newValue:string):void{
            this.chartOptions.title.text = newValue;
        }

        @Watch("points")
        changePoints(newValue):void{
            this.chartOptions.series[0].data = newValue;
        }

        @Watch("chartType")
        changeChartType(newValue:string):void{
            this.chartOptions.chart.type = newValue.toLowerCase();
        }

        @Watch("seriesColor")
        changeSeriesColor(newValue:string):void{
            this.chartOptions.series[0].color = newValue.toLowerCase();
        }

        @Watch("animationDuration")
        changeAnimationDuration(newValue:Number):void{
            debugger;
            this.updateArgs[2].duration = Number(newValue);
        }
    }

</script>

<style scoped lang="less">
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    .chartElem {
        width: 100%;
        height: 100%;
    }

    #colorPicker {
        border: 0;
        padding: 0;
        margin: 0;
        width: 30px;
        height: 30px;
    }

    .numberInput {
        width: 30px;
    }
</style>
