const os = require('os');

const macOS = os.homedir() + '/Library/Application Support/Code/User/snippets/';
const windows = '%APPDATA%\\Code\\User\\snippets\\';
const linux = os.homedir() + '/.config/Code/User/snippets/';

const getSnippetFolderForOS = () => {
    switch (os.platform()) {
        case 'darwin':
            return macOS;
        case 'win32':
            return windows;
        case 'linux':
            return linux;
        default:
            throw new Error('Unsupported OS');
    }
};

export const SNIPPET_FOLDER = getSnippetFolderForOS();
