<script setup>
import { onMounted, ref } from 'vue'
import { watchDebounced } from '@vueuse/core'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Paginator from 'primevue/paginator'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  searchFunction: {
    type: Function,
    required: true,
  },
  rows: {
    type: Number,
    default: 5,
  },
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 10, 20, 50],
  },
  stripedRows: {
    type: Boolean,
    default: true,
  },
  paginator: {
    type: Boolean,
    default: true,
  },
  removableSort: {
    type: Boolean,
    default: true,
  },
  scrollable: {
    type: Boolean,
    default: true,
  },
  scrollHeight: {
    type: String,
    default: '60vh',
  },
  resizableColumns: {
    type: Boolean,
    default: true,
  },
  columnResizeMode: {
    type: String,
    default: 'fit',
  },
  paginatorTemplate: {
    type: String,
    default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  },
  alwaysShowPaginator: {
    type: Boolean,
    default: true,
  },
  showSearch: {
    type: Boolean,
    default: true,
  },
})

const registers = ref([])
const totalRecords = ref(0)
const search = ref('')
const loading = ref(false)
const lastPagination = ref({
  page: 0,
  rows: props.rows,
})

onMounted(() => {
  handleSearch()
})

async function handleSearch() {
  loading.value = true

  const response = await props.searchFunction({
    filter: search.value,
    pagination: lastPagination.value,
  })

  registers.value = response.registers
  totalRecords.value = response.total

  loading.value = false
}

function onPageChange(event) {
  lastPagination.value = event
  handleSearch()
}

watchDebounced(
  search,
  () => {
    handleSearch()
  },
  { debounce: 300 },
)

defineExpose({
  handleSearch,
})
</script>

<template>
  <DataTable
    class="custom-datatable"
    :loading="loading"
    :value="registers"
    :stripedRows="props.stripedRows"
    :removableSort="props.removableSort"
    :scrollable="props.scrollable"
    :scrollHeight="props.scrollHeight"
    :resizableColumns="props.resizableColumns"
    :columnResizeMode="props.columnResizeMode"
  >
    <template #header v-if="title || showSearch">
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <!-- Title -->
        <span v-if="title" class="text-xl font-bold">{{ title }}</span>

        <div class="flex flex-wrap gap-2">
          <!-- Header actions -->
          <slot name="header-actions"></slot>

          <!-- Search -->
          <InputGroup v-if="showSearch" class="w-auto">
            <InputGroupAddon>
              <i class="pi pi-search"></i>
            </InputGroupAddon>
            <InputText v-model="search" placeholder="Buscar..." />
          </InputGroup>
        </div>
      </div>
    </template>

    <template #empty>
      <div class="text-center">
        <span>No hay registros</span>
      </div>
    </template>

    <template #loading>
      <div class="text-center">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      </div>
    </template>

    <slot name="columns"></slot>
    <slot name="row-actions"></slot>
  </DataTable>
  <Paginator
    v-if="props.paginator"
    :totalRecords="totalRecords"
    :rows="props.rows"
    :rowsPerPageOptions="props.rowsPerPageOptions"
    :template="props.paginatorTemplate"
    :currentPageReportTemplate="props.currentPageReportTemplate"
    @page="onPageChange"
  ></Paginator>
</template>

<style scoped lang="scss">
.custom-datatable {
  :deep(.p-datatable-header) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: var(--p-card-body-padding);
  }
}
</style>
