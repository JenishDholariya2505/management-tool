
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
                .attr('id', 'treechart')
                .style('cursor', 'grab')
                .on('mousemove', test)
                .attr('viewBox', `-100 0 ${width} ${height + margin.top + margin.bottom}`)
                .call(zoom)
                .append("g")
                .attr("transform", "translate("
                    + margin.left + "," + margin.top + ")")
            function test() {
                d3.select(`#treechart`).style('cursor', 'move')
            }
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
                console.log(source, 'source')
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
                        d3.selectAll(`#hovernode${k.id}`).classed('highlight', true).style('filter', `blur(0px)`).attr('width', 50).attr('height', 25)
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
                        d3.selectAll(`.box`).style('filter', `none`)
                        d3.selectAll(`#hovernode${k.id}`).classed('highlight', false)
                    })
                }

                nodeEnter.on("mousemove", function (i, d) {
                    d3.selectAll('.link').style('filter', `url(#on)`)
                    d3.selectAll('.fstyle').style('filter', `url(#on)`)
                    d3.selectAll('.box').style('filter', `blur(2px)`)
                    d3.selectAll(`#hovernode${d.id}`).classed('highlight', true).style('filter', `blur(0px)`).attr('width', 50).attr('height', 25)
                    d3.selectAll(`#texthover${d.id}`).style('filter', `none`)
                    let data = d.children === null || d.children === undefined ? [] : d.children
                    mapp(data)
                })
                    .on('mouseout', function (i, d) {
                        d3.selectAll('.link').style('filter', `none`)
                        d3.selectAll(`.fstyle`).style('filter', `none`)
                        d3.selectAll(`.box`).style('filter', `blur(0px)`).attr('width', 40).attr('height', 20)
                        d3.selectAll(`#hovernode${d.id}`).classed('highlight', false)
                        let data = d.children === null || d.children === undefined ? [] : d.children
                        rmap(data)
                    });
                //hover end
                nodeEnter.scale = 0.4;
                nodeEnter.append('foreignObject')
                    .attr("id", (d) => 'hovernode' + d.id)
                    .attr('class', 'box')
                    .append('xhtml:body')
                    .style("background-color", function (d) {
                        return d._children ? "#419fe4" : "#1a4049";
                    })
                    .html(function (d) {
                        return "<div id=test class='textover'><span id=over" + d.id + " class='textset'>" + d.data.name + "</span></div>";
                    }).on('mouseover', function (i, d) {
                        tooltip.select('.label').html(d.data.name);
                        var dots = document.getElementById(`over${d.id}`);
                        tooltip.style('display', dots.offsetHeight < dots.scrollHeight ? 'block' : 'none');
                        tooltip.style('position', 'absolute')
                    })
                    .on('mouseout', function (d, i) {
                        tooltip.style('display', 'none');
                    })
                    .on('mousemove', function (d, i) {
                        tooltip.style('top', d.pageY + 10 + 'px'); tooltip.style('left', d.pageX + 15 + 'px');
                    });

                var nodeUpdate = nodeEnter.merge(node);
                nodeUpdate.transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + d.y + "," + d.x + ")";
                    });

                nodeUpdate.select('.box')
                    .style("background-color", function (d) {
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
                    console.log(d, 'd')
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
                d3.selectAll('.box').classed('boxzoom', 10 / transform.k < 5).classed('boxtwozoom', 10 / transform.k < 3).classed('boxx', 10 / transform.k > 5)
                d3.selectAll('.textset').classed('textzoom', 10 / transform.k < 5).classed('texttwozoom', 10 / transform.k < 3).classed('textth', 10 / transform.k > 5)
            }
        }, 200);
    }
    TreeChart()
    window.addEventListener('resize', TreeChart)
    return (null);
})
export default Tree;