import React from 'react';

const QuoteContainer = ({name, title, quote}) => {
    return (
        <div className="quote__container">
            <p className="quote">{ quote }</p>
            <div className="author-title">
                <span className="author">{ name }</span>
                <span className="job-title">{ title }</span>
            </div>
        </div>
    )
}

export default QuoteContainer;