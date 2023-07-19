<template>
  <main>
    <div class="wrapOpenLayersMap">
      <ol-map
        class="openLayersMap"
        :loadTilesWhileAnimating="true"
        :loadTilesWhileInteracting="true"
        style="width: 500px"
      >
        <ol-view
          ref="view"
          :center="center"
          :rotation="rotation"
          :zoom="zoom"
          :projection="projection"
        />

        <ol-tile-layer>
          <ol-source-osm />
        </ol-tile-layer>
      </ol-map>
    </div>
  </main>
</template>

<script>
// Docu: https://vue3openlayers.netlify.app/componentsguide/sources/osm/

import { ref } from "vue";

export default {
  name: "OpenLayersMap",
  data() {
    return {
      center: ref([13.3777, 52.520008]),
      projection: ref("EPSG:4326"),
      zoom: ref(12),
      rotation: ref(0),
    };
  },
};
</script>

<style scoped>
.openLayersMap {
  /*max-width: 500px;*/
  height: 400px;
}

.wrapOpenLayersMap {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
