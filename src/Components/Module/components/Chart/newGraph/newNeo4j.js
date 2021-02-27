import * as d3 from "d3";
import './Neo4j.css'

export default function Neo4j(props) {
    const { Neo4j_Data, styleConfig } = props
    const Neo4jRendar = () => {
        setTimeout(() => {
            try {
                // eye and branch icons
                var branch = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsKCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPgoJPCFFTlRJVFkgbnNfYWkgImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+Cgk8IUVOVElUWSBuc19ncmFwaHMgImh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+Cgk8IUVOVElUWSBuc19pbXJlcCAiaHR0cDovL25zLmFkb2JlLmNvbS9JbWFnZVJlcGxhY2VtZW50LzEuMC8iPgoJPCFFTlRJVFkgbnNfc2Z3ICJodHRwOi8vbnMuYWRvYmUuY29tL1NhdmVGb3JXZWIvMS4wLyI+Cgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4KCTwhRU5USVRZIG5zX2Fkb2JlX3hwYXRoICJodHRwOi8vbnMuYWRvYmUuY29tL1hQYXRoLzEuMC8iPgpdPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyMzIzMjM7fQo8L3N0eWxlPgo8bWV0YWRhdGE+Cgk8c2Z3ICB4bWxucz0iJm5zX3NmdzsiPgoJCTxzbGljZXM+PC9zbGljZXM+CgkJPHNsaWNlU291cmNlQm91bmRzICBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIiBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHg9IjIiIHk9IjIiPjwvc2xpY2VTb3VyY2VCb3VuZHM+Cgk8L3Nmdz4KPC9tZXRhZGF0YT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgsMmMtMi4yLDAtNCwxLjgtNCw0YzAsMS44LDEuMiwzLjQsMywzLjljLTAuNCwzLjctMy40LDYuNy03LjEsNy4xYy0wLjQtMS40LTEuNS0yLjUtMi45LTIuOFYzCgkJYzAtMC41LTAuNS0xLTEtMVM1LDIuNSw1LDN2MTEuMWMtMS43LDAuNC0zLDItMywzLjljMCwyLjIsMS44LDQsNCw0YzEuOSwwLDMuNS0xLjMsMy45LTNjNC44LTAuNCw4LjctNC4zLDkuMS05LjEKCQljMS44LTAuNCwzLTIsMy0zLjlDMjIsMy44LDIwLjIsMiwxOCwyeiBNNiwyMGMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMnMyLDAuOSwyLDJTNy4xLDIwLDYsMjB6IE0xOCw4Yy0xLjEsMC0yLTAuOS0yLTIKCQlzMC45LTIsMi0yczIsMC45LDIsMlMxOS4xLDgsMTgsOHoiLz4KPC9nPgo8L3N2Zz4K',
                    eyeicons = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsKCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPgoJPCFFTlRJVFkgbnNfYWkgImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+Cgk8IUVOVElUWSBuc19ncmFwaHMgImh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+Cgk8IUVOVElUWSBuc19pbXJlcCAiaHR0cDovL25zLmFkb2JlLmNvbS9JbWFnZVJlcGxhY2VtZW50LzEuMC8iPgoJPCFFTlRJVFkgbnNfc2Z3ICJodHRwOi8vbnMuYWRvYmUuY29tL1NhdmVGb3JXZWIvMS4wLyI+Cgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4KCTwhRU5USVRZIG5zX2Fkb2JlX3hwYXRoICJodHRwOi8vbnMuYWRvYmUuY29tL1hQYXRoLzEuMC8iPgpdPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjMyMzIzO30KPC9zdHlsZT4KPG1ldGFkYXRhPgoJPHNmdyAgeG1sbnM9IiZuc19zZnc7Ij4KCQk8c2xpY2VzPjwvc2xpY2VzPgoJCTxzbGljZVNvdXJjZUJvdW5kcyAgYm90dG9tTGVmdE9yaWdpbj0idHJ1ZSIgaGVpZ2h0PSIzNTIiIHdpZHRoPSI1MTIiIHg9IjAiIHk9IjgwIj48L3NsaWNlU291cmNlQm91bmRzPgoJPC9zZnc+CjwvbWV0YWRhdGE+CjxnIGlkPSJYTUxJRF8xXyI+Cgk8cmVjdCBpZD0iWE1MSURfM18iIHg9IjMyMCIgeT0iODAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxOTIiIGhlaWdodD0iNjQiLz4KCTxwYXRoIGlkPSJYTUxJRF83XyIgY2xhc3M9InN0MCIgZD0iTTQzNS4yLDE3NkgyODh2LTYyLjFjLTEwLjItMS4zLTIxLjEtMS45LTMyLTEuOUMxNDQuNiwxMTIsNDcuNCwxNzcuMywwLDI3MgoJCWM0Ny40LDk0LjcsMTQ0LjYsMTYwLDI1NiwxNjBzMjA4LjYtNjUuMywyNTYtMTYwQzQ5My40LDIzNC45LDQ2Ny4yLDIwMi4yLDQzNS4yLDE3NnogTTIwOCwxNzZjMjYuMiwwLDQ4LDIxLjgsNDgsNDgKCQlzLTIxLjgsNDgtNDgsNDhzLTQ4LTIxLjgtNDgtNDhTMTgxLjgsMTc2LDIwOCwxNzZ6IE0zODIuMSwzNDYuOUMzNDQuMywzNzEuMiwzMDAuOCwzODQsMjU2LDM4NHMtODguMy0xMi44LTEyNi4xLTM3LjEKCQlDOTkuOCwzMjcuNyw3NC4yLDMwMi4xLDU1LDI3MmMxOS4yLTMwLjEsNDQuOC01NS43LDc0LjktNzQuOWw1LjgtMy44Yy01LjEsMTMuNC03LjcsMjguMi03LjcsNDMuNWMwLDcwLjQsNTcuNiwxMjgsMTI4LDEyOAoJCXMxMjgtNTcuNiwxMjgtMTI4YzAtMTUuNC0yLjYtMzAuMS03LjctNDMuNWw1LjgsMy44YzMwLjEsMTkuMiw1NS43LDQ0LjgsNzQuOSw3NC45QzQzNy44LDMwMi4xLDQxMi4yLDMyNy43LDM4Mi4xLDM0Ni45CgkJTDM4Mi4xLDM0Ni45eiIvPgo8L2c+Cjwvc3ZnPgo='
                let i = 0;

                // render svg dublicate remove
                var render = document.getElementById('neo4j')
                if (render !== null) {
                    render.innerHTML = ""
                }
                // scale zoom svg
                const zoom = d3.zoom()
                    .scaleExtent([1, 7])   // zoom set Intial level 1 to 10[1,10]//scale Extent
                    .translateExtent([[0, 0], [render.offsetWidth, render.offsetHeight]])//set svg content in fixed Area
                    .on("zoom", zoomed);//call zoomed function

                var makeData = {
                    "userId": "idtest",
                    "userName": "test1",
                    "price": "300.00test",
                    children: Neo4j_Data.data
                };
                const root = d3.hierarchy(makeData);
                const transform = d3.zoomIdentity;
                let node, link, linkk;
                // make svg graph
                const svg = d3.select(`#neo4j`).append('svg')
                    .attr("width", render.offsetWidth)
                    .attr("height", render.offsetHeight)
                    .attr("viewBox", [0, 0, render.offsetWidth, render.offsetHeight])
                    .call(zoom)
                    .append('g')
                    .attr('transform', 'translate(40,0)');

                let hideArrow = svg.append('g').attr('id', 'hideArrow'),
                    linksg = svg.append('g').attr('id', 'links'),
                    RelationText = svg.append('g').attr('id', 'textrelation'),
                    filter = svg.append('defs');

                const simulation = d3.forceSimulation()
                    .force('link', d3.forceLink().id(function (d) { return d.id; }))
                    .force("forceX", d3.forceX().strength(.1).x(render.offsetWidth * .5))
                    .force("forceY", d3.forceY().strength(.1).y(render.offsetHeight * .5))
                    .force("charge", d3.forceManyBody().strength(-2000))
                    .force("center", d3.forceCenter().x(render.offsetWidth * .5).y(render.offsetHeight * .5))
                    .on('tick', ticked)

                // create arrow and text bg
                filter.append('marker')
                    .attr("id", 'arrowhead')
                    .attr('viewBox', [0, 0, 20, 20])
                    .attr('refX', -60)
                    // .attr('refX', -(Config[0].parent.size + 35 + Config[0].parent.size))
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
                    .style('flood-color', '#252525');
                filteradd.append('feComposite')
                    .attr('in', 'SourceGraphic');

                var linkEnter, edgelabels;

                function update() {
                    let nodes = flatten(root)
                    let links = root.links()
                    var filterLink = [], noneFilterLink = [];
                    // filter links and new set
                    function filterLinks(obj) {
                        let MetchLink = []
                        if (filterLink.map(function (e) { return e.target.data.userId === undefined ? [] : e.target.data.userId; })
                            .indexOf(obj.target.data.userId === undefined ? [] : obj.target.data.userId) === -1) {
                            filterLink.push(obj);
                        } else {
                            noneFilterLink.push(obj);
                            noneFilterLink.forEach(function (datatwo) {
                                filterLink.forEach(function (dataone) {
                                    if (dataone.target.data.userId !== undefined && (dataone.target.data.userId) === datatwo.target.data.userId) {
                                        MetchLink.push(dataone)
                                    }
                                })
                            });
                            for (let index = 0; index < noneFilterLink.length; index++) {
                                links.push(
                                    {
                                        source: MetchLink[index].target,
                                        target: noneFilterLink[index].target,
                                        index: i
                                    }
                                )
                            }
                        }
                    }
                    // update link and relation
                    links.forEach(linksReplas => { links.push(linksReplas) });

                    links.filter(filterLinks, 0)
                    // path create showƒ
                    link = linksg
                        .selectAll('.edgepath')
                        .data(links, function (d) { return d.target.id });
                    link.exit().remove();
                    // path create arrow mate
                    linkk = hideArrow
                        .selectAll('.arrowShow')
                        .data(links, function (d) { return d.target.id });
                    linkk.exit().remove();

                    // path propati
                    linkEnter = link
                        .enter()
                        .append('path')
                        .classed('edgepath', true)
                        .attr('marker-start', 'url(#arrowhead)')
                        .style('display', function (d) { return console.log(d.target, 'getxvalues') });
                    // .style('display', function (d) { return d.source.data.userId === 'idtest' ? 'none' : '' });
                    var testlink = linkk
                        .enter()
                        .append('path')
                        .style('stroke', strokecolor)
                        .style('stroke-width', relationStroke)
                        .attr('id', function (d, i) { return 'pathlabels' + i })
                        .style('display', function (d) { return d.source.data.userId === 'idtest' ? 'none' : '' })
                        .classed('arrowShow', true);

                    linkk = testlink.merge(linkk);
                    link = linkEnter.merge(link);

                    // relation text
                    var relation = svg
                        .selectAll('.edgelabel')
                        .data(links, function (d) { return d.target.id });
                    relation.exit().remove();
                    edgelabels = relation
                        .enter()
                        .append('text')
                        .classed('edgelabel', true)
                        .attr('dy', 3);
                    edgelabels.append('textPath')
                        .attr('xlink:href', function (d, i) { return '#pathlabels' + i })
                        .classed('innertext', true)
                        .attr("startOffset", "50%")
                        .attr("filter", "url(#solid)")
                        .text(relationtext);
                    relation = relation.merge(relation);
                    node = svg
                        .selectAll('.node')
                        .data(nodes, function (d) { return d.id })

                    node.exit().remove()

                    // nodes create
                    const nodeEnter = node
                        .enter()
                        .append('g')
                        .style('display', function (d) { return d.data.userName === 'test1' ? 'none' : '' })
                        .style('stroke', strokenodes)
                        .style('fill', color)
                        .classed('node', true)
                        // .classed('perentnode', d => d.children === undefined ? false : true)
                        .on('click', clicked)
                        .call(drag(simulation));

                    nodeEnter.append('circle')
                        .attr("r", nodeR);
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
                        .style('stroke-width', 0)
                        .attr('class', 'textnode')
                        .attr('y', '5')
                        .text(text);
                    // collapsed circle create halff
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
                        .force("collide", d3.forceCollide().strength(0.5).iterations(1));
                    simulation.force('link').links(links)
                    simulation.force("link", d3.forceLink(links).strength(0.2).distance(200).iterations(1))

                }
                // color nodes
                function color(d) {
                    return (
                        d === undefined ? null
                            : d.data.userName ? styleConfig.user.defaultColor // user node color ----*----
                                : (d.data.commentId ? styleConfig.comments.defaultColor // commentsId node color ----*----
                                    : (d.data.postId ? styleConfig.post.defaultColor // post node color ----*----
                                        : null))
                    )
                }
                // Radius nodes
                function nodeR(d) {
                    return (
                        d === undefined ? null
                            : d.data.userName ? styleConfig.user.defaultSize + 25 // user node radius ----*----
                                : (d.data.commentId ? styleConfig.comments.defaultSize + 25 // commentsId node color ----*----
                                    : (d.data.postId ? styleConfig.post.defaultSize + 25 // post node color ----*----
                                        : null))
                    )
                }
                // text nodes
                function text(d) {
                    return (
                        d === undefined ? null
                            : d.data.userName ? d.data[styleConfig.user.defaultCaption] // user text ----*----
                                : (d.data.commentId ? d.data[styleConfig.comments.defaultCaption] // commentsId node text ----*----
                                    : (d.data.postId ? d.data[styleConfig.post.defaultCaption] // post node text ----*----
                                        : null))
                    )
                }
                // stroke nodes 
                function strokenodes(d) {
                    return (
                        d === undefined ? null
                            : d.data.userName ? styleConfig.user.defaultColor + '32' // user node stroke ----*----
                                : (d.data.commentId ? styleConfig.comments.defaultColor + '32' // commentsId node stroke ----*----
                                    : (d.data.postId ? styleConfig.post.defaultColor + '32' // post node stroke ----*----
                                        : null))
                    )
                }
                // node fill text perent and child
                function textcolor(d) {
                    return (
                        d === undefined ? null
                            : d.data.userName ? styleConfig.user.textColor // user node text color ----*----
                                : (d.data.commentId ? styleConfig.post.textColor // commentsId node text color ----*----
                                    : (d.data.postId ? styleConfig.comments.textColor  // post node text color ----*----
                                        : null))
                    )
                }
                // user to post, post to comment, comment to user relation ---*** ////
                function relationtext(d) {
                    return (
                        d.target.data.postRelationDetails !== undefined ? d.target.data.postRelationDetails[styleConfig.postRelationDetails.defaultCaption] // relation user to post
                            : (d.source.data.postId && d.target.data.commentId ? d.target.data.perentRelationDetails[styleConfig.perentRelationDetails.defaultCaption] //relation post to comments
                                : d.target.data.childRelationDetails ? d.target.data.childRelationDetails[styleConfig.childRelationDetails.defaultCaption] // relation user to comments
                                    : null)
                    )
                }
                // user to post, post to comment, comment to user stroke color ---*** ////
                function strokecolor(d) {
                    return (
                        d.target.data.postRelationDetails !== undefined ? styleConfig.postRelationDetails.defaultColor // relation user to post line stroke color
                            : (d.source.data.postId && d.target.data.commentId ? styleConfig.perentRelationDetails.defaultColor  // relation post to comments line stroke color
                                : d.target.data.childRelationDetails ? styleConfig.childRelationDetails.defaultColor // relation user to comments line stroke color
                                    : null)
                    )
                }
                // all relation stroke width color ---*** ////
                function relationStroke(d) {
                    return (
                        d.target.data.postRelationDetails !== undefined ? styleConfig.postRelationDetails.defaultSize // relation user to post line stroke color
                            : (d.source.data.postId && d.target.data.commentId ? styleConfig.perentRelationDetails.defaultSize // relation post to comments line stroke color
                                : d.target.data.childRelationDetails ? styleConfig.childRelationDetails.defaultSize // relation user to comments line stroke color
                                    : null)
                    )
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
                    console.log(i, d, 'dd')
                    if (d.children === null) {
                        d.children = d._children;
                        d._children = null;
                    }
                    update()
                }
                // collapsed btn show icons
                function clicked(i, d) {
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

                function drag(simulations) {
                    function dragstarted(event, d) {
                        if (!event.active) simulations.alphaTarget(0.3).restart();
                        d.fx = d.x;
                        d.fy = d.y;
                    }
                    function dragged(event, d) {
                        d.fx = event.x < 45 ? 45 : event.x > render.offsetWidth ? render.offsetWidth : event.x
                        d.fy = event.y < 45 ? 45 : event.y > render.offsetHeight ? render.offsetHeight : event.y
                        simulation.alpha(0).restart();
                    }
                    return d3.drag()
                        .on("start", dragstarted)
                        .on("drag", dragged);
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
                }
            } catch (error) {
                console.log('error get')
            }
        }, 100);
    }
    Neo4jRendar()
    window.addEventListener('resize', Neo4jRendar)
    return (null)
}
