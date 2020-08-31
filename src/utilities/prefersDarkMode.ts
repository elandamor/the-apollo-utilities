export const prefersDarkMode = (
  queries = ['(prefers-color-scheme: dark)'],
  values = [true],
  defaultValue = false,
) => {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q: any) => window.matchMedia(q));

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex((mql: any) => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  return getValue();
};
