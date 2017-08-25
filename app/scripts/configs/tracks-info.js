import {
  svg1DAxisIcon,
  svg1DTilesIcon,
  svg2DHeatmapIcon,
  svg2DTilesIcon,
  svgArrowheadDomainsIcon,
  svgGeneAnnotationsIcon,
  svgHorizontalLineIcon,
  svgVertical1DAxisIcon,
  svgVertical1DTilesIcon,
  svgVerticalGeneAnnotationsIcon,
  svgVerticalLineIcon
} from './icons';

export const TRACKS_INFO = [
  {
    type: 'left-axis',
    datatype: ['axis'],
    local: true,
    orientation: '1d-vertical',
    name: 'Left Axis',
    thumbnail: svgVertical1DAxisIcon,
    minWidth: 100
  },
  {
    type: 'top-axis',
    datatype: ['axis'],
    local: true,
    orientation: '1d-horizontal',
    name: 'Top Axis',
    thumbnail: svg1DAxisIcon,
    defaultOptions: {}
  },
  {
    type: 'heatmap',
    datatype: ['matrix'],
    local: false,
    minHeight: 100,
    minWidth: 100,
    orientation: '2d',
    thumbnail: svg2DHeatmapIcon,
    defaultOptions: {
      labelPosition: 'bottomRight',
      colorRange: [
        'white',
        'rgba(245,166,35,1.0)',
        'rgba(208,2,27,1.0)',
        'black'
      ],  // corresponding to the fall colormap
      maxZoom: null,
      colorbarLabelsPosition: 'inside',
      colorbarPosition: 'topRight',
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    },
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'colorRange',
      'maxZoom',
      'dataTransform',
      'colorbarPosition',
      'colorbarLabelsPosition',
      'trackBorderWidth',
      'trackBorderColor'
    ]
  },
  {
    type: 'horizontal-heatmap',
    datatype: ['matrix'],
    local: false,
    minHeight: 40,
    minWidth: 100,
    orientation: '1d-horizontal',
    thumbnail: svg2DHeatmapIcon,
    defaultOptions: {
      labelPosition: 'bottomRight',
      labelColor: 'black',
      colorRange:[
        'white',
        'rgba(245,166,35,1.0)',
        'rgba(208,2,27,1.0)',
        'black'
      ],  // corresponding to the fall colormap
      maxZoom: null,
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    },
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'colorRange',
      'maxZoom',
      'dataTransform',
      'oneDHeatmapFlipped',
      'colorbarPosition',
      'colorbarLabelsPosition',
      'trackBorderWidth',
      'trackBorderColor'
    ]
  },
  {
    type: 'vertical-heatmap',
    datatype: ['matrix'],
    local: false,
    minWidth: 50,
    minHeight: 100,
    orientation: '1d-vertical',
    thumbnail: svg2DHeatmapIcon,
    defaultOptions: {
      labelPosition: 'bottomRight',
      labelColor: 'black',
      colorRange: [
        'white',
        'rgba(245,166,35,1.0)',
        'rgba(208,2,27,1.0)',
        'black'
      ],  //corresponding to the fall colormap
      maxZoom: null,
      colorbarLabelsPosition: 'inside',
      colorbarPosition: 'topRight',
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    },
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'colorRange',
      'maxZoom',
      'dataTransform',
      'oneDHeatmapFlipped',
      'colorbarPosition',
      'colorbarLabelsPosition',
      'trackBorderWidth',
      'trackBorderColor'
    ]
  },
  {
    type: 'horizontal-line',
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    thumbnail: svgHorizontalLineIcon,
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionHorizontal',
      'lineStrokeWidth',
      'lineStrokeColor',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      axisPositionHorizontal: 'right',
      lineStrokeColor: 'blue',
      lineStrokeWidth: 1,
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: .4
    }
  },
  //
  {
    type: 'vertical-line',
    datatype: ['vector'],
    local: false,
    orientation: '1d-vertical',
    thumbnail: svgVerticalLineIcon,
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionVertical',
      'lineStrokeWidth',
      'lineStrokeColor',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'bottomLeft',
      axisPositionVertical: 'top',
      lineStrokeWidth: 1,
      lineStrokeColor: 'blue',
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: .4
    }
  },
  {
    type: 'horizontal-point',
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionHorizontal',
      'pointColor',
      'pointSize',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      axisPositionHorizontal: 'right',
      pointColor: 'red',
      pointSize: 3,
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: .4
    }
  },
  {
    type: 'horizontal-bar',
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionHorizontal',
      'barFillColor',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor',
      'barOpacity'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      axisPositionHorizontal: 'right',
      barFillColor: 'darkgreen',
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: .4,
      barOpacity: 1
    }
  },
  {
    type: 'vertical-point',
    datatype: ['vector'],
    local: false,
    orientation: '1d-vertical',
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionHorizontal',
      'lineStrokeWidth',
      'lineStrokeColor',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      axisPositionHorizontal: 'right',
      lineStrokeColor: 'red',
      lineStrokeWidth: 1,
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: .4
    }
  },
  {
    type: '2d-tiles',
    datatype: ['matrix'],
    local: false,
    orientation: '2d',
    name: '2D Tile Outlines',
    thumbnail: svg2DTilesIcon
  },
  {
    type: 'horizontal-1d-value-interval',
    datatype: ['bed-value'],
    local: false,
    orientation: ['1d-horizontal'],
    name: '1D Rectangles',
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionHorizontal'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'bottomLeft',
      axisPositionHorizontal: 'left',
      lineStrokeColor: 'blue',
      valueScaling: 'linear'
    }
  },
  {
    type: 'vertical-1d-value-interval',
    datatype: ['bed-value'],
    local: false,
    orientation: ['1d-vertical'],
    name: '1D Rectangles',
    availableOptions: [ 'labelPosition',
    'labelColor',
    'labelTextOpacity',
    'labelBackgroundOpacity',
    'axisPositionVertical'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'bottomLeft',
      axisPositionVertical: 'top',
      lineStrokeColor: 'blue',
      valueScaling: 'linear'
    }
  },
  {
    type: 'top-stacked-interval',
    datatype: ['stacked-interval'],
    local: false,
    orientation: '1d-horizontal',
    thumbnail: 'horizontal-stacked-interval.png',
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity'
    ]
  },
  {
    type: 'left-stacked-interval',
    datatype: ['stacked-interval'],
    local: false,
    orientation: '1d-vertical',
    thumbnail: 'vertical-stacked-interval.png',
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity'
    ]
  },
  {
    type: 'viewport-projection-vertical',
    datatype: ['1d-projection'],
    local: true,
    hidden: true,
    orientation: '1d-vertical',
    name: 'Viewport Projection',
    thumbnail: 'viewport-projection-center.png',
    availableOptions: [
      'projectionFillColor',
      'projectionStrokeColor'
    ],
    defaultOptions: {
      projectionFillColor: '#777',
      projectionStrokeColor: '#777',
      projectionFillOpacity: 0.3,
      projectionStrokeOpacity: 0.3
    }
  },
  {
    type: 'viewport-projection-horizontal',
    datatype: ['1d-projection'],
    local: true,
    hidden: true,
    orientation: '1d-horizontal',
    name: 'Viewport Projection',
    thumbnail: 'viewport-projection-center.png',
    availableOptions: ['projectionFillColor', 'projectionStrokeColor'],
    defaultOptions: {
      projectionFillColor: '#777',
      projectionStrokeColor: '#777',
      projectionFillOpacity: 0.3,
      projectionStrokeOpacity: 0.3
    }
  },
  {
    type: 'viewport-projection-center',
    datatype: ['2d-projection'],
    local: true,
    hidden: true,
    orientation: '2d',
    name: 'Viewport Projection',
    thumbnail: 'viewport-projection-center.png',
    availableOptions: ['projectionFillColor', 'projectionStrokeColor'],
    defaultOptions: {
      projectionFillColor: '#777',
      projectionStrokeColor: '#777',
      projectionFillOpacity: 0.3,
      projectionStrokeOpacity: 0.3
    }
  },
  {
    type: 'horizontal-gene-annotations',
    datatype: ['gene-annotation'],
    local: false,
    minHeight: 55,
    orientation: '1d-horizontal',
    name: 'Gene Annotations',
    thumbnail: svgGeneAnnotationsIcon,
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'plusStrandColor',
      'minusStrandColor',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      plusStrandColor: 'blue',
      minusStrandColor: 'red',
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    }
  },
  {
    type: 'vertical-gene-annotations',
    datatype: ['gene-annotation'],
    local: false,
    minWidth: 55,
    orientation: '1d-vertical',
    name: 'Gene Annotations',
    thumbnail: svgVerticalGeneAnnotationsIcon,
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'plusStrandColor',
      'minusStrandColor',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      plusStrandColor: 'blue',
      minusStrandColor: 'red',
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    }
  },

  {
    type: 'arrowhead-domains',
    datatype: ['arrowhead-domains'],
    local: false,
    orientation: '2d',
    name: 'Arrowhead Domains',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    }
  },

  {
    type: 'vertical-2d-rectangle-domains',
    datatype: ['2d-rectangle-domains'],
    local: false,
    orientation: '1d-vertical',
    name: 'Vertical 2D Rectangle Domains',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    }
  },

  {
    type: 'horizontal-2d-rectangle-domains',
    datatype: ['2d-rectangle-domains'],
    local: false,
    orientation: '1d-horizontal',
    name: 'Horizontal 2D Rectangle Domains',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [ 'labelPosition',
    'labelColor',
    'labelTextOpacity',
    'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor',
      'rectangleDomainFillColor',
      'rectangleDomainStrokeColor',
      'rectangleDomainOpacity'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'bottomLeft',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      rectangleDomainFillColor: 'grey',
      rectangleDomainStrokeColor: 'black',
      rectangleDomainOpacity: 0.6
    }
  },

  {
    type: '2d-rectangle-domains',
    datatype: ['2d-rectangle-domains'],
    local: false,
    orientation: '2d',
    name: '2D Rectangle Domains',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'labelPosition',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor',
      'rectangleDomainFillColor',
      'rectangleDomainStrokeColor',
      'rectangleDomainOpacity'
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      rectangleDomainFillColor: 'grey',
      rectangleDomainStrokeColor: 'black',
      rectangleDomainOpacity: 0.6
    }
  },

  {
    type: 'square-markers',
    datatype: ['bedpe'],
    local: false,
    orientation: '2d',
    name: 'Square Markers',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [ 'labelPosition', 'labelColor' ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      trackBorderWidth: 0,
      trackBorderColor: 'black'
    }
  },

  {
    type: 'combined',
    datatype: 'any',
    local: true,
    orientation: 'any'
  }
  ,
  {
    type: '2d-chromosome-grid',
    datatype: ['chromsizes'],
    local: false,
    orientation: '2d',
    name: 'Chromosome Grid',
    chromInfoPath: '//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv',
    thumbnail: null,
    availableOptions: ['lineStrokeWidth', 'lineStrokeColor'],
    defaultOptions: {
      lineStrokeWidth: 1,
      lineStrokeColor: 'grey'
    }
  }
  ,
  {
    type: '2d-chromosome-annotations',
    local: true,
    orientation: '2d',
    name: '2D Chromosome Annotations',
    thumbnail: null,
    hidden: true
  },
  {
    type: '2d-chromosome-labels',
    datatype: ['chromsizes'],
    local: true,
    orientation: '2d',
    name: 'Pairwise Chromosome Labels',
    thumbnail: null
  }
  ,
  {
    type: 'horizontal-chromosome-labels',
    datatype: ['chromsizes'],
    orientation: '1d-horizontal',
    minHeight: 30,
    name: 'Chromosome Axis',
    thumbnail: null
  },
  {
    type: 'vertical-chromosome-labels',
    datatype: ['chromsizes'],
    orientation: '1d-vertical',
    minWidth: 20,
    minHeight: 30,
    name: 'Chromosome Axis',
    thumbnail: null
  }
  ,
  {
    type: 'vertical-1d-tiles',
    datatype: ['1d-tiles'],
    local: false,
    orientation: '1d-vertical',
    name: 'Vertical 1D Tile Outlines',
    thumbnail: svgVertical1DTilesIcon
  },
  {
    type: 'horizontal-1d-tiles',
    datatype: ['vector', 'stacked-interval', 'gene-annotation'],
    local: false,
    orientation: '1d-horizontal',
    name: 'Horizontal 1D Tile Outlines',
    thumbnail: svg1DTilesIcon
  },
  {
    type: 'osm-tiles',
    datatype: ['map-tiles'],
    local: true,
    orientation: '2d',
    hidden: true,
    name: 'OSM Tiles',
    thumbnail: null,
    defaultOptions: {
      minPos: 0,
      maxPos: 3120000000
    }
  },
  {
    type: 'mapbox-tiles',
    datatype: ['map-tiles'],
    local: true,
    orientation: '2d',
    hidden: true,
    name: 'Mapbox Tiles',
    thumbnail: null,
    availableOptions: ['mapboxStyle'],
    defaultOptions: {
      mapboxStyle: 'mapbox.streets'
    }
  }
];

export default TRACKS_INFO;
