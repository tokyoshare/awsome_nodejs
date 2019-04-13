const CSVToJSON = (data, delimiter = ',') => {
  //get array of column names
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  //get array of rows
  const rows = data.slice(data.indexOf('\n') + 1) .split('\n');
  //return array of json objects
  return rows.map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};