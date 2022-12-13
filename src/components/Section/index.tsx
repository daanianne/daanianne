import * as React from 'react'
import styled from 'styled-components';
import {
    KeyboardArrowDown,
    KeyboardArrowUp,
} from '@material-ui/icons';
import Title from '../Title';

const StyledCollapse = styled.div<{
    open: boolean;
}>`

`;

export interface IProps {
    defaultOpen?: boolean;
    title?: string;
    color?: string;
    children?: React.ReactChild | React.ReactChild[];
}

const Section: React.FC<IProps> = (props: IProps) => {
    const {
        defaultOpen=false,
        title,
        color,
    } = props;

    const [open, setOpen] = React.useState<boolean>(defaultOpen);

    const handleTitleClick = () => {
        setOpen(!open);
    };
    
    return (
        <StyledCollapse open={open}>
            <div
                style={{cursor: 'pointer', display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}
                onClick={handleTitleClick}
            >
                <Title color={color} italic={true}>
                    {title}
                </Title>
                {
                    open ?
                    <KeyboardArrowUp />
                    :
                    <KeyboardArrowDown />
                }
            </div>
            {open ? props.children : <></>}
        </StyledCollapse>
    )
}

export default Section