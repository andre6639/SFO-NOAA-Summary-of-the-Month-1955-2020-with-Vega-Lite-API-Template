import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/andre6639/88b4af6963fb5ed29d6b86eb55edae91/raw/0053db0a299ce245974e4af5e22b7a10f53e26f7/SFO_SummaryOfTheMonth_1955thr2020.csv';

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};