import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from "@amcharts/amcharts5/percent";
// import jQuery from 'jquery';
// window.jQuery = jQuery;

export default {
    data() {
        return {
            list_role: [
                {
                    id: '1',
                    name: 'Admin',
                    description: 'Admin',
                    isUse: true,
                },
                {
                    id: '2',
                    name: 'Manager',
                    description: 'Manager',
                    isUse: false,
                },
                {
                    id: '3',
                    name: 'User',
                    description: 'User',
                    isUse: true,
                },
                {
                    id: '4',
                    name: 'Boss',
                    description: 'Boss',
                    isUse: true,
                },
                {
                    id: '5',
                    name: 'AnhDev',
                    description: 'Anh Dev',
                    isUse: true,
                },
                {
                    id: '6',
                    name: 'Tester',
                    description: 'Tester',
                    isUse: false,
                },
            ],
            role: {
                id: '',
                name: '',
                description: '',
                isUse: false,
            },
            filterrole: '',
            chart: null,
        }
    },
    mounted() {
        let vm = this;
        vm.roleColumnChart();
        vm.rolePieChart();
    },
    beforeDestroy() {
        if (this.root) {
            this.root.dispose();
        }
    },
    methods: {
        save() {
            let vm = this;
            if (vm.role.id) {
                vm.list_role.forEach(function (value) {
                    if (value.id == vm.role.id) {
                        value = vm.role;
                        vm.$notify({
                            group: 'foo',
                            title: 'Cập nhập thành công',
                            text: 'Role đã được cập nhập!',
                            type: 'success',
                            duration: 1000,
                            speed: 1000,
                        });
                    }
                })
            } else {
                vm.role.id = Math.floor(Math.random() * 10000);
                vm.list_role.push(vm.role);
                // $.notify("Alert!", {type:"info"});
                vm.$notify({
                    group: 'foo',
                    title: 'Tạo mới thành công',
                    text: 'Role đã được thêm vào table!',
                    type: 'success',
                    duration: 1000,
                    speed: 1000,
                });
            }
            vm.btnClear()
        },
        editItem(id) {
            let vm = this;
            vm.list_role.forEach(function (value) {
                if (value.id == id) {
                    vm.role = value;
                }
            })
        },
        btnClear() {
            let vm = this;
            vm.role = {
                id: '',
                name: '',
                description: '',
                isUse: false,
            };
            vm.$notify({
                group: 'foo',
                title: 'Form đã được làm mới!',
                // text: 'Form đã đ',
                type: 'success',
                duration: 1000,
                speed: 1000,
            });
        },
        roleColumnChart() {
            let root = am5.Root.new(this.$refs.roleColumnChart);

            root.setThemes([am5themes_Animated.new(root)]);

            var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX: true
            }));
            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
            cursor.lineY.set("visible", false);
            var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
            xRenderer.labels.template.setAll({
                rotation: -90,
                centerY: am5.p50,
                centerX: am5.p100,
                paddingRight: 15
            });

            xRenderer.grid.template.setAll({
                location: 1
            })

            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.3,
                categoryField: "country",
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {})
            }));

            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                maxDeviation: 0.3,
                renderer: am5xy.AxisRendererY.new(root, {
                    strokeOpacity: 0.1
                })
            }));


            // Create series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: "Series 1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                sequencedInterpolation: true,
                categoryXField: "country",
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            }));

            series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
            series.columns.template.adapters.add("fill", function (fill, target) {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
            });

            series.columns.template.adapters.add("stroke", function (stroke, target) {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
            });


            // Set data
            var data = [{
                country: "Admin",
                value: 1
            }, {
                country: "Manager",
                value: 1
            }, {
                country: "User",
                value: 6
            }, {
                country: "Boss",
                value: 0
            }, {
                country: "AnhDev",
                value: 0
            }, {
                country: "Testter",
                value: 2
            },];

            xAxis.data.setAll(data);
            series.data.setAll(data);


            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear(1000);
            chart.appear(1000, 100);
        },
        rolePieChart() {
            let root = am5.Root.new(this.$refs.rolePieChart);

            root.setThemes([am5themes_Animated.new(root)]);

            var chart = root.container.children.push(
                am5percent.PieChart.new(root, {
                    endAngle: 270,
                    radius: am5.percent(70),
                })
            );

            var series = chart.series.push(
                am5percent.PieSeries.new(root, {
                    valueField: "value",
                    categoryField: "category",
                    endAngle: 270,
                })
            );
            series.slices.template.set("tooltipText", "{category}: {value}");
            series.labels.template.set("text", "{category}: {value}");
            series.states.create("hidden", {
                endAngle: -90
            });
            series.get("colors").set("colors", [
                am5.color(0xECC9EE),
                am5.color(0xB9EDDD)
            ]);
            series.data.setAll([{
                category: "N",
                value: 2
            }, {
                category: "Y",
                value: 5
            },]);

            series.appear(1000, 100);
        },
    },
    computed: {
        filteredItems() {
            return this.list_role.filter((item) => {
                return item.name.toLowerCase().includes(this.filterrole.toLowerCase());
            });
        }
    }


}
