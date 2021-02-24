import * as d3 from "d3";
import './NetworkStyle.css'

export default function NetworkChart(props) {
    const { nodeD, Config } = props
    const NetworkGraph = () => {
        setTimeout(() => {
            try {
                // eye and branch icons
                var branch = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsKCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPgoJPCFFTlRJVFkgbnNfYWkgImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+Cgk8IUVOVElUWSBuc19ncmFwaHMgImh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+Cgk8IUVOVElUWSBuc19pbXJlcCAiaHR0cDovL25zLmFkb2JlLmNvbS9JbWFnZVJlcGxhY2VtZW50LzEuMC8iPgoJPCFFTlRJVFkgbnNfc2Z3ICJodHRwOi8vbnMuYWRvYmUuY29tL1NhdmVGb3JXZWIvMS4wLyI+Cgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4KCTwhRU5USVRZIG5zX2Fkb2JlX3hwYXRoICJodHRwOi8vbnMuYWRvYmUuY29tL1hQYXRoLzEuMC8iPgpdPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyMzIzMjM7fQo8L3N0eWxlPgo8bWV0YWRhdGE+Cgk8c2Z3ICB4bWxucz0iJm5zX3NmdzsiPgoJCTxzbGljZXM+PC9zbGljZXM+CgkJPHNsaWNlU291cmNlQm91bmRzICBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIiBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHg9IjIiIHk9IjIiPjwvc2xpY2VTb3VyY2VCb3VuZHM+Cgk8L3Nmdz4KPC9tZXRhZGF0YT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgsMmMtMi4yLDAtNCwxLjgtNCw0YzAsMS44LDEuMiwzLjQsMywzLjljLTAuNCwzLjctMy40LDYuNy03LjEsNy4xYy0wLjQtMS40LTEuNS0yLjUtMi45LTIuOFYzCgkJYzAtMC41LTAuNS0xLTEtMVM1LDIuNSw1LDN2MTEuMWMtMS43LDAuNC0zLDItMywzLjljMCwyLjIsMS44LDQsNCw0YzEuOSwwLDMuNS0xLjMsMy45LTNjNC44LTAuNCw4LjctNC4zLDkuMS05LjEKCQljMS44LTAuNCwzLTIsMy0zLjlDMjIsMy44LDIwLjIsMiwxOCwyeiBNNiwyMGMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMnMyLDAuOSwyLDJTNy4xLDIwLDYsMjB6IE0xOCw4Yy0xLjEsMC0yLTAuOS0yLTIKCQlzMC45LTIsMi0yczIsMC45LDIsMlMxOS4xLDgsMTgsOHoiLz4KPC9nPgo8L3N2Zz4K',
                    eyeicons = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsKCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPgoJPCFFTlRJVFkgbnNfYWkgImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+Cgk8IUVOVElUWSBuc19ncmFwaHMgImh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+Cgk8IUVOVElUWSBuc19pbXJlcCAiaHR0cDovL25zLmFkb2JlLmNvbS9JbWFnZVJlcGxhY2VtZW50LzEuMC8iPgoJPCFFTlRJVFkgbnNfc2Z3ICJodHRwOi8vbnMuYWRvYmUuY29tL1NhdmVGb3JXZWIvMS4wLyI+Cgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4KCTwhRU5USVRZIG5zX2Fkb2JlX3hwYXRoICJodHRwOi8vbnMuYWRvYmUuY29tL1hQYXRoLzEuMC8iPgpdPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjMyMzIzO30KPC9zdHlsZT4KPG1ldGFkYXRhPgoJPHNmdyAgeG1sbnM9IiZuc19zZnc7Ij4KCQk8c2xpY2VzPjwvc2xpY2VzPgoJCTxzbGljZVNvdXJjZUJvdW5kcyAgYm90dG9tTGVmdE9yaWdpbj0idHJ1ZSIgaGVpZ2h0PSIzNTIiIHdpZHRoPSI1MTIiIHg9IjAiIHk9IjgwIj48L3NsaWNlU291cmNlQm91bmRzPgoJPC9zZnc+CjwvbWV0YWRhdGE+CjxnIGlkPSJYTUxJRF8xXyI+Cgk8cmVjdCBpZD0iWE1MSURfM18iIHg9IjMyMCIgeT0iODAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxOTIiIGhlaWdodD0iNjQiLz4KCTxwYXRoIGlkPSJYTUxJRF83XyIgY2xhc3M9InN0MCIgZD0iTTQzNS4yLDE3NkgyODh2LTYyLjFjLTEwLjItMS4zLTIxLjEtMS45LTMyLTEuOUMxNDQuNiwxMTIsNDcuNCwxNzcuMywwLDI3MgoJCWM0Ny40LDk0LjcsMTQ0LjYsMTYwLDI1NiwxNjBzMjA4LjYtNjUuMywyNTYtMTYwQzQ5My40LDIzNC45LDQ2Ny4yLDIwMi4yLDQzNS4yLDE3NnogTTIwOCwxNzZjMjYuMiwwLDQ4LDIxLjgsNDgsNDgKCQlzLTIxLjgsNDgtNDgsNDhzLTQ4LTIxLjgtNDgtNDhTMTgxLjgsMTc2LDIwOCwxNzZ6IE0zODIuMSwzNDYuOUMzNDQuMywzNzEuMiwzMDAuOCwzODQsMjU2LDM4NHMtODguMy0xMi44LTEyNi4xLTM3LjEKCQlDOTkuOCwzMjcuNyw3NC4yLDMwMi4xLDU1LDI3MmMxOS4yLTMwLjEsNDQuOC01NS43LDc0LjktNzQuOWw1LjgtMy44Yy01LjEsMTMuNC03LjcsMjguMi03LjcsNDMuNWMwLDcwLjQsNTcuNiwxMjgsMTI4LDEyOAoJCXMxMjgtNTcuNiwxMjgtMTI4YzAtMTUuNC0yLjYtMzAuMS03LjctNDMuNWw1LjgsMy44YzMwLjEsMTkuMiw1NS43LDQ0LjgsNzQuOSw3NC45QzQzNy44LDMwMi4xLDQxMi4yLDMyNy43LDM4Mi4xLDM0Ni45CgkJTDM4Mi4xLDM0Ni45eiIvPgo8L2c+Cjwvc3ZnPgo='
                let i = 0;
                // render svg dublicate remove
                var check = document.getElementById('net')
                if (check !== null) {
                    check.innerHTML = ""
                }
                // scale zoom svg
                const zoom = d3.zoom()
                    .scaleExtent([1, 7])   // zoom set Intial level 1 to 10[1,10]//scale Extent
                    .translateExtent([[0, 0], [check.offsetWidth, check.offsetHeight]])//set svg content in fixed Area
                    .on("zoom", zoomed);//call zoomed function
                // set data formet
                var makeData = {
                    "productId": "idtest",
                    "name": "test1",
                    "price": "300.00test",
                    children: nodeD
                };
                const root = d3.hierarchy(makeData);
                let node, link, linkk;
                const svg = d3.select(`#net`).append('svg')
                    .attr("width", check.offsetWidth)
                    .attr("height", check.offsetHeight)
                    .attr("viewBox", [0, 0, check.offsetWidth, check.offsetHeight])
                    .call(zoom)
                    .append('g')
                let hideArrow = svg.append('g'), linksg = svg.append('g'), filter = svg.append('defs');

                const simulation = d3.forceSimulation()
                    .force('link', d3.forceLink().id(function (d) { return d.id; }))
                    .force("forceX", d3.forceX().strength(.1).x(check.offsetWidth * .5))
                    .force("forceY", d3.forceY().strength(.1).y(check.offsetHeight * .5))
                    .force("charge", d3.forceManyBody().strength(-1000))
                    .force("center", d3.forceCenter().x(check.offsetWidth * .5).y(check.offsetHeight * .5))
                    .on('tick', ticked)

                // create arrow and text bg
                filter.append('marker')
                    .attr("id", 'arrowhead')
                    .attr('viewBox', [0, 0, 20, 20])
                    .attr('refX', -(Config[0].parent.size + 35 + Config[0].parent.size))
                    .attr('refY', 10)
                    .attr('orient', 'auto')
                    .attr('markerUnits', 'strokeWidth')
                    .attr('markerWidth', 13)
                    .attr('markerHeight', 13)
                    .attr('xoverflow', 'visible')
                    .append('svg:path')
                    .attr('d', d3.line()([[0, 0], [0, 20], [20, 10]]))
                    .attr('fill', '#999')
                    .style('stroke', 'none');
                var filteradd = filter.append('filter')
                    .attr('x', '-0.1')
                    .attr('y', '0')
                    .attr('width', '1.2')
                    .attr('height', '1')
                    .attr('id', 'solid');
                filteradd.append('feFlood')
                    .attr('class', 'bgtest')
                    .style('flood-color', '#2d2d2d');
                filteradd.append('feComposite')
                    .attr('in', 'SourceGraphic');

                var linkEnter, edgelabels;
                // update //
                function update() {
                    let nodes = flatten(root)
                    const filerNode = nodes;
                    let links = root.links()
                    var filterLink = [], noneFilterLink = [];
                    // filter links and new set
                    function filterLinks(obj) {
                        let MetchLink = []
                        if (filterLink.map(function (e) { return e.target.data.orderId === undefined ? [] : e.target.data.orderId; })
                            .indexOf(obj.target.data.orderId === undefined ? [] : obj.target.data.orderId) === -1) {
                            filterLink.push(obj);
                            links = filterLink
                        } else {
                            noneFilterLink.push(obj);
                            noneFilterLink.forEach(function (datatwo) {
                                filterLink.forEach(function (dataone) {
                                    if (dataone.target.data.orderId !== undefined && (dataone.target.data.orderId) === datatwo.target.data.orderId) {
                                        MetchLink.push(dataone)
                                    }
                                })
                            });
                        }
                        if (noneFilterLink.length > 0 && MetchLink.length > 0) {
                            for (let returnInder = 0; returnInder < noneFilterLink.length; returnInder++) {
                                filterLink.push(
                                    {
                                        source: noneFilterLink.reverse()[returnInder].source,
                                        target: MetchLink.reverse()[returnInder].target,
                                        index: i
                                    }
                                )
                            }
                        }
                    }
                    // filter nodes
                    var filterNode = [];
                    function removeNode(obj, index) {
                        if (filterNode.map(function (e) {
                            return e.data.orderId === undefined ? [] : e.data.orderId;
                        }).indexOf(obj.data.orderId === undefined ? [] : obj.data.orderId) === -1) {
                            filterNode.push(obj);
                        }
                        if (index === (filerNode.length - 1)) {
                            nodes = filterNode
                        }
                    }

                    filerNode.filter(removeNode, 0)
                    links.filter(filterLinks, 0)
                    // path create show
                    link = linksg
                        .selectAll('.edgepath')
                        .data(links, function (d) { return d.target.id })
                    // path create arrow mate
                    linkk = hideArrow
                        .selectAll('.arrowShow')
                        .data(links, function (d) { return d.target.id })
                    link.exit().remove()
                    linkk.exit().remove()
                    // path propati
                    linkEnter = link
                        .enter()
                        .append('path')
                        .classed('edgepath', true)
                        .attr('id', (d, pathi) => 'edgepath' + pathi)
                        .attr('marker-start', 'url(#arrowhead)')
                        .style('display', function (d) { return d.source.data.name === 'test1' ? 'none' : '' });
                    var testlink = linkk
                        .enter()
                        .append('path')
                        .style('stroke', Config[2].relation.color)
                        .style('stroke-width', Config[2].relation.size)
                        .style('display', function (d) { return d.source.data.name === 'test1' ? 'none' : '' })
                        .classed('arrowShow', true);

                    link = linkEnter.merge(link);
                    linkk = testlink.merge(linkk);
                    // relation text
                    edgelabels = svg.selectAll(".edgelabel")
                        .data(links, function (d) { return d.target.id; }).enter()
                        .append('text')
                        .classed('edgelabel', true)
                        .attr('id', (d, labeli) => 'edgelabel' + labeli)
                        .attr('dy', 3)
                    edgelabels.append('textPath')
                        .attr('xlink:href', function (d, texti) { return '#edgepath' + texti })
                        .classed('innertext', true)
                        .attr("startOffset", "50%")
                        .attr("filter", "url(#solid)")
                        .text(d => d.target.data.relationDetails === undefined ? '' : d.target.data.relationDetails[Config[2].relation.defaultCaption]);
                    node = svg
                        .selectAll('.childnode')
                        .on('click', btnopen)
                        .data(nodes, function (d) { return d.id })

                    node.exit().remove()
                    // nodes create
                    const nodeEnter = node
                        .enter()
                        .append('g')
                        .style('display', function (d) { return d.data.name === 'test1' ? 'none' : '' })
                        .style('stroke', strokecolor)
                        .style('fill', color)
                        .classed('childnode', true)
                        .classed('perentnode', d => d.children === undefined ? false : true)
                        .on('click', btnopen)
                        .call(drag(simulation));

                    nodeEnter.append('circle')
                        .attr("r", Radius);
                    var fun = nodeEnter.append('g')
                        .attr('id', (d) => `show${d.id}`)
                        .style('display', 'none')
                        .classed('close', true);
                    // collaps circle create half
                    fun.append('path')
                        .attr('id', (d) => `eye${d.id}`)
                        .on('click', close)
                        .attr("d", d3.arc()
                            .innerRadius(40)
                            .outerRadius(70)
                            .startAngle(3.14)     // It's in radian, so Pi = 3.14 = bottom.
                            .endAngle(6.28)       // 2*Pi = 6.28 = top
                        )
                        .classed('btneye', true);
                    // node text
                    nodeEnter.append('text')
                        .style('fill', textcolor)
                        .attr('class', 'textnode')
                        .attr('y', '5')
                        .text(d => d.data.orderId === undefined ? d.data[Config[0].parent.defaultCaption] : d['data'][Config[1].child.defaultCaption]);
                    // collapsed circle create half
                    fun.append('path')
                        .attr('id', (d) => `branch${d.id}`)
                        .on('click', open)
                        .attr("d", d3.arc()
                            .innerRadius(40)
                            .outerRadius(70)
                            .startAngle(3.14)     // It's in radian, so Pi = 3.14 = bottom.
                            .endAngle(6.28)       // 2*Pi = 6.28 = top
                        )
                        .classed('btnbranch', true);
                    // collapsed icons
                    fun.append("svg:image")
                        .attr("xlink:href", "data:image/svg+xml;base64," + branch)
                        .attr('id', 'branch')
                        .attr("y", '45px');
                    fun.append("svg:image")
                        .attr("xlink:href", "data:image/svg+xml;base64," + eyeicons)
                        .attr('id', 'eye')
                        .attr("y", '-65px');
                    node = nodeEnter.merge(node)
                    simulation.nodes(nodes)
                        .force("collide", d3.forceCollide().strength(.5).radius(function (d) { return d.radius + 2.5; }).iterations(1));
                    simulation.force('link').links(links)
                    simulation.force("link", d3.forceLink(links).strength(1).distance(200).iterations(0.8))
                }
                // node fill perent and child
                function color(d) {
                    return d._children ? Config[0].parent.color // collapsed package
                        : d.children ? Config[0].parent.color // expanded package
                            : Config[1].child.color; // leaf node
                }
                // node Radius perent and child
                function Radius(d) {
                    return d._children ? Config[0].parent.size + 25// collapsed package
                        : d.children ? Config[0].parent.size + 25 // expanded package
                            : Config[1].child.size + 20; // leaf node
                }
                // node fill text perent and child
                function textcolor(d) {
                    return d._children ? Config[0].parent.textColor // collapsed package
                        : d.children ? Config[0].parent.textColor // expanded package
                            : Config[1].child.textColor; // leaf node
                }
                // path color stroke
                function strokecolor(d) {
                    return d._children ? Config[0].parent.color + "7B"// collapsed package
                        : d.children ? Config[0].parent.color + "7B" // expanded package
                            : Config[1].child.color + "7B"; // leaf node
                }
                function ticked() {
                    node.attr('transform', function (d) { return `translate(${d.x}, ${d.y})` });
                    link.attr('d', d => 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y);
                    linkk.attr('d', d => 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y);
                }
                // collapsed close
                function close(i, d) {
                    if (d.children) {
                        d._children = d.children;
                        d.children = null;
                    }
                    update()
                }
                // collapsed open
                function open(i, d) {
                    if (d.children === null) {
                        d.children = d._children;
                        d._children = null;
                    }
                    update()
                }
                // collapsed btn show icons
                function btnopen(i, d) {
                    if (d.children === null) {
                        d3.select(`#eye${d.id}`).classed('disabled', true)
                        d3.select(`#branch${d.id}`).classed('disabled', false)
                    } else {
                        d3.select(`#eye${d.id}`).classed('disabled', false)
                        d3.select(`#branch${d.id}`).classed('disabled', true)
                    }
                    if (d.children !== undefined) {
                        var toggle = document.getElementById(`show${d.id}`).style.display
                        if (toggle === "none") {
                            d3.selectAll('.close').style('display', 'none')
                            d3.select(`#show${d.id}`).style('display', 'block')
                        } else {
                            d3.select(`#show${d.id}`).style('display', 'none')
                        }
                    }
                }
                // move node and links
                function drag(simulations) {
                    function dragstarted(event, d) {
                        if (!event.active) simulations.alphaTarget(0.3).restart();
                        d.fx = d.x;
                        d.fy = d.y;
                    }
                    function dragged(event, d) {
                        d.fx = event.x < 45 ? 45 : event.x > check.offsetWidth ? check.offsetWidth : event.x
                        d.fy = event.y < 45 ? 45 : event.y > check.offsetHeight ? check.offsetHeight : event.y
                        simulation.alpha(0).restart();
                    }
                    // stop drag
                    function dragended(event, d) {
                        // if (!event.active) simulations.alphaTarget(0);
                        // d.fx = null;
                        // d.fy = null;
                    }
                    return d3.drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        .on("end", dragended);
                }
                function flatten(root) {
                    const nodes = []
                    function recurse(node) {
                        if (node.children) node.children.forEach(recurse)
                        if (!node.id) node.id = ++i;
                        else ++i;
                        nodes.push(node)
                    }
                    recurse(root)
                    return nodes
                }
                update()
                // zoom set relation all propty
                function zoomed(event) {
                    const { transform } = event;
                    svg.attr("transform", transform);
                    // text node set
                    d3.selectAll('.textnode').attr('font-size', 10 / transform.k + 2 + 'px').attr('y', 2 / transform.k + 3);
                    // collapsed icons branch
                    d3.selectAll(`#branch`).attr('y', 20 / transform.k + 25);
                    // collapsed icons eye
                    d3.selectAll(`#eye`).attr('y', -20 / transform.k - 45);
                    // circle collaps set
                    d3.selectAll('.perentnode g path').attr("d", d3.arc()
                        .innerRadius(20 / transform.k + 20)
                        .outerRadius(20 / transform.k + 50)
                        .startAngle(3.14)
                        .endAngle(6.28)
                    );
                    // arrow zoom set
                    d3.selectAll(`#arrowhead`).attr('refX', -(20 / transform.k + (Config[0].parent.size + 15 + Config[0].parent.size)));
                    // child node zoom set
                    d3.selectAll('.childnode circle').attr('r', 20 / transform.k + Config[1].child.size + 10 / 20)
                    // perent node zoom set
                    d3.selectAll('.perentnode circle').attr('r', 20 / transform.k + Config[0].parent.size + 25 / 5)
                }
            } catch (error) {
                console.log('error get')
            }
        }, 10);
    }
    NetworkGraph()
    window.addEventListener('resize', NetworkGraph)
    return (null)
}
