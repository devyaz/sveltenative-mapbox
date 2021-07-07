<page on:navigatedTo={onNavigatingTo}><!-- page binding the S + {N} way-->
<actionBar title="                          Svelte Mapbox" class="red" /><!-- colours in the app.css file just type the colour name-->
  <stackLayout>

    <contentView id="anim" >
      <mapBox
          accessToken="your mapbox token here"
          mapStyle="traffic_night"
          zoomLevel="12"
          showUserLocation="true"
          hideLogo="true"
          on:mapReady= "{onMapReady}"/>
 
    </contentView>
  </stackLayout>
</page>

<script lang="typescript">
import { navigate } from 'svelte-native'
import { onMount } from "svelte"
import { NativeElementNode } from 'svelte-native/dom';
import { Page ,Enums } from '@nativescript/core';
import { model}  from "../controllers/view";
let page: NativeElementNode<Page>
import { cubicOut } from 'svelte/easing';

  function onNavigatingTo(args ) { //to get the page object using {N} binding after i failed to use Svelte
    const page = args.object;
     model.set("page" ,page) //storing the page object in an Observable but not used for now
    let  an= page.getViewById('anim') //the ContentView holding the map to animate it now commented out below
   /*  setTimeout(() => {
      an.animate({
              translate: { x: 0, y: 100 },
             // scale:{ x: 40,y: 60},
              curve:Enums.AnimationCurve.spring,
              duration: 2000,
            // curve:  AnimationCurve.easeIn
        })
      
    }, 2000); */

    page.bindingContext = model;
}

 exports.onNavigatingTo = onNavigatingTo;
 
 onMount(() => {
   let view: model.page

   //page.nativeElement.getViewById('anim')//
})
 
  

 
  function onMapReady(args) {
    //console.log('map is ready!',args);

    
args.map.addMarkers([
    {
        lat: -14.001073,
        lng: 33.757403,
        title: 'Comtronic ',
        subtitle: 'Electronic & electric repairs',
        selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
      onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
    }]);


    args.map.setOnMapClickListener((point: LatLng) => { //i used this to get  gps coordinates on tap
            console.log("Map clicked at latitude: " + point.lat + ", longitude: " + point.lng);
           return true; //if you dont add this line app will crush because it returns NULL
        });

  }
 

  exports.onMapReady = onMapReady;
/*
function goTo(p) {
    navigate({
      page: p ,
      //props: { message: "Hello from master" }
    })
  }*/
</script>

<style>

</style>
