<template>
    <div id="tree" ref="tree"></div>
</template>

<script setup>
import { get } from '@/stores/https'
import { ref, onMounted } from 'vue'
import OrgChart from '@balkangraph/orgchart.js'

const dataChart = ref([])

const mapData = (data) => {
    return data.map((item) => ({
        id: item.maPhongBan,
        pid: item.maPhongBanCapTren,
        tenPhongBan: item.tenPhongBan,
        truongPhong: item.truongPhong,
        soLuongNhanVien: item.soLuongNhanVien,
        anhTruongPhong: item.anhTruongPhong,
    }))
}

const tree = ref(null)

onMounted(async () => {
    await getAllDataChart()
    renderChart()
})

const getAllDataChart = async () => {
    const response = await get('/api/v1/departments/orgchart')
    console.log(response.data)
    dataChart.value = response.data
}

const renderChart = () => {
    const chart = new OrgChart(tree.value, {
        nodes: mapData(dataChart.value),
        nodeBinding: {
            field_0: 'tenPhongBan',
            field_1: 'truongPhong',
            field_2: 'soLuongNhanVien',
            img_0: 'anhTruongPhong',
        },
        zoom: { speed: 30, smooth: 5 },
        idField: 'maPhongBan',
        pidField: 'maPhongBanCapTren',
        nodeWidth: 180,
        nodeHeight: 80,
        enableSearch: true,
        searchFields: ['tenPhongBan'],
        enableDragDrop: true,
        movable: OrgChart.movable.node,
        layout: OrgChart.normal,
        template: 'ula',
        editForm: {
            generateElementsFromFields: false,
            elements: [
                { type: 'textbox', label: 'Tên phòng ban', binding: 'tenPhongBan' },
                { type: 'textbox', label: 'Trưởng phòng', binding: 'truongPhong' },
                { type: 'textbox', label: 'Số nhân viên', binding: 'soLuongNhanVien' },
            ],
            photoBinding: 'anhTruongPhong',
            addMore: null,
            buttons: {
                edit: null,
                share: null,
                pdf: {
                    icon: OrgChart.icon.pdf(24, 24, '#fff'),
                    text: 'Save as PDF',
                },
                remove: null,
            },
        },
    })

    chart.onUpdated(function () {
        console.log('Nodes updated')
    })
}
</script>

<style>
</style>