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
    trace1.labels = ["USA", 'United Kingdom', 'Japan', 'Switzerland', 'Israel',
    'Canada', 'France', 'Sweden', 'South Korea', 'Italy', 'Germany',
    'Netherlands', 'Finland', 'Norway', 'Australia', 'Denmark',
    'Singapore', 'Russia', 'China', 'Taiwan', 'Belgium'];
    trace1.values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    trace1.hole = 0.4;;
    trace1.textinfo = "label";
    trace1.textposition = "inside";
    trace1.hoverinfo = 'label+percent'
    for (let i=0; i<22; i++){
        for (let x=0; x< res.length; x++){
            if (res[x]['country'] == trace1.labels[i]){
                trace1.values[i] += 1;
            }
        }
    }

    let data = [];
    data.push(trace1);

    let layout = {
    margin: {
        t:50
        },
        legend: {
            size: 0.5
        },
    title:{
        text:'Country Porportion of 100 Ranking 2012-2015'
    },
    text:{
        size: 20
    }
    };
    Plotly.newPlot('myGraph', data, layout);
};

function drawBarChart(res) {

    let trace0 = {};
    trace0.type = 'bar';
    trace0.mode = 'markers';
    trace0.name = 'United Kingdom';
    trace0.x = ['2012','2013','2014','2015'];
    trace0.y = [0,0,0,0];
    trace0.marker = {
        color: 'gray',
        opacity: 0.5,
        line: {
            color: 'black',
            width: 2
        }
    };

    for (let x=0; x< res.length; x++){
        if (res[x]['country']=="United Kingdom"){
            if (res[x]['year']=="2012"){
                trace0.y[0] += 1;
            }else if (res[x]['year']=="2013"){
                trace0.y[1] += 1;
            }else if (res[x]['year']=="2014"){
                trace0.y[2] += 1;
            }else if (res[x]['year']=="2015"){
                trace0.y[3] += 1;
            }
        }
    }
    trace0.text = trace0.y.map(String);

    let trace1 = {};
    trace1.type = 'bar';
    trace1.mode = 'markers';
    trace1.name = 'Japan';
    trace1.x = ['2012','2013','2014','2015'];
    trace1.y = [0,0,0,0];
    trace1.marker = {
        color: 'lightgreen',
        opacity: 0.5,
        line: {
            color: 'darkgreen',
            width: 2
        }
    };

    for (let x=0; x< res.length; x++){
        if (res[x]['country']=="Japan"){
            if (res[x]['year']=="2012"){
                trace1.y[0] += 1;
            }else if (res[x]['year']=="2013"){
                trace1.y[1] += 1;
            }else if (res[x]['year']=="2014"){
                trace1.y[2] += 1;
            }else if (res[x]['year']=="2015"){
                trace1.y[3] += 1;
            }
        }
    }
    trace1.text = trace1.y.map(String);

    let trace2 = {};
    trace2.type = 'bar';
    trace2.mode = 'markers';
    trace2.name = 'Canada';
    trace2.x = ['2012','2013','2014','2015'];
    trace2.y = [0,0,0,0];
    trace2.marker = {
        color: 'lightblue',
        opacity: 0.5,
        line: {
            color: 'darkblue',
            width: 2
        }
    };
    
    for (let x=0; x< res.length; x++){
        if (res[x]['country']=="Canada"){
            if (res[x]['year']=="2012"){
                trace2.y[0] += 1;
            }else if (res[x]['year']=="2013"){
                trace2.y[1] += 1;
            }else if (res[x]['year']=="2014"){
                trace2.y[2] += 1;
            }else if (res[x]['year']=="2015"){
                trace2.y[3] += 1;
            }
        }
    }
    trace2.text = trace2.y.map(String);

    let data2 = [];
    data2.push(trace0);
    data2.push(trace1);
    data2.push(trace2);

    let layout2 = {
    margin: {
        t:50
        },
    title:{
        text:'The count of university in 100 Ranking 2012-2015'
    },
    xaxis: {
        title: 'Year',
        dtick: 1
    
    },
    legend: {
        x: 0,
        y: 1,
        orientation: 'h'
    }
    };
    Plotly.newPlot('myGraph2', data2, layout2);
};

function drawLineChart(res) {

    let trace0 = {};
    trace0.type = 'scatter';
    trace0.mode = 'lines+markers';
    trace0.name = 'Massachusetts Institute of Technology';
    trace0.lables = ['2012','2013','2014','2015'];
    trace0.line ={
        width: 4
    }
    trace0.x = [];
    trace0.y = [];
    i = 0;
    for (let x=0; x< res.length; x++){
        if (res[x]['institution']=="Massachusetts Institute of Technology"){
            trace0.y[i] = res[x]['world_rank'];
            trace0.x[i] = res[x]['year'];
            i += 1;
        }
    }

    let trace1 = {};
    trace1.type = 'scatter';
    trace1.mode = 'lines+markers';
    trace1.name = 'Harvard University';
    trace1.lables = ['2012','2013','2014','2015'];
    trace1.line ={
        width: 4
    }
    trace1.x = [];
    trace1.y = [];
    i = 0;
    for (let x=0; x< res.length; x++){
        if (res[x]['institution']=="Harvard University"){
            trace1.y[i] = res[x]['world_rank'];
            trace1.x[i] = res[x]['year'];
            i += 1;
        }
    }

    let trace2 = {};
    trace2.type = 'scatter';
    trace2.mode = 'lines+markers';
    trace2.name = 'University of Cambridge';
    trace2.lables = ['2012','2013','2014','2015'];
    trace2.line ={
        width: 4
    }
    trace2.x = [];
    trace2.y = [];
    i = 0;
    for (let x=0; x< res.length; x++){
        if (res[x]['institution']=="University of Cambridge"){
            trace2.y[i] = res[x]['world_rank'];
            trace2.x[i] = res[x]['year'];
            i += 1;
        }
    }

    let trace3 = {};
    trace3.type = 'scatter';
    trace3.mode = 'lines+markers';
    trace3.name = 'Stanford University';
    trace3.lables = ['2012','2013','2014','2015'];
    trace3.line ={
        width: 4
    }
    trace3.x = [];
    trace3.y = [];
    i = 0;
    for (let x=0; x< res.length; x++){
        if (res[x]['institution']=="Stanford University"){
            trace3.y[i] = res[x]['world_rank'];
            trace3.x[i] = res[x]['year'];
            i += 1;
        }
    }

    let trace4 = {};
    trace4.type = 'scatter';
    trace4.mode = 'lines+markers';
    trace4.name = 'University of Oxford';
    trace4.lables = ['2012','2013','2014','2015'];
    trace4.line ={
        width: 4
    }
    trace4.x = [];
    trace4.y = [];
    i = 0;
    for (let x=0; x< res.length; x++){
        if (res[x]['institution']=="University of Oxford"){
            trace4.y[i] = res[x]['world_rank'];
            trace4.x[i] = res[x]['year'];
            i += 1;
        }
    }

    let data3 = [];
    data3.push(trace0);
    data3.push(trace1);
    data3.push(trace2);
    data3.push(trace3);
    data3.push(trace4);
    

    let layout3 = {
    margin: {
        t:50
        },
    title:{
        text:'world ranking(2012-2015)'
    },
    xaxis: {
        title: 'Year',
        dtick: 1
    
    },
    legend: {
        x: 0,
        y: -0.15,
        orientation: 'h'
    },
    yaxis: {
        title: 'world ranking',
        dtick: 1,
        range: [8, 0]
    }
    };

    Plotly.newPlot('myGraph3', data3, layout3);
};








