import * as d3 from "d3";
import { Dataset } from '../../../../../Core/Helper/Data'

export default function JdSunburst() {
    const Chart = () => {
        var color = ['#fb9700', '#429FE4', '#a6d1f1', '#146f34', '#9bd0ad', '#370db9', '#404040', '#fb9700', '#004994', '#400094', '#94001b', '#212558', '#21584e', '#3e5821', '#584a21', '#736a51', '#404040']
        // var partition = d3.partition()
        var partition = Dataset => {
            var root = d3.hierarchy(Dataset)
                .sum(d => d.value)
                .sort((a, b) => b.value - a.value);
            return d3.partition()
                .size([2 * Math.PI, root.height + 1])
                (root);
        }
        var x = d3.scaleLinear()
            .range([0, 2 * Math.PI]);

        var y = d3.scaleSqrt()
            .range([0, radius]);
        var tooltip = d3.select('body') // select element in the DOM with id 'chart'
            .append('div').classed('ant-tooltip-inner', true); // append a div element to the element we've selected    
        tooltip.append('div') // add divs to the tooltip defined above 
            .attr('class', 'label'); // add class 'label' on the selection                

        var width = 932
        var radius = width / 6

        var arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1));

        const root = d3.hierarchy(Dataset);
        root.sum(function (d) {
            return d.size;
        });

        var svg = d3.select("#sunburst")
            .append('svg')
            .attr('viewBox', [0, 0, 1492, 1552])
            .style("font", "18px sans-serif")
            .append("g")
            .attr("transform", `translate(466,726)`);

        var g = svg.selectAll("g")
            .data(partition(root).descendants()).enter().append("g");
        // .data(partition(root)).enter().append("g");

        var path = g.append("path")
            .style("stroke", "#ffffff00")
            .attr("fill", function (d, i) { return `url(#gret${i})` })
            .attr("d", arc)
            .on("click", click)
            // tooltip
            .on('mouseover', function (i, d) {
                tooltip.select('.label').html(d.data.data.name); // set current label           
                tooltip.style('display', 'block'); // set display   
                tooltip.style('position', 'absolute'); // set display   
            })
            .on('mouseout', function () { // when mouse leaves div                        
                tooltip.style('display', 'none'); // hide tooltip for that element
            })
            .on('mousemove', function (d) { // when mouse moves     
                tooltip.style('top', d.pageY + 10 + 'px'); // always 10px below the cursor
                tooltip.style('left', d.pageX + 15 + 'px'); // always 10px to the right of the mouse
            });

        var grediant = g.append('defs')
        var ler = grediant.append('linearGradient')
            .attr('id', function (d, i) { return 'gret' + i })
            .attr('x1', '60%')
            .attr('y1', '50%')
            .attr('x2', '0%')
            .attr('y2', '0%')

        ler.append('stop')
            .attr('offset', '0%')
            .attr('style', function (d, i) { return `stop-color:${color[i]};stop-opacity:1` });

        ler.append('stop')
            .attr('offset', '100%')
            .attr('style', function (d, i) { return `stop-color:${color[i]};stop-opacity:0.5` });

        var text = g.append("text")
            .attr('transform', function (d) {
                return 'translate(' + arc.centroid(d) + ')rotate(' + computeTextRotation(d) + ')';
            })
            .text(function (d) { return d.data.data.name; })
            .style("fill", "white");

        function computeTextRotation(d) {
            var angle = (d.x0 + d.x1) / Math.PI * 90;
            return (angle < 120 || angle > 270) ? angle : angle + 180;    // labels as rims
        }
        function click(i, d) {
            console.log("function click");
            console.log("d.y0 = " + d.y0);
            svg.transition()
                .duration(750) // duration of transition
                .tween("scale", function () {
                    var xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                        yd = d3.interpolate(y.domain(), [d.y0, 1]),
                        yr = d3.interpolate(y.range(), [d.y0 ? (80) : 0, radius]);
                    return function (t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
                })
                .selectAll("path")
                .attrTween("d", function (d) { return function () { return arc(d); }; });
        }
    }
    Chart()
    return (null)
}