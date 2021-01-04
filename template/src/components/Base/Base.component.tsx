import React, { FunctionComponent } from 'react';

import { Wrapper, Link, Logo, Title } from './Base.styles';

import logo from '../../assets/logo/logo.svg';

const Base: FunctionComponent = () => {
    return (
        <Wrapper>
            <Link target="_blank" href="https://github.com/vinisaveg">
                <Logo src={logo} />
            </Link>
            <Title>
                This is a custom CRA template setup with Typescript and
                styled-components
            </Title>
        </Wrapper>
    );
};

export default Base;
