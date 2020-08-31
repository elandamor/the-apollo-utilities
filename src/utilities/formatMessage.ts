import { prefersDarkMode } from './prefersDarkMode';

export const formatMessage = (
  operationType: string,
  operation: any,
  elapsed?: any,
) => {
  const color = prefersDarkMode()
    ? {
        gray: '#AAA',
        black: '#DDD',
      }
    : {
        gray: 'gray',
        black: '#222',
      };

  const headerCss = [
    `color: ${color.gray}; font-weight: lighter`, // title
    `color: ${
      operationType === 'query'
        ? '#02B875'
        : operationType === 'mutation'
        ? '#03A9F4'
        : '#FF3567'
    };`, // operationType
    `color: ${color.black};`, // operationName
  ];

  const parts = ['%c apollo'];

  parts.push(`%c${operationType}`);
  parts.push(`%c${operation.operationName}`);

  if (elapsed) {
    parts.push(`%c(in ${elapsed} ms)`);
    headerCss.push(`color: ${color.gray}; font-weight: lighter;`); // time
  }

  return [parts.join(' '), ...headerCss];
};
