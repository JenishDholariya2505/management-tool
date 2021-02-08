
import React from 'react';
// import * as d3 from "d3";
// import 'https://d3js.org/d3.v3.min.js'
import * as d3 from './test'
import './NetworkStyle.css'
import { network } from '../../../../../Core/Helper/Network'
// import datad from './Data.json ';

export const NetworkChart = React.memo((props) => {
    const NetworkChart = () => {
        setTimeout(() => {
            var url = '/DataNet.json';
            // var urll = 'https://cdn.rawgit.com/timolawl/fcc-d3-force-graph/f827ddfe/hot_stories.json';
            var index = 0, data, force, svg, chartWrapper, edgepaths, links, nodes, link, circle, drag, node, margin, height, width, hovercircle;
            d3.json(url, init);
            var check = document.getElementById('net')
            if (check !== null) {
                check.innerHTML = ""
            }
            var tooltip = d3.select('body')
                .append('div').classed('ant-tooltip-inner', true);
            tooltip.append('div')
                .attr('class', 'label');
            function init(json) {

                links = []; // source: user target: domain
                nodes = []; // name picture postScore link linkScore 

                json.forEach(function (article) {
                    var name = '', relation = '', postScore = 0, relation = '', linkScore = 0, linkPair = [], source = '', target = '';

                    var nameIndex = nodes.map(function (node) { return node.name; }).indexOf(article.name);
                    var linkIndex = nodes.map(function (node) { return node.relation; }).indexOf(article.relation);
                    // if name does not already exist
                    if (nameIndex === -1) {
                        name = article.name;
                        relation = article.relation === null ? article.relation + nameIndex : article.relation;
                        postScore = 1;
                        console.log(relation, 'relation')
                        nodes.push({
                            index: index++,
                            name: name,
                            relation: relation,
                            postScore: postScore,
                            link: relation,
                            linkScore: 0
                        });

                        target = nodes[nodes.length - 1].index; // most recent one

                    }
                    else {
                        nodes[nameIndex].postScore++;
                        target = nodes[nameIndex].index;
                    }

                    // if link does not already exist
                    if (linkIndex === -1) {
                        link = relation === null ? relation + linkIndex : relation;
                        linkScore = 1;

                        nodes.push({
                            index: index++,
                            name: '',
                            relation: '',
                            postScore: 0,
                            link: link,
                            linkScore: linkScore
                        });

                        source = nodes[nodes.length - 1];
                    }
                    else {
                        nodes[linkIndex].linkScore++;
                        source = nodes[linkIndex];
                    }


                    // check links array if source target pair already exists
                    linkPair = links.filter(function (object) {
                        if (object.source === source && object.target === target)
                            return true;
                    });

                    if (linkPair.length === 0) {
                        links.push({
                            source: source,
                            target: target,
                            value: 1
                        });
                    }

                });

                data = json;

                force = d3.layout.force()
                    .nodes(nodes) // need to make the array of nodes and links
                    .links(links)
                    .charge(-1200)
                    .linkDistance(100);

                svg = d3.select(`#net`).append('svg');

                chartWrapper = svg.append('g');


                chartWrapper.append('defs').append('marker')
                    .attr("id", 'arrowhead')
                    .attr('viewBox', '-0 -5 10 10')
                    .attr('refX', 23)
                    .attr('refY', 0)
                    .attr('orient', 'auto')
                    .attr('markerWidth', 13)
                    .attr('markerHeight', 13)
                    .attr('xoverflow', 'visible')
                    .append('svg:path')
                    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
                    .attr('fill', '#999')
                    .style('stroke', 'none');
                console.log(links, 'links')
                link = chartWrapper.selectAll('.link')
                    .data(links)
                    .enter().append('line')
                    .attr('class', 'link')
                    .attr('marker-end', 'url(#arrowhead)');

                edgepaths = svg.selectAll(".edgepath")
                    .data(links)
                    .enter()
                    .append('path')
                    .attr('class', 'edgepath')
                    .attr('fill-opacity', 0)
                    .attr('stroke-opacity', 0)
                    .attr('id', function (d, i) { return 'edgepath' + i })
                    .style("pointer-events", "none");

                const edgelabels = svg.selectAll(".edgelabel")
                    .data(links)
                    .enter()
                    .append('text')
                    .attr("dy", 4)
                    .style("pointer-events", "none")
                    .attr('class', 'edgelabel')
                    .attr('id', function (d, i) { return 'edgelabel' + i })
                    .attr('font-size', 10)
                    .attr('fill', '#aaa');
                edgelabels.append('textPath')
                    .attr('xlink:href', function (d, i) { return '#edgepath' + i })
                    .style("text-anchor", "middle")
                    .style("pointer-events", "none")
                    .attr("startOffset", "40%")
                    .text(function (d) {
                        return d.source.link ? d.source.name === '' ? null : d.source.link : null
                    })

                drag = force.drag()
                    .on('dragstart', function () { circle.attr('class', 'circle--grabbing'); })
                    .on('drag', function () { circle.attr('class', 'circle--grabbing'); })
                    .on('dragend', function () { circle.attr('class', 'circle'); });

                circle = chartWrapper.selectAll('.circle')
                    .data(nodes).enter().append('g')
                    .attr('class', 'circle')
                    .call(drag)
                    .on('mouseover', function (d, i) {
                        tooltip.select('.label').html(d.name);
                        tooltip.style('display', 'block');
                        tooltip.style('position', 'absolute')

                    })
                    .on('mouseout', function (d, i) {
                        tooltip.style('display', 'none');
                    })
                    .on('mousemove', function (d, i) {
                        tooltip.style('top', d3.event.pageY + 'px');
                        tooltip.style('left', d3.event.pageX + 'px');
                    });
                    
                hovercircle = circle.append('circle')
                    .attr('class', function (d) {
                        if (d.name === '')
                            return 'node hoverlink';
                        else return 'node hoverauthor';
                    });

                node = circle.append('circle')
                    .attr('class', function (d) {
                        if (d.name === '')
                            return 'node node--link';
                        else return 'node node--author';
                    });
                // image = circle.append('text')
                //     .attr('width', 20)
                //     .attr('height', 20)
                //     .style('fill', 'red')
                //     .text(function (d) {
                //         return d.name
                //     });

                render();
            }
            function render() {
                // d3.selectAll('.link').style('stroke-width', function (d) {
                //     return console.log(d.source.link, 'd')
                // })
                d3.selectAll('.link').style('stroke-width', function (d) {
                    // return console.log(d, 'd')
                    return d.source.link === null ? 0 : d.source.name === '' ? 0 : 1
                })
                // d3.selectAll('.link').style('stroke-width', function (d) {
                //     return d.source.link === undefined ? 0 : 1
                // })
                updateDimensions();
                svg.attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom);

                chartWrapper.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

                force.size([width, height]);

                force.on('tick', function () {
                    link.attr('x1', function (d) { return d.source.x; })
                        .attr('y1', function (d) { return d.source.y; })
                        .attr('x2', function (d) { return d.target.x; })
                        .attr('y2', function (d) { return d.target.y; });


                    node.attr('r', function (d) { return d.linkScore === 0 ? (d.postScore + 15) : d.linkScore * 2 + 5; })
                        .attr('cx', function (d) { var radius = d.linkScore === 0 ? (d.postScore + 15) : d.linkScore * 2 + 5; return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
                        .attr('cy', function (d) { var radius = d.linkScore === 0 ? (d.postScore + 15) : d.linkScore * 2 + 5; return d.y = Math.max(radius, Math.min(height - radius, d.y)); });


                    edgepaths.attr('d', d => 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y)

                    // image.attr('x', function (d) { return d.x - 10; })
                    //     .attr('y', function (d) { return d.y - 10; });


                    chartWrapper.select('.title')
                        .attr('x', width / 2)
                        .attr('y', height / 2)


                    chartWrapper.selectAll('.legend--color')
                        .attr('x', width - 100)
                        .attr('y', height - 60);

                    chartWrapper.selectAll('.legend--text')
                        .attr('x', width - 100 + 25)
                        .attr('y', height - 60 + 14);

                    chartWrapper.select('.legend--domain')
                        .attr('transform', 'translate(0' + ',' + 25 + ')');


                });

                force.start();

            }

            function updateDimensions() {
                margin = { top: 0, right: 8, bottom: 8, left: 0 };

                height = window.innerHeight * 0.8 - margin.top - margin.bottom;
                width = window.innerWidth * 0.8 - margin.left - margin.right;
            }

            return {
                render: render
            }

        }, 200);
    }
    NetworkChart()
    window.addEventListener('resize', NetworkChart)
    return (null);
})
export default NetworkChart;
