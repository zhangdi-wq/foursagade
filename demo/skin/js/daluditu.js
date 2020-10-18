// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
window.dataList = [{
        name: "南海诸岛",
        value: 35181
    },
    {
        name: '北京',
        value: 36875
    },
    {
        name: '天津',
        value: 23856
    },
    {
        name: '上海',
        value: 24898
    },
    {
        name: '重庆',
        value: 33340
    },
    {
        name: '河北',
        value: 172542
    },
    {
        name: '河南',
        value: 330460
    },
    {
        name: '云南',
        value: 34290
    },
    {
        name: '辽宁',
        value: 93580
    },
    {
        name: '黑龙江',
        value: 71656
    },
    {
        name: '湖南',
        value: 70002
    },
    {
        name: '安徽',
        value: 52934
    },
    {
        name: '山东',
        value: 160609
    },
    {
        name: '新疆',
        value: 8591
    },
    {
        name: '江苏',
        value: 96526
    },
    {
        name: '浙江',
        value: 64633
    },
    {
        name: '江西',
        value: 39120
    },
    {
        name: '湖北',
        value: 65711
    },
    {
        name: '广西',
        value: 51672
    },
    {
        name: '甘肃',
        value: 13057
    },
    {
        name: '山西',
        value: 53899
    },
    {
        name: '内蒙古',
        value: 30486
    },
    {
        name: '陕西',
        value: 46484
    },
    {
        name: '吉林',
        value: 44319
    },
    {
        name: '福建',
        value: 54457
    },
    {
        name: '贵州',
        value: 36871
    },
    {
        name: '广东',
        value: 239622
    },
    {
        name: '青海',
        value: 11166
    },
    {
        name: '西藏',
        value: 2084
    },
    {
        name: '四川',
        value: 61988
    },
    {
        name: '宁夏',
        value: 2503
    },
    {
        name: '海南',
        value: 9712
    },
    {
        name: '台湾',
        value: 3315
    },
    {
        name: '香港',
        value: 54135
    },
    {
        name: '澳门',
        value: 6841
    }
];

option = {
	title: [{
             text: '瞬时IP总量：2037943    重复可调取：50000+万次',
             x: 'center',
             textStyle: {
                 fontSize: 15,
                 fontWeight: 'normal',
                 color:'#389af4'
             }
        }]
	,
    tooltip: {
        triggerOn: "click",
        formatter: function(e, t, n) {
            return .5 == e.value ? e.name + "：IP数" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
    },
    visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 1000,
            label: "> 10000",
            color: "#3098f1"
        }, {
            gte: 10,
            lte: 100,
            label: "4000 - 8000",
            color: "#ff5428"
        }, {
            gte: 1,
            lt: 10,
            label: "3000 - 4000",
            color: "#ff8c71"
        }, {
            gt: 0,
            lt: 1,
            label: "1500 - 3000",
            color: "#ffd768"
        }, {
            value: 0,
            color: "#ffffff"
        }],
        show: !0
    },
    geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.23,
        top: 120,
        label: {
            normal: {
                show: !0,
                fontSize: "14",
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            normal: {
                borderColor: "rgba(255, 255, 255, 0.5)"
            },
            emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
            }
        }
    },
    series: [{
        name: "实时在线IP数:",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
};
myChart.setOption(option);