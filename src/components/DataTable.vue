<script setup>
import { ref } from 'vue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Array,
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
    default:
      'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown',
  },
  currentPageReportTemplate: {
    type: String,
    default: '{first} a {last} de {totalRecords}',
  },
  showSearch: {
    type: Boolean,
    default: true,
  },
})

const search = ref('')
</script>

<template>
  <DataTable
    class="custom-datatable"
    :value="props.value"
    :rows="props.rows"
    :rowsPerPageOptions="props.rowsPerPageOptions"
    :stripedRows="props.stripedRows"
    :paginator="props.paginator"
    :removableSort="props.removableSort"
    :scrollable="props.scrollable"
    :scrollHeight="props.scrollHeight"
    :resizableColumns="props.resizableColumns"
    :columnResizeMode="props.columnResizeMode"
    :paginatorTemplate="props.paginatorTemplate"
    :currentPageReportTemplate="props.currentPageReportTemplate"
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

    <slot name="columns"></slot>
    <slot name="row-actions"></slot>
  </DataTable>
</template>

<style scoped lang="scss">
.custom-datatable {
  :deep(.p-datatable-header) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
}
</style>
