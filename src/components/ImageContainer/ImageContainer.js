import React from 'react';

const ImageContainer = ({
    clientPortrait, 
    name,
    allUsers,
    currentUserShown,
    nextUserToShow,
}) => {
    const prev = () => {
        nextUserToShow(currentUserShown >= allUsers.length - 1 ? 0 : currentUserShown + 1);
    };
    const next = () => {
        nextUserToShow(currentUserShown <= 0 ? allUsers.length - 1 : currentUserShown - 1)
    };

    return (
        <div className="img__container"> 
            <img 
                className='img__container--bg-pattern'
                src='/images/pattern-bg.svg'
                alt=''
            />
            <img 
                className="author-img"
                src={`/images/${clientPortrait}`}
                alt={`${name} portrait`}
            />
            <div className="pagination">
                <button className='prev' onClick={prev} aria-label="Button for previous slide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                        <path fill="none" stroke="#8585AC" stroke-width="2" d="M11 1L3 9l8 8"/>
                    </svg>
                </button>
                <button className='next' onClick={next} aria-label="Button for next slide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                        <path fill="none" stroke="#8585AC" stroke-width="2" d="M2 1l8 8-8 8"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ImageContainer;