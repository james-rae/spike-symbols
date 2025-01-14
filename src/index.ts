// without this import, this file doesn't end up in the build
import './css/style.css';

import EsriMap from '@arcgis/core/Map';
import EsriMapView from '@arcgis/core/views/MapView';
import EsriGraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import EsriGraphic from '@arcgis/core/Graphic';
import EsriPoint from '@arcgis/core/geometry/Point';
import EsriSimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

// everything after is what executes at startup

const map = new EsriMap({
    basemap: 'terrain'
});

const view = new EsriMapView({ map, container: 'map', center: [-87, 47.5], zoom: 10 });

const spikeLayer = new EsriGraphicsLayer({ id: 'spike' });
map.add(spikeLayer);

const point = new EsriPoint({
    longitude: -87,
    latitude: 47.5
});

const markerSymbol = new EsriSimpleMarkerSymbol({
    color: [226, 119, 40]
});

// Create a graphic and add the geometry and symbol to it
const spike1 = new EsriGraphic({
    geometry: point,
    symbol: markerSymbol
});

spikeLayer.add(spike1);
