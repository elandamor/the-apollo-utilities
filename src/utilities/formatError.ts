import { prefersDarkMode } from './prefersDarkMode';

export const formatError = (message: any, path?: any) => {
  const color = prefersDarkMode()
    ? {
        gray: '#AAA',
        black: '#CCC',
      }
    : {
        gray: 'gray',
        black: '#333',
      };

  if (path) {
    const headerCss = [
      `color: ${color.gray}; font-weight: lighter`, // title
      `color: ${color.black}; font-weight: 600`, // message
      `color: ${color.gray}; font-weight: lighter`, // on
      `color: ${color.black}; font-weight: 600`, // path
      `color: ${color.gray}; font-weight: lighter`, // request.
    ];

    const parts = ['%c message'];

    parts.push(`%c${message}`);
    parts.push('%con');
    parts.push(`%c${path.join('.')}`);
    parts.push('%crequest');

    return [parts.join(' '), ...headerCss];
  }

  const headerCss = [
    `color: ${color.gray}; font-weight: lighter`, // title
    `color: ${color.black}; font-weight: 600`, // message
  ];

  const parts = ['%c message'];

  parts.push(`%c${message}`);

  return [parts.join(' '), ...headerCss];
};
