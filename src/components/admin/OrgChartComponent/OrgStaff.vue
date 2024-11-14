<template>
    <div id="tree" ref="tree"></div>
</template>

<script setup>
import { get } from '@/stores/https'
import { ref, onMounted } from 'vue'
import OrgChart from '@balkangraph/orgchart.js'

const dataChart = ref([])

const tree = ref(null)

onMounted(async () => {
    await getAllDataChart()
    renderChart()
})
const mapData = (data) => {
    return data.map((item) => {
        const mappedItem = {
            id: item.maNhanVien,
            tenNhanVien: item.hoTen,
            pid: item.quanLy,
            quanLy: item.tenTruongPhong,
            hinhAnh: item.hinhAnh,
            tenPhongBan: item.tenPhongBan,
            tenChucVu: item.tenChucVu,
        }

        // Nếu không có quản lý (quanLy === null), thêm trường tag với giá trị "manager"
        if (item.quanLy === null) {
            mappedItem.tags = ['Management']
        }

        return mappedItem
    })
}

const getAllDataChart = async () => {
    const response = await get('/api/v1/employees/orgchart')
    dataChart.value = response.data
}

const renderChart = () => {
    OrgChart.templates.isla.field_2 = `
        <text data-width="70" data-text-overflow="ellipsis" style="font-size: 10px; color: red;" x="145" y="35" text-anchor="middle">
            {val}
        </text>`
    const chart = new OrgChart(tree.value, {
        nodes: mapData(dataChart.value),
        nodeBinding: {
            field_0: 'tenNhanVien',
            field_1: 'tenPhongBan',
            field_2: 'tenChucVu',
            img_0: 'hinhAnh',
        },
        tags: {
            Management: {
                template: 'rony',
            },
        },  
        zoom: { speed: 30, smooth: 5 },
        nodeWidth: 180,
        nodeHeight: 80,
        enableSearch: true,
        searchFields: ['tenNhanVien'],
        enableDragDrop: true,
        movable: OrgChart.movable.node,
        layout: OrgChart.normal,
        template: 'isla',
        editForm: {
            generateElementsFromFields: false,
            elements: [
                { type: 'textbox', label: 'Tên nhân viên', binding: 'tenNhanVien' },
                { type: 'textbox', label: 'Tên quản lý', binding: 'quanLy' },
                { type: 'textbox', label: 'Tên phòng ban', binding: 'tenPhongBan' },
                { type: 'textbox', label: 'Chức vụ', binding: 'tenChucVu' },
            ],
            photoBinding: 'hinhAnh',
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