import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = (props) => {
    return (
        <Plot
            data={[

                { type: 'bar', x: props.repoNames, y: props.repoSize, marker: { color: '#3e3e3e' } },
            ]}
            layout={{ width: 500, height: 240, title: props.label }}
        />
    );

}
export default BarChart;