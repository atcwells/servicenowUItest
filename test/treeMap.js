var OPSD2VisHeatMapConfig = Class.create(OPSD2VisConfig, {

    node: null,
    root: null,
    x: null,
    y: null,
    color: null,
    plot: null,
    svg: null,

    init: function () {
        var self = this;
        self.node = self.root = self.details.data;
        self.x = d3.scale.linear().range([0, self.details.width]);
        self.y = d3.scale.linear().range([0, self.details.height]);
        self.color = d3.scale.category20c();

        var treemap = d3.layout.treemap()
            .round(false)
            .size([self.details.width, self.details.height])
            .sticky(true)
            .value(function (d) {
                return d.size;
            });

        self.plot = self.svg = d3.select(self.details.container).append("div")
            .attr("class", "chart")
            .style("width", self.details.width + "px")
            .style("height", self.details.height + "px")
            .append("svg:svg")
            .attr("width", self.details.width)
            .attr("height", self.details.height)
            .append("svg:g")
            .attr("transform", "translate(.5,.5)");

        var nodes = treemap.nodes(self.root)
            .filter(function (d) {
                return !d.children;
            });

        var cell = self.svg.selectAll("g")
            .data(nodes)
            .enter().append("svg:g")
            .attr("class", "cell")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            })
            .on('mouseover', function (d) {
                d3.select(this).style({opacity: '0.8'});
            })
            .on('mouseout', function (d) {
                d3.select(this).style({opacity: '1.0'});
            })
            .on("click", function (d) {
                return self.zoom(self.node == d.parent ? self.root : d.parent);
            });

        cell.append("svg:rect")
            .attr("width", function (d) {
                return d.dx - 1;
            })
            .attr("height", function (d) {
                return d.dy - 1;
            })
            .style("fill", function (d) {
                return self.color(d.parent.name);
            });

        cell.append("svg:text")
            .attr("x", function (d) {
                return d.dx / 2;
            })
            .attr("y", function (d) {
                return d.dy / 2;
            })
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text(function (d) {
                return d.name;
            })
            .style("opacity", function (d) {
                d.w = this.getComputedTextLength();
                return d.dx > d.w ? 1 : 0;
            });

        d3.select(window).on("click", function () {
            self.zoom(self.root);
        });
    },

    size: function (d) {
        return d.size;
    },

    one: function () {
        return 1;
    },

    zoom: function (d) {
        var self = this;
        var kx = self.details.width / d.dx, ky = self.details.height / d.dy;
        self.x.domain([d.x, d.x + d.dx]);
        self.y.domain([d.y, d.y + d.dy]);

        var t = self.svg.selectAll("g.cell").transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .attr("transform", function (d) {
                return "translate(" + self.x(d.x) + "," + self.y(d.y) + ")";
            });

        t.select("rect")
            .attr("width", function (d) {
                return kx * d.dx - 1;
            })
            .attr("height", function (d) {
                return ky * d.dy - 1;
            });

        t.select("text")
            .attr("x", function (d) {
                return kx * d.dx / 2;
            })
            .attr("y", function (d) {
                return ky * d.dy / 2;
            })
            .style("opacity", function (d) {
                return kx * d.dx > d.w ? 1 : 0;
            });

        self.node = d;
        d3.event.stopPropagation();
    },

    populateRequest: function (ga) {
    },

    doesUpdate: function () {
        return true;
    },

    processResponse: function (jsonData) {
        var self = this;
        var details = this.details;
        details.data = jsonData.lineData;
        this.render();
    },

    render: function () {
        var self = this;
        var details = this.details;
        this.plot.selectAll("path")
            .data([details.data])
            .transition()
            .attr("d", this.line);
    }
});