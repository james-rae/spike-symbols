// without this import, this file doesn't end up in the build
import './css/style.css';

import EsriMap from '@arcgis/core/Map';
import EsriMapView from '@arcgis/core/views/MapView';

// everything after is what executes at startup

const map = new EsriMap({
    basemap: 'terrain'
});

const view = new EsriMapView({ map, container: 'map', center: [-87, 47.5], zoom: 10 });
