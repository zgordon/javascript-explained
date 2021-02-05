import config from '../../src/config';

export default function Header() {
    return `<h1>${config.name}</h1>`;
}

