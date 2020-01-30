import React from "react";

const styles = {
    error: {
        margin: '6px',
        color: '#f44336',
        fontWeight: '300'
    }
};

const ErrorFootnote = props => {
    const {error} = props;
    return (
        <span style={styles.error}>{error}</span>
    );
};

export default ErrorFootnote;
