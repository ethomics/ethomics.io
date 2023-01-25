import React from 'react';
import Dataset from './Dataset';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const DatasetsPage = ( {datasets} ) => {
    return (
        <div>
            { datasets.map(dataset => <Dataset/> )}
        </div>
    );
};

export default DatasetsPage;