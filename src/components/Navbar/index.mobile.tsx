// navbar for mobile version
import * as React from 'react';
import {
    Menu,
    KeyboardArrowDown,
    KeyboardArrowUp,
} from '@material-ui/icons';
import {
    StyledNavbar,
    StyledNavbarGroup,
    StyledNavbarItem,
    StyledMobileNavbar,
    StyledMobileNavbarShoulder,
    StyledMobileNavbarDropdown,
    StyledMobileNavbarDropdownItem,
} from './index.style';

export interface IProps {
    resumeClicked: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const MobileNavbar: React.FC<IProps> = (props: IProps) => {
    const {
        resumeClicked,
    } = props
    
    const [open, setOpen] = React.useState<boolean>(false);
    const [workMenuOpen, setWorkMenuOpen] = React.useState<boolean>(false);

    const handleMenuClick = React.useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        event.nativeEvent.preventDefault();

        setOpen(!open);
    }, [open]);

    const handleWorkMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        event.nativeEvent.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopPropagation();

        setWorkMenuOpen(!workMenuOpen);
    };

    return (
        <>
            <StyledNavbar>
                <StyledNavbarGroup>
                    <StyledNavbarItem to={'/home'}>
                        Danielle Humilde
                    </StyledNavbarItem>
                </StyledNavbarGroup>
                <StyledNavbarGroup>
                    <StyledNavbarItem
                        to={'/'}
                        onClick={handleMenuClick}
                    >
                        <Menu />
                    </StyledNavbarItem>
                </StyledNavbarGroup>
            </StyledNavbar>
            <StyledMobileNavbar
                open={open}
                onClick={() => { setOpen(false); setWorkMenuOpen(false); }} // clicking any child will close the menu
            >
                <StyledNavbarGroup isMobile={true}>
                    <StyledMobileNavbarShoulder />
                    <StyledNavbarItem
                        to={'/home'}
                        isMobile={true}
                    >
                        Home
                    </StyledNavbarItem>
                    <StyledMobileNavbarShoulder />
                </StyledNavbarGroup>
                <StyledNavbarGroup isMobile={true}>
                    <StyledMobileNavbarShoulder />
                    <StyledNavbarItem
                        to={'/work'}
                        isMobile={true}
                    >
                        Work
                    </StyledNavbarItem>
                    <StyledMobileNavbarShoulder
                        onClick={handleWorkMenuClick}
                    >
                        {
                            workMenuOpen ?
                            <KeyboardArrowUp
                                style={{ color: '#696767' }}
                            />
                            :
                            <KeyboardArrowDown
                                style={{ color: '#696767' }}
                            />
                        }
                    </StyledMobileNavbarShoulder>
                </StyledNavbarGroup>
                <StyledMobileNavbarDropdown open={workMenuOpen}>
                    <StyledMobileNavbarDropdownItem to={'/work/toronto-tube'}>
                        Toronto Tube
                    </StyledMobileNavbarDropdownItem>
                    <StyledMobileNavbarDropdownItem to={'/work/subtle-t'}>
                        Subtle-T
                    </StyledMobileNavbarDropdownItem>
                    <StyledMobileNavbarDropdownItem to={'/work/smart-mirror'}>
                        Smart Mirror
                    </StyledMobileNavbarDropdownItem>
                    <StyledMobileNavbarDropdownItem to={'/work/digital-marketing'}>
                        Digital Marketing
                    </StyledMobileNavbarDropdownItem>                    
                </StyledMobileNavbarDropdown>
                <StyledNavbarGroup isMobile={true}>
                    <StyledMobileNavbarShoulder />
                    <StyledNavbarItem
                        to={'/about'}
                        isMobile={true}    
                    >
                        About
                    </StyledNavbarItem>
                    <StyledMobileNavbarShoulder />
                </StyledNavbarGroup>
                <StyledNavbarGroup isMobile={true}>
                    <StyledMobileNavbarShoulder />
                    <StyledNavbarItem
                        to={'/contact'}
                        isMobile={true}
                    >
                        Contact
                    </StyledNavbarItem>
                    <StyledMobileNavbarShoulder />
                </StyledNavbarGroup>
                <StyledNavbarGroup isMobile={true}>
                    <StyledMobileNavbarShoulder />
                    <StyledNavbarItem
                        to={'/resume'}
                        isMobile={true}
                        onClick={resumeClicked}
                    >
                        Resume
                    </StyledNavbarItem>
                    <StyledMobileNavbarShoulder />
                </StyledNavbarGroup>
            </StyledMobileNavbar>
        </>
    )
}

export default MobileNavbar