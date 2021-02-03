
import React from 'react';
import * as d3 from "d3";
import './treestyle.css'
import { newchart } from '../../../../../Core/Helper/Data'

export const Tree = React.memo((props) => {
    const TreeChart = () => {
        setTimeout(() => {

            var margin = { top: 20, right: 90, bottom: 30, left: 90 },
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;
            const zoom = d3.zoom()
                .scaleExtent([1, 7])   // zoom set Intial level 1 to 10[1,10]//scale Extent
                .translateExtent([[-80, 0], [width + 100, height]])//set svg content in fixed Area
                .on("zoom", zoomed);//call zoomed function
            var colorScale = d3.scaleLinear()
                .domain([0, 1])
                .range(['red', 'green']);
            var widthScale = d3.scaleLinear()
                .domain([1, 80])
                .range([1, 10]);
            var check = document.getElementById('tree')
            if (check !== null) {
                check.innerHTML = ""
            }
            var tooltip = d3.select('body')
                .append('div').classed('ant-tooltip-inner', true);
            tooltip.append('div')
                .attr('class', 'label');
            var svg = d3.select(`#tree`).append("svg")
                .attr("height", 'calc(100vh - 210px)')
                .style('width', 'calc(100vw - 673px)')
                .style('min-width', '250px')
                .attr('viewBox', `-100 0 ${width} ${height + margin.top + margin.bottom}`)
                .call(zoom)
                .append("g")
                .attr("transform", "translate("
                    + margin.left + "," + margin.top + ")")

            var i = 0,
                duration = 750,
                root;

            var treemap = d3.tree().size([height, width]);
            root = d3.hierarchy(newchart, function (d) { return d.children; });
            root.x0 = height / 2;
            root.y0 = 0;

            root.children.forEach(collapse);
            update(root);
            function collapse(d) {
                if (d.children) {
                    d._children = d.children
                    d._children.forEach(collapse)
                    d.children = null
                }
            }

            function update(source) {
                var treeData = treemap(root);
                var nodes = treeData.descendants(),
                    links = treeData.descendants().slice(1);
                nodes.forEach(function (d) { d.y = d.depth * 180 });

                var node = svg.selectAll('g.node')
                    .data(nodes, function (d) { return d.id || (d.id = ++i); });

                var nodeEnter = node.enter().append('g')
                    .attr('class', 'node')
                    .attr("transform", function (d) {
                        return "translate(" + source.y0 + "," + source.x0 + ")";
                    })
                    .on('click', click);

                //hover start
                svg.append('defs').append('filter').attr('id', 'on').attr('x', 0).attr('y', 0).append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', '2')
                function mapp(d) {
                    d.map((k, i) => {
                        var t = k.children === undefined || k.children === null ? [] : k.children
                        if (t.length > 0) {
                            mapp(t)
                        }
                        d3.selectAll(`#texthover${k.id}`).style('filter', `none`)
                        d3.selectAll(`#hover${k.id}`).style('stroke', 'green').style('filter', `none`)
                        d3.selectAll(`#hovernode${k.id}`).classed('highlight', true).style('filter', `none`)
                    })
                }
                function rmap(d) {
                    d.map((k, i) => {
                        var t = k.children === undefined || k.children === null ? [] : k.children
                        if (t.length > 0) {
                            rmap(t)
                        }
                        d3.selectAll(`#hover${k.id}`).style('stroke', null)
                        d3.selectAll(`.fstyle`).style('filter', `none`)
                        d3.selectAll(`.nodeh`).style('filter', `none`)
                        d3.selectAll(`#hovernode${k.id}`).classed('highlight', false)
                    })
                }

                nodeEnter.on("mousemove", function (i, d) {
                    d3.selectAll('.link').style('filter', `url(#on)`)
                    d3.selectAll('.fstyle').style('filter', `url(#on)`)
                    d3.selectAll('.nodeh').style('filter', `url(#on)`)
                    d3.selectAll(`#hovernode${d.id}`).classed('highlight', true).style('filter', `none`)
                    d3.selectAll(`#texthover${d.id}`).style('filter', `none`)
                    let data = d.children === null || d.children === undefined ? [] : d.children
                    mapp(data)
                })
                    .on('mouseout', function (i, d) {
                        d3.selectAll('.link').style('filter', `none`)
                        d3.selectAll(`.fstyle`).style('filter', `none`)
                        d3.selectAll(`.node`).style('filter', `none`)
                        d3.selectAll(`#hovernode${d.id}`).classed('highlight', false)
                        let data = d.children === null || d.children === undefined ? [] : d.children
                        rmap(data)
                    });
                //hover end
                nodeEnter.append("rect")
                    .attr("width", 40)
                    .attr("height", 20)
                    .attr("stroke", "black")
                    .attr('class', 'node nodeh')
                    .attr("id", (d) => 'hovernode' + d.id)
                    .attr('y', -10)
                    .attr('x', -2)
                    .attr("stroke-width", 1)
                    .style("fill", function (d) {
                        return d._children ? "#419fe4" : "#fff";
                    })
                    .on('mouseover', function (i, d) {
                        tooltip.select('.label').html(d.data.name);
                        tooltip.style('display', d.data.name.length < 22 ? 'none' : 'block');
                        tooltip.style('position', 'absolute');
                    })
                    .on('mouseout', function (d, i) {
                        tooltip.style('display', 'none');
                    })
                    .on('mousemove', function (d, i) {
                        tooltip.style('top', d.pageY + 10 + 'px'); tooltip.style('left', d.pageX + 15 + 'px');
                    })
                    .style("stroke", '#ffffff00');

                nodeEnter.scale = 0.4;
                var textadd = nodeEnter.append('text')
                    .attr("id", (d) => 'texthover' + d.id)
                    .attr('class', 'textgroup fstyle')
                    .attr('height', 20)
                    .style("fill", function (d) {
                        return d._children ? "#000" : "#fff";
                    })
                textadd.append('tspan')
                    .attr("text-anchor", function (d) { return d.data.name.length < 12 ? 'middle' : 'start' })
                    .attr("class", "first")
                    .attr('dy', function (d) { return d.data.name.length < 12 ? '0.5em' : '-0.25em' })
                    .attr('dx', function (d) { return d.data.name.length < 12 ? '2.8em' : null })
                    .text(function (d) { return d.data.name.substring(0, 12) })
                textadd.append('tspan')
                    .attr("text-anchor", "start")
                    .attr("class", "second")
                    .attr('dy', '1.3em')
                    .attr('dx', '-5.3em')
                    .text(function (d) { return d.data.name.length < 22 ? d.data.name.substring(12, 22) : d.data.name.substring(12, 22) + '...' })
                    .style("fill", function (d) { return colorScale(d.data.female / (d.data.value)) });


                var nodeUpdate = nodeEnter.merge(node);

                nodeUpdate.transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + d.y + "," + d.x + ")";
                    });

                nodeUpdate.select('rect.node')
                    .style("fill", function (d) {
                        return d._children ? "#419fe4" : "#1a4049";
                    })
                    .attr('cursor', 'pointer');
                nodeUpdate.select('.fstyle')
                    .style("fill", function (d) {
                        return d._children ? "#000" : "#FFF";
                    })
                    .attr('cursor', 'pointer');

                var nodeExit = node.exit().transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + source.y + "," + source.x + ")";
                    })
                    .remove();

                nodeExit.select('text')
                    .style('fill-opacity', 1);

                var link = svg.selectAll('path.link')
                    .data(links, function (d) { return d.id; })
                    .style('stroke-width', function (d) {
                        return widthScale(d.data.value)
                    });

                var linkEnter = link.enter().insert('path', "g")
                    .attr("class", "link highlight")
                    .attr("id", (d) => 'hover' + d.id)
                    .attr('d', function (d) {
                        var o = { x: source.x0, y: source.y0 }
                        return diagonal(o, o)
                    })

                    .style('stroke-width', function (d) {
                        return widthScale(d.data.value)
                    });
                d3.selectAll(".link").classed("highlight", false);
                var linkUpdate = linkEnter.merge(link);

                linkUpdate.transition()
                    .duration(duration)
                    .attr('d', function (d) { return diagonal(d, d.parent) });

                var linkExit = link.exit().transition()
                    .duration(duration)
                    .attr('d', function (d) {
                        var o = { x: source.x, y: source.y }
                        return diagonal(o, o)
                    })
                    .style('stroke-width', function (d) {
                        return widthScale(d.data.value)
                    })
                    .remove();
                nodes.forEach(function (d) {
                    d.x0 = d.x;
                    d.y0 = d.y;
                });

                function diagonal(s, d) {
                    var path = `M ${s.y} ${s.x}
                    C ${(s.y + d.y) / 2} ${s.x},
                    ${(s.y + d.y) / 2} ${d.x + 2},
                    ${d.y} ${d.x} `
                    return path
                }
                function click(i, d) {
                    if (d.children) {
                        d._children = d.children;
                        d.children = null;
                    } else {
                        d.children = d._children;
                        d._children = null;
                    }
                    update(d);
                }
            }
            function zoomed(event) {
                const { transform } = event;
                svg.attr("transform", transform);
                svg.attr("stroke-width", 1 / transform.k)
                d3.selectAll('.node rect')
                    .attr('y', -10 / transform.k > -4 ? -4 : -10 / transform.k)
                    .style("width", 40 / transform.k < 17 ? 17 : 40 / transform.k)
                    .style("height", 20 / transform.k < 8 ? 8 : 20 / transform.k)
                d3.selectAll('.first')
                    .style('font-size', 10 / transform.k - 4 < 2 ? 2 : 10 / transform.k - 4)
                d3.selectAll('.second')
                    .style('font-size', 10 / transform.k - 4 < 2 ? 2 : 10 / transform.k - 4)
            }


        }, 200);
    }
    TreeChart()
    window.addEventListener('resize', TreeChart)
    return (null);
})
export default Tree;