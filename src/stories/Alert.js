import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({
    title,
    text,
    ohNoColor
}) => (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
        <p className="font-bold m-0">{title}</p>
        <p className="m-0">{text} <span className="italic font-semibold" style={{ backgroundColor: ohNoColor }}>Oh no!</span></p>
    </div>
);

Alert.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    ohNoColor: PropTypes.string,
};