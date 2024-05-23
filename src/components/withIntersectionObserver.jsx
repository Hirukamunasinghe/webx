import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FadeInWrapper = styled.div`
    opacity: 0;
    transition: opacity 1s ease-in-out;
    ${(props) =>
        props.inView &&
        css`
            opacity: 1;
            animation: ${fadeIn} 1.5s forwards;
        `}
`;

const withIntersectionObserver = (WrappedComponent) => {
    return (props) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        });

        return (
            <FadeInWrapper ref={ref} inView={inView}>
                <WrappedComponent {...props} />
            </FadeInWrapper>
        );
    };
};



export default withIntersectionObserver;
