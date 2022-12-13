import * as React from 'react'
import {
    Link,
} from 'react-router-dom';
import { useWidth } from '../../hooks';
import {
    StyledCard,
    StyledCardImageShoulder,
    StyledCardImageContainer,
    StyledCardImage,
    StyledCardContent,
} from './index.style';

export interface IProps {
    name: string;
    location: string;
    color: string;
    image: string;
    isFirst?: boolean;
    isLast?: boolean;
}

const Card: React.FC<IProps> = (props: IProps) => {
    const {
        name,
        location,
        color,
        image,
        isFirst,
        isLast,
    } = props;

    const width = useWidth();
    
    return (
        <div>
            <Link to={location}>
                <StyledCard
                    color={color}
                    isFirst={isFirst}
                    isLast={isLast}
                >
                    <StyledCardImageContainer
                        _width={width}
                    >
                        <StyledCardImage
                            _width={width}
                            src={image}
                            alt={name}
                        />
                    </StyledCardImageContainer>
                    <StyledCardContent className={'card-content'}>
                        <div style={{flex:1}} />
                        {name}
                        <div style={{flex:1}} />
                    </StyledCardContent>
                </StyledCard>
            </Link>
        </div>
    )
}

export default Card