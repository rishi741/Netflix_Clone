import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import {BrowseContainer} from '../containers/browse'
export default function Browser() {
    // the series and films
    const {series} = useContent('series');
    const {films}  = useContent('films');
    //console.log(series);
    //console.log(films);
    
    // slides
    const slides = selectionFilter({series,films});
    //console.log(slides);
    // pass it to browse container
    return (<BrowseContainer slides={slides} />)

}