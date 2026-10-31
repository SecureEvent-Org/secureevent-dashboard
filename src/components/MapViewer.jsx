import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

//se leee el token cargado en el archivo .env
mapboxgl.accessToken=import.meta.env.VITE_MAPBOX_TOKEN;

export const MapViewer=() => {
    const mapContainer =useRef(null);
    const map = useRef(null);

    //aqui nuestras coordenadas del CETI (Longitud y Latutud)
    //llegara el momento que tengo que modificar estas coordenadas al edificio F para la prueba piloto

    const cetiLongitud = -103.3892585 ;
    const cetiLatitud = 20.7030364;

    useEffect(() => {
        if (map.current)return;
        //conf inicial del mapa
        map.current=new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',//tema oscuro para el dashboard
            center:[cetiLongitud,cetiLatitud],
            zoom:16.5 //zoom central del campus (para edificio F subir a ~18.5)
    });
    //Añade los controles de navegacion (+/- zoom y brujula) en la esquina superior derecha
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
},[]);
return(
    <div className='w-full h-screen relative'>
        <div ref={mapContainer} className='w-full h-full'></div>
    </div>
);
};