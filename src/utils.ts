// this should match the package.json homepage field with '/images' on the end
const HOST = 'https://daanianne.github.io';
const BASE_PATH = 'daanianne';
const HOMEPAGE_PREFIX = `${HOST}/${BASE_PATH}`;

export const getImageUrl = (imageName: string) => {
    return `${HOMEPAGE_PREFIX}/images/${imageName}`;
};

export const getLinkUrl = (pageName: string) => {
    return `${pageName}`;
}