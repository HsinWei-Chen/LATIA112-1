// GEt data
d3.csv("https://raw.githubusercontent.com/HsinWei-Chen/LATIA112-1/main/cwurData.csv").then(
    res => {
        console.log(res);
        drawBarChart(res);
        drawPieChart(res);
    }
);

function drawPieChart(res) {

    let trace1 = {};
    trace1.type = 'pie';
    trace1.title = 'Sexual Distribution';
    trace1.lables = ['Male','Female'];
    trace1.values = [0,0];
    trace1.hole = 0.5;

    for (let x=0; x< res.length; x++){
        if (res[x]['Sex']=="male"){
            trace1.values[0] += 1;
        }else{
            trace1.values[1] += 1;
        
        }
    }
    let data = [];
    data.push(trace1);

    let layout = {
    margin: {
        t:0
        },
    };
    Plotly.newPlot('myGraph', data, layout);
};

function drawBarChart(res) {

    let trace1 = {};
    trace1.type = 'bar';
    trace1.title = 'Port of Embarkation';
    trace1.x = ['S','C','Q'];
    trace1.y = [0,0,0];

    for (let x=0; x< res.length; x++){
        if (res[x]['Embarked']=="S"){
            trace1.y[0] += 1;
        } else if (res[x]['Embarked']=="C"){
            trace1.y[1] += 1;
        } else {
            trace1.y[2] += 1;
    }
    }

    let data2 = [];
    data2.push(trace1);

    let layout2 = {
    margin: {
        t:0
        },
    };
    Plotly.newPlot('myGraph2', data2, layout2);
};







