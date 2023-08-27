<template>
    <apexchart height="100" width="250" type="area" :options="options" :series="series"></apexchart>
</template>

<script setup>
import { ref } from 'vue'

const options = {
    chart: {
        id: 'sparkline1',
        type: 'area',
        height: 140,
        sparkline: {
        enabled: true
        },
        group: 'sparklines',
        
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    stroke: {
        curve: 'smooth',
        width: 4,
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: true,
            position: 'right'
        },
        x: {
            show: false
        }
    },
    colors: ['#800080'],
    fill: {
    type: 'gradient',
    colors: ['#800080']
    },
};

const series = ref([
    {
        name: 'series-1',
        data: [30, 40, 45, 70, 49, 80, 70, 91]
    },
]);
</script>

<style lang="scss">

</style>
