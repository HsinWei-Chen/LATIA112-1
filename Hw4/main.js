// GEt data
d3.csv("https://raw.githubusercontent.com/HsinWei-Chen/LATIA112-1/main/Hw4/cwurData.csv").then(
    res => {
        console.log(res);
        drawBarChart(res);
        drawPieChart(res);
    }
);

function drawPieChart(res) {

    let trace1 = {};
    trace1.type = 'pie';
    trace1.title = 'Country Porportion';
    trace1.lables = ['USA', 'United Kingdom', 'Japan', 'Switzerland', 'Israel',
    'Canada', 'France', 'Sweden', 'South Korea', 'Italy', 'Germany',
    'Netherlands', 'Finland', 'Norway', 'Australia', 'Denmark',
    'Singapore', 'Russia', 'China', 'Taiwan', 'Belgium',
    'South Africa', 'Spain', 'Brazil', 'Hong Kong', 'Ireland',
    'Austria', 'New Zealand', 'Portugal', 'Thailand', 'Czech Republic',
    'Malaysia', 'India', 'Greece', 'Mexico', 'Hungary', 'Argentina',
    'Turkey', 'Poland', 'Saudi Arabia', 'Chile', 'Iceland', 'Slovenia',
    'Estonia', 'Lebanon', 'Croatia', 'Colombia', 'Slovak Republic',
    'Iran', 'Egypt', 'Serbia', 'Bulgaria', 'Lithuania', 'Uganda',
    'United Arab Emirates', 'Uruguay', 'Cyprus', 'Romania',
    'Puerto Rico'];
    trace1.values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    trace1.hole = 0.5;

    for (let i=0; i<100; i++) {
        trace1.x[i] = res[i]['release_year'];
        trace1.y[i] = res[i]['revenue'];
        trace1.text[i] = res[i]['title'];
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







