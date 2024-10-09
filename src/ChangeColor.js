import React, { useRef } from 'react';

const DraggableBox = () => {
    const boxRef = useRef(null);
    
    const handleMouseDown = (e) => {
        const box = boxRef.current;
        console.log(box);
        const shiftX = e.clientX - box.getBoundingClientRect().left;
        const shiftY = e.clientY - box.getBoundingClientRect().top;

        const moveAt = (pageX, pageY) => {
            box.style.left = pageX - shiftX + 'px';
            box.style.top = pageY - shiftY + 'px';
        };

        const onMouseMove = (e) => {
            moveAt(e.pageX, e.pageY);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };

    return (
        <div
            ref={boxRef}
            onMouseDown={handleMouseDown}
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'lightblue',
                position: 'absolute',
                cursor: 'move',
            }}
        ></div>
    );
};

export default DraggableBox;
