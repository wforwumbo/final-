import React from 'react';
import PieChart from './PieChart.jsx';


let i = '';
let languages = '';

const LanguageList = (props) => {
    if (props.langslist) {
        { var total = 
            Object.entries(props.langslist).map(([key, value]) =>
                (value)).reduce((pv, cv) => pv + cv, 0)
        }
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {Math.round(100*value/total)}%
                        {console.log(i = i + value)}
                        {console.log(languages=languages+key+",")}

                    </li>

                )}
                <div className='Chart'>
                    <div>
                        {(i != ' ') ?
                            <div>
                        

                            <div>
<div>
                                <PieChart repoSize={i.split('')} repoNames={languages.split(',')} />
</div>
                                   
                                {i = ' '}
                                {languages = ' '}
                                </div>
                                </div>:
                            <div></div>
                        }
                </div>
         

                    </div>

            </ul>
        )
    } else { return null; }
};
export default LanguageList;