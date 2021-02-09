(function (vega, vegaLite, vl, vegaTooltip, d3) {
  'use strict';

  vega = vega && Object.prototype.hasOwnProperty.call(vega, 'default') ? vega['default'] : vega;
  vegaLite = vegaLite && Object.prototype.hasOwnProperty.call(vegaLite, 'default') ? vegaLite['default'] : vegaLite;
  vl = vl && Object.prototype.hasOwnProperty.call(vl, 'default') ? vl['default'] : vl;

  // Appearance customization to improve readability.
  // See https://vega.github.io/vega-lite/docs/
  const dark = '#3e3c38';
  const config = {
    axis: {
      domain: false,
      tickColor: 'lightGray'
    },
    style: {
      "guide-label": {
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        fontSize: 30,
        fill: dark
      }
    }
  };

  const csvUrl = 'https://gist.githubusercontent.com/andre6639/88b4af6963fb5ed29d6b86eb55edae91/raw/0053db0a299ce245974e4af5e22b7a10f53e26f7/SFO_SummaryOfTheMonth_1955thr2020.csv';

  const getData = async () => {
    const data = await d3.csv(csvUrl);
    
    // Have a look at the attributes available in the console!
    console.log(data[0]);

    return data;
  };

  const viz = vl.markPoint()
    .encode(
      vl.x().fieldT('DATE').scale({ zero: false }),
      vl.y().fieldQ('AverageTemperature').scale({ zero: false }),
      vl.tooltip().fieldN('AverageTemperature')
    );

  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new vegaTooltip.Handler().call); }
  });

  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);
    
    document.body.appendChild(await marks.render());
  };
  run();

}(vega, vegaLite, vl, vegaTooltip, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsImdldERhdGEuanMiLCJ2aXouanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBlYXJhbmNlIGN1c3RvbWl6YXRpb24gdG8gaW1wcm92ZSByZWFkYWJpbGl0eS5cbi8vIFNlZSBodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EtbGl0ZS9kb2NzL1xuY29uc3QgZGFyayA9ICcjM2UzYzM4JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGF4aXM6IHtcbiAgICBkb21haW46IGZhbHNlLFxuICAgIHRpY2tDb2xvcjogJ2xpZ2h0R3JheSdcbiAgfSxcbiAgc3R5bGU6IHtcbiAgICBcImd1aWRlLWxhYmVsXCI6IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGZpbGw6IGRhcmtcbiAgICB9LFxuICAgIFwiZ3VpZGUtdGl0bGVcIjoge1xuICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgZmlsbDogZGFya1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgeyBjc3YgfSBmcm9tICdkMyc7XG5cbmNvbnN0IGNzdlVybCA9ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FuZHJlNjYzOS84OGI0YWY2OTYzZmI1ZWQyOWQ2Yjg2ZWI1NWVkYWU5MS9yYXcvMDA1M2RiMGEyOTljZTI0NTk3NGU0YWY1ZTIyYjdhMTBmNTNlMjZmNy9TRk9fU3VtbWFyeU9mVGhlTW9udGhfMTk1NXRocjIwMjAuY3N2JztcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjc3YoY3N2VXJsKTtcbiAgXG4gIC8vIEhhdmUgYSBsb29rIGF0IHRoZSBhdHRyaWJ1dGVzIGF2YWlsYWJsZSBpbiB0aGUgY29uc29sZSFcbiAgY29uc29sZS5sb2coZGF0YVswXSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59OyIsImltcG9ydCB2bCBmcm9tICd2ZWdhLWxpdGUtYXBpJztcbmV4cG9ydCBjb25zdCB2aXogPSB2bC5tYXJrUG9pbnQoKVxuICAuZW5jb2RlKFxuICAgIHZsLngoKS5maWVsZFQoJ0RBVEUnKS5zY2FsZSh7IHplcm86IGZhbHNlIH0pLFxuICAgIHZsLnkoKS5maWVsZFEoJ0F2ZXJhZ2VUZW1wZXJhdHVyZScpLnNjYWxlKHsgemVybzogZmFsc2UgfSksXG4gICAgdmwudG9vbHRpcCgpLmZpZWxkTignQXZlcmFnZVRlbXBlcmF0dXJlJylcbiAgKTsiLCJpbXBvcnQgdmVnYSBmcm9tICd2ZWdhJztcbmltcG9ydCB2ZWdhTGl0ZSBmcm9tICd2ZWdhLWxpdGUnO1xuaW1wb3J0IHZsIGZyb20gJ3ZlZ2EtbGl0ZS1hcGknO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJ3ZlZ2EtdG9vbHRpcCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9nZXREYXRhJztcbmltcG9ydCB7IHZpeiB9IGZyb20gJy4vdml6JztcblxudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHtcbiAgdmlldzogeyByZW5kZXJlcjogJ3N2ZycgfSxcbiAgaW5pdDogdmlldyA9PiB7IHZpZXcudG9vbHRpcChuZXcgSGFuZGxlcigpLmNhbGwpOyB9XG59KTtcblxuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYXJrcyA9IHZpelxuICAgIC5kYXRhKGF3YWl0IGdldERhdGEoKSlcbiAgICAud2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgLmF1dG9zaXplKHsgdHlwZTogJ2ZpdCcsIGNvbnRhaW5zOiAncGFkZGluZycgfSlcbiAgICAuY29uZmlnKGNvbmZpZyk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF3YWl0IG1hcmtzLnJlbmRlcigpKTtcbn07XG5ydW4oKTsiXSwibmFtZXMiOlsiY3N2IiwiSGFu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