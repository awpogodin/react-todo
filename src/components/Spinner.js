import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
    return (
        <div className="loading">
            <CircularProgress color="secondary"/>
        </div>
    )
};

export default Spinner;
