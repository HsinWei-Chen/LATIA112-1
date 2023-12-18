// GEt data
d3.csv("https://raw.githubusercontent.com/HsinWei-Chen/LATIA112-1/main/Hw4/cwurData.csv").then(
    res => {
        console.log(res);
        drawBarChart(res);
        drawPieChart(res);
        drawLineChart(res);
    }
);

function drawPieChart(res) {

    let trace1 = {};
    trace1.type = 'pie';
    trace1.title = 'Country Porportion';
    trace1.lables = ['USA', 'United Kingdom', 'Japan', 'Switzerland', 'Israel',
    'Canada', 'France', 'Sweden', 'South Korea', 'Italy', 'Germany',
    'Netherlands', 'Finland', 'Norway', 'Australia', 'Denmark',
    'Singapore', 'Russia', 'China', 'Taiwan', 'Belgium'];
    trace1.values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    trace1.hole = 0.5;
    for (let i=0; i<22; i++){
        for (let x=0; x< res.length; x++){
            if (res[x]['country'] == trace1.lables[i]){
                trace1.values[i] += 1;
            }
        }
    }

    let data = [];
    data.push(trace1);

    let layout = {
    margin: {
        t:0
        },
        legend: {
            size: 0.5
        }
    };
    Plotly.newPlot('myGraph', data, layout);
};

function drawBarChart(res) {

    let trace2 = {};
    trace2.type = 'bar';
    trace2.mode = 'markers';
    trace2.title = 'United Kindom 100 Ranking 2012-2015';
    trace2.x = ['2012','2013','2014','2015'];
    trace2.y = [0,0,0,0];

    for (let x=0; x< res.length; x++){
        if (res[x]['year']=="2012" && res[x]['country']=="United Kingdom"){
            trace2.y[0] += 1;
        }else if (res[x]['year']=="2013" && res[x]['country']=="United Kingdom"){
            trace2.y[1] += 1;
        }else if (res[x]['year']=="2014" && res[x]['country']=="United Kingdom"){
            trace2.y[2] += 1;
        }else if (res[x]['year']=="2015" && res[x]['country']=="United Kingdom"){
            trace2.y[3] += 1;
        }
    }

    let data2 = [];
    data2.push(trace2);

    let layout2 = {
    margin: {
        t:0
        },
    };
    Plotly.newPlot('myGraph2', data2, layout2);
};

function drawLineChart(res) {

    let trace3 = {};
    trace3.type = 'scatter';
    trace3.mode = 'lines+markers';
    trace3.title = 'MIT world ranking(2012-2015)';
    trace3.lables = ['2012','2013','2014','2015'];
    trace3.x = [];
    trace3.y = [];
    i = 0;
    for (let x=0; x< res.length; x++){
        if (res[x]['institution']=="Massachusetts Institute of Technology"){
            trace3.y[i] = res[x]['world_rank'];
            trace3.x[i] = res[x]['year'];
            i += 1;
        }
    }

    let data3 = [];
    data3.push(trace3);

    let layout3 = {
    margin: {
        t:0
        },
    title:{
        text:'MIT world ranking(2012-2015)'
    }
    };

    Plotly.newPlot('myGraph3', data3, layout3);
};








