import * as React from 'react';
import { 
    useIsMobile,
} from '../../hooks';
import {
    Card,
} from '../../components';
import {
    StyledGrid,
    StyledGridRow,
} from './index.style';
import { getImageUrl, getLinkUrl } from '../../utils';

type ProjectData = {
    name: string;
    location: string;
    color: string;
    image: string;
};

const projectGridData: ProjectData[] = [
    {
        name: 'Toronto Tube',
        location: getLinkUrl('work/toronto-tube'),
        color: '#DECAF2',
        image: 'toronto_tube_preview.png',
    },
    {
        name: 'Subtle-T',
        location: getLinkUrl('work/subtle-t'),
        color: '#F97781',
        image: 'subtle_t_preview.png',
    },
    {
        name: 'Smart Mirror',
        location: getLinkUrl('work/smart-mirror'),
        color: '#EFB877',
        image: 'smart_mirror_preview.png',
    },
    {
        name: 'Digital Marketing',
        location: getLinkUrl('work/digital-marketing'),
        color: '#CADFF2',
        image: 'digital_marketing_preview.png',
    }
];

export interface IProps {
    
}

const ProjectGrid: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const isMobile = useIsMobile();

    const cardsPerRow = isMobile ? 1 : 2;

    const cards: ProjectData[][] = React.useMemo(() => {
        return projectGridData.reduce((acc, curr) => {
            if (acc.length === 0) {
                acc.push([]);
            }

            if (acc[acc.length-1].length < cardsPerRow) {
                acc[acc.length-1].push(curr);
            }
            else {
                acc.push([curr]);
            }

            return acc;
        }, [] as ProjectData[][]);
    }, [cardsPerRow]);
    
    return (
        <StyledGrid isMobile={isMobile}>
            {
                cards.map((cardRow, index) => (
                    <StyledGridRow key={index}>
                        {
                            cardRow.map((cardData, index) => (
                                <React.Fragment key={cardData.name}>
                                    <Card
                                        name={cardData.name}
                                        location={cardData.location}
                                        color={cardData.color}
                                        image={getImageUrl(cardData.image)}
                                        isFirst={index===0}
                                        isLast={index===(cardRow.length-1)}
                                    />
                                </React.Fragment>
                            ))
                        }
                    </StyledGridRow>
                ))
            }
        </StyledGrid>
    );
}

export default ProjectGrid