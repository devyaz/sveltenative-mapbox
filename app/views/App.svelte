<page on:navigatedTo={onNavigatingTo}>
<actionBar title="                          FINDR" class="red" />
  <stackLayout>

    <contentView id="anim" >
      <mapBox
          accessToken="pk.eyJ1IjoibWFydGlubXRhd2FsaSIsImEiOiJjajViaG9sYXkyYzZ0MnFvYTdhbnI2amZ2In0.FkidTFDcehYOZc_DPX-BGw"
          mapStyle="traffic_night"
          zoomLevel="12"
          showUserLocation="true"
          hideLogo="true"
          on:mapReady= "{onMapReady}"/>
 
    </contentView>
  </stackLayout>
</page>

<script lang="typescript">
//import { onNavigatingTo } from '../controllers/page.ts'
import { navigate } from 'svelte-native'
import { onMount } from "svelte"
import { NativeElementNode } from 'svelte-native/dom';
import { Page ,Enums } from '@nativescript/core';
import { model}  from "../controllers/view";
let page: NativeElementNode<Page>
//import{TimelineLite , Ease} from 'greensock';
//import{ Mapbox}  from "@nativescript-community/ui-mapbox";
import { cubicOut } from 'svelte/easing';
 

  
  //  var webViewInterfaceModule = require('nativescript-webview-interface2');

  //let page: NativeElementNode<Page>
  //bind: page
  function onNavigatingTo(args ) {
    const page = args.object;
     model.set("page" ,page)
    let  an= page.getViewById('anim')
   /*  setTimeout(() => {
      an.animate({
              translate: { x: 0, y: 100 },
             // scale:{ x: 40,y: 60},
              curve:Enums.AnimationCurve.spring,
              duration: 2000,
            // curve:  AnimationCurve.easeIn
        })
      
    }, 2000); */
    //.set("state", "collapse");
    page.bindingContext = model;
}

 exports.onNavigatingTo = onNavigatingTo;
 
 onMount(() => {
   //page.nativeElement.getViewById('anim')
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


    args.map.setOnMapClickListener((point: LatLng) => {
            console.log("Map clicked at latitude: " + point.lat + ", longitude: " + point.lng);
           return true;
        });

  }
 

  exports.onMapReady = onMapReady;

function goTo(p) {
    navigate({
      page: p ,
      //props: { message: "Hello from master" }
    })
  }
</script>

<style>

</style>
