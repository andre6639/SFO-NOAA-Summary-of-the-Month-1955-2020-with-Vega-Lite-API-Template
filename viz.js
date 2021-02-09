import vl from 'vega-lite-api';
export const viz = vl.markPoint()
  .encode(
    vl.x().fieldT('DATE').scale({ zero: false }),
    vl.y().fieldQ('AverageTemperature').scale({ zero: false }),
    vl.tooltip().fieldN('AverageTemperature')
  );