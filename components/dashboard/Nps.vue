<template>
  <div>
    <ClientOnly>
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="chartSeries"
      ></apexchart>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ApexOptions } from 'apexcharts'

// const viajes = [
//   {
//     encuesta: 'ESCOCIA 2024',
//     division: 'FiT',
//     scores: { detractors: 1, neutral: 1, promoters: 1, nps: 0 },
//   },
//   {
//     encuesta: 'Encuesta viaje 84',
//     division: 'Receptivo',
//     scores: { detractors: 2, neutral: 1, promoters: 1, nps: -25 },
//   },
//   {
//     encuesta: 'Augusta 202496659',
//     division: 'FiT',
//     scores: { detractors: 1, neutral: 2, promoters: 0, nps: -33.33 },
//   },
//   {
//     encuesta: 'PEBBLE BEACH 2024',
//     division: 'FiT',
//     scores: { detractors: 0, neutral: 0, promoters: 1, nps: 100 },
//   },
//   {
//     encuesta: 'ARGENTINA INVITATIONAL (11VA EDICIÓN)',
//     division: 'Viajes Fijos',
//     scores: { detractors: 0, neutral: 0, promoters: 1, nps: 100 },
//   },
//   {
//     encuesta: 'PUNTA CANA 2024',
//     division: 'FiT',
//     scores: { detractors: 1, neutral: 2, promoters: 0, nps: -33.33 },
//   },
// ]
const viajes = [
  {
    encuesta: 'ESCOCIA 2024',
    division: 'FiT',
    scores: { detractors: 1, neutral: 1, promoters: 1, nps: 0 },
  },
  {
    encuesta: 'Encuesta viaje 84',
    division: 'Receptivo',
    scores: { detractors: 2, neutral: 1, promoters: 1, nps: -25 },
  },
  {
    encuesta: 'Augusta 202496659',
    division: 'FiT',
    scores: { detractors: 1, neutral: 2, promoters: 0, nps: -33.33 },
  },
  {
    encuesta: 'PEBBLE BEACH 2024',
    division: 'FiT',
    scores: { detractors: 0, neutral: 0, promoters: 1, nps: 100 },
  },
  {
    encuesta: 'ARGENTINA INVITATIONAL (11VA EDICIÓN)',
    division: 'Viajes Fijos',
    scores: { detractors: 0, neutral: 0, promoters: 1, nps: 100 },
  },
  {
    encuesta: 'PUNTA CANA 2024',
    division: 'FiT',
    scores: { detractors: 1, neutral: 2, promoters: 0, nps: -33.33 },
  },
  {
    encuesta: 'NUEVA ENCUESTA 1',
    division: 'Receptivo',
    scores: { detractors: 3, neutral: 1, promoters: 2, nps: -20 },
  },
  {
    encuesta: 'NUEVA ENCUESTA 2',
    division: 'FiT',
    scores: { detractors: 0, neutral: 4, promoters: 1, nps: 20 },
  },
  {
    encuesta: 'NUEVA ENCUESTA 3',
    division: 'Viajes Fijos',
    scores: { detractors: 2, neutral: 0, promoters: 3, nps: 20 },
  },
  {
    encuesta: 'NUEVA ENCUESTA 4',
    division: 'FiT',
    scores: { detractors: 1, neutral: 3, promoters: 1, nps: 0 },
  },
  {
    encuesta: 'NUEVA ENCUESTA 5',
    division: 'Receptivo',
    scores: { detractors: 4, neutral: 0, promoters: 1, nps: -60 },
  },
]

const chartOptions = computed<ApexOptions>(() => ({
  chart: {
    id: 'vuechart-example',
    stacked: true,
  },
  xaxis: {
    categories: ['Detractores', 'Neutrales', 'Promotores'],
  },
  yaxis: {
    title: {
      text: 'Puntuaciones',
    },
  },
  tooltip: {
    y: {
      formatter: (value: number) => value.toFixed(0),
    },
  },
}))

// const chartSeries = computed(() => [
//   {
//     name: 'ESCOCIA 2024',
//     data: [
//       viajes[0].scores.detractors,
//       viajes[0].scores.neutral,
//       viajes[0].scores.promoters,
//     ],
//   },
//   {
//     name: 'Encuesta viaje 84',
//     data: [
//       viajes[1].scores.detractors,
//       viajes[1].scores.neutral,
//       viajes[1].scores.promoters,
//     ],
//   },
//   {
//     name: 'Augusta 202496659',
//     data: [
//       viajes[2].scores.detractors,
//       viajes[2].scores.neutral,
//       viajes[2].scores.promoters,
//     ],
//   },
//   {
//     name: 'PEBBLE BEACH 2024',
//     data: [
//       viajes[3].scores.detractors,
//       viajes[3].scores.neutral,
//       viajes[3].scores.promoters,
//     ],
//   },
//   {
//     name: 'ARGENTINA INVITATIONAL (11VA EDICIÓN)',
//     data: [
//       viajes[4].scores.detractors,
//       viajes[4].scores.neutral,
//       viajes[4].scores.promoters,
//     ],
//   },
//   {
//     name: 'PUNTA CANA 2024',
//     data: [
//       viajes[5].scores.detractors,
//       viajes[5].scores.neutral,
//       viajes[5].scores.promoters,
//     ],
//   },
// ])
const chartSeries = computed(() => [
  {
    name: 'ESCOCIA 2024',
    data: [
      viajes[0].scores.detractors,
      viajes[0].scores.neutral,
      viajes[0].scores.promoters,
    ],
  },
  {
    name: 'Encuesta viaje 84',
    data: [
      viajes[1].scores.detractors,
      viajes[1].scores.neutral,
      viajes[1].scores.promoters,
    ],
  },
  {
    name: 'Augusta 202496659',
    data: [
      viajes[2].scores.detractors,
      viajes[2].scores.neutral,
      viajes[2].scores.promoters,
    ],
  },
  {
    name: 'PEBBLE BEACH 2024',
    data: [
      viajes[3].scores.detractors,
      viajes[3].scores.neutral,
      viajes[3].scores.promoters,
    ],
  },
  {
    name: 'ARGENTINA INVITATIONAL (11VA EDICIÓN)',
    data: [
      viajes[4].scores.detractors,
      viajes[4].scores.neutral,
      viajes[4].scores.promoters,
    ],
  },
  {
    name: 'PUNTA CANA 2024',
    data: [
      viajes[5].scores.detractors,
      viajes[5].scores.neutral,
      viajes[5].scores.promoters,
    ],
  },
  {
    name: 'NUEVA ENCUESTA 1',
    data: [
      viajes[6].scores.detractors,
      viajes[6].scores.neutral,
      viajes[6].scores.promoters,
    ],
  },
  {
    name: 'NUEVA ENCUESTA 2',
    data: [
      viajes[7].scores.detractors,
      viajes[7].scores.neutral,
      viajes[7].scores.promoters,
    ],
  },
  {
    name: 'NUEVA ENCUESTA 3',
    data: [
      viajes[8].scores.detractors,
      viajes[8].scores.neutral,
      viajes[8].scores.promoters,
    ],
  },
  {
    name: 'NUEVA ENCUESTA 4',
    data: [
      viajes[9].scores.detractors,
      viajes[9].scores.neutral,
      viajes[9].scores.promoters,
    ],
  },
  {
    name: 'NUEVA ENCUESTA 5',
    data: [
      viajes[10].scores.detractors,
      viajes[10].scores.neutral,
      viajes[10].scores.promoters,
    ],
  },
])
</script>
