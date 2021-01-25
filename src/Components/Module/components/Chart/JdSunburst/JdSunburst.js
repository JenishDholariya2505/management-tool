import React from 'react';
import * as d3 from "d3";
import './JdSunburstStyle.css'
import { Dataset, Gradient2, Gradient1 } from '../../../../../Core/Helper/Data'

export const JdSunburst = props => {
    const Chart = () => {
        var ColorGrdiant = [Gradient2, Gradient1]
        const width = 500,
            height = 500,
            maxRadius = (Math.min(width, height) / 2) - 10;

        const x = d3.scaleLinear().range([0, 2 * Math.PI]).clamp(true);
        const y = d3.scaleSqrt().range([maxRadius * .1, maxRadius]);

        var legend = d3.select("#legend1").append("div")
        var legend1 = d3.select("#legend2").append("div")

        const partition = d3.partition();
        const arc = d3.arc()
            .startAngle(d => x(d.x0))
            .endAngle(d => x(d.x1))
            .innerRadius(d => Math.max(0, y(d.y0)))
            .outerRadius(d => Math.max(0, y(d.y1)));

        var tooltip = d3.select('body')
            .append('div').classed('ant-tooltip-inner', true);
        tooltip.append('div')
            .attr('class', 'label');
        const svg = d3.select('#sunburst').append('svg')
            .style('width', '17vw')
            .style('min-width', '250px')
            .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height + 30}`)

        var root = d3.hierarchy(Dataset);
        root.sum(d => d.size);

        const slice = svg.selectAll('g.slice').data(partition(root).descendants());

        const newSlice = slice.enter().append('g').attr('class', 'slice')

        newSlice.append('path')
            .attr('class', 'main-arc')
            .attr("id", function (d, i) { return `listd${i}arc` })
            .attr("fill", function (d, i) { return `url(#gret${i})` })
            .attr('d', arc)
            .on('click', focusOn)
            .on('mouseover', function (i, d) {
                tooltip.select('.label').html(d.data.name);
                tooltip.style('display', 'block'); tooltip.style('position', 'absolute')
                d3.select(`#listd${i.target.id.split('')[5]}`)
                    .attr("class", "legend li-item-hover")
                d3.select(`#listd${i.target.id.split('')[5]}arc`)
                    .attr('opacity', '0.5')
            })
            .on('mouseout', function (d, i) {
                tooltip.style('display', 'none');
                d3.select(`#listd${d.target.id.split('')[5]}`)
                    .attr("class", "legend")
                d3.select(`#listd${d.target.id.split('')[5]}arc`)
                    .attr('opacity', '1')
            })
            .on('mousemove', function (d, i) {
                tooltip.style('top', d.pageY + 10 + 'px'); tooltip.style('left', d.pageX + 15 + 'px');
            });

        var even = legend.selectAll("div")
            .attr("class", "set")
            .data(partition(root).descendants())
            .enter()
            .append('div')
            .attr("class", "legend")
            .style("display", function (d, i) { return i % 2 !== 0 ? 'none' : 'flex' })
            .attr("id", function (d, i) { return `listd${i}` })
            .on("mouseover", over)
            .on("mouseout", out);
        var odd = legend1.selectAll("div")
            .data(partition(root).descendants())
            .enter()
            .append('div')
            .attr("class", "legend")
            .style("display", function (d, i) { return i % 2 === 0 ? 'none' : 'flex' })
            .attr("id", function (d, i) { return `listd${i}` })
            .on("mouseover", over)
            .on("mouseout", out);

        var text = even.append("p")
            .text(function (d, i) { return i % 2 === 0 ? d.data.name : null })
            .style("color", "white")
            .attr("class", "l_name");


        var l_color = even.append('div')
            .attr("class", "l_Color")
            .style('background-image', function (d, i) { return `linear-gradient(45deg, ${ColorGrdiant[0][i]}, ${ColorGrdiant[1][i]})` });

        var text = odd.append("p")
            .text(function (d, i) { return i % 2 !== 0 ? d.data.name : null })
            .style("color", "white")
            .attr("class", "l_name");

        var l_color = odd.append('div')
            .attr("class", "l_Color")
            .style('background-image', function (d, i) { return `linear-gradient(45deg, ${ColorGrdiant[0][i]}, ${ColorGrdiant[1][i]})` });

        function over(i, d) {
            d3.select(`#${i.target.id}`)
                .attr("class", "legend li-item-hover")
            d3.select(`#${i.target.id + 'arc'}`)
                .attr('opacity', '0.5')
        }
        function out(i, d) {
            d3.select(`#${i.target.id}`)
                .attr("class", "legend")
            d3.select(`#${i.target.id + 'arc'}`)
                .attr('opacity', '1')
        }

        var grediant = newSlice.append('defs')
        var ler = grediant.append('linearGradient')
            .attr('id', function (d, i) { return 'gret' + i })
            .attr('x1', '0%')
            .attr('y1', '20%')
            .attr('x2', '100%')
            .attr('y2', '0%')

        ler.append('stop')
            .attr('offset', '0%')
            .attr('style', function (d, i) { return `stop-color:${ColorGrdiant[0][i]};stop-opacity:1` });
        ler.append('stop')
            .attr('offset', '100%')
            .attr('style', function (d, i) { return `stop-color:${ColorGrdiant[1][i]};stop-opacity:1` });

        function focusOn(i, d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
            const transition = svg.transition()
                .duration(750)
                .tween('scale', () => {
                    const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                        yd = d3.interpolate(y.domain(), [d.y0, 1]);
                    return t => { x.domain(xd(t)); y.domain(yd(t)); };
                });
            transition.selectAll('path.main-arc')
                .attrTween('d', d => () => arc(d));
        }
    }
    Chart()
    return (
        <div id='sunburst' />
    );

}
export default JdSunburst;