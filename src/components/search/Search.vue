<template>
    <div>
        <div>
            <input placeholder="Введите поисковый запрос" @input="search($event.target.value)" />
        </div>
        <div class="filters">
            <div><button @click="applyFilters({ type: 'heads' })" class="btn">Фильтр для голов</button></div>
            <div><button @click="applyFilters({ type: 'arms' })" class="btn">Фильтр для рук</button></div>
            <div><button @click="applyFilters({ type: 'torsos' })" class="btn">Фильтр для корпуса</button></div>
            <div><button @click="applyFilters({ type: 'bases' })" class="btn">Фильтр для основания</button></div>
            <div><button @click="clearFilters()" class="btn">Очистить фильтр</button></div>
            <div>Фильтры: {{ filters }}</div>
        </div>
    </div>
    <div>
        <ul>
            <li v-for="(result, index) in pagedResults" :key="index">
                <div><img :src="result.src" /></div>
                <div>
                    <div class="title">{{ result.title }}</div>
                    <div>{{ result.description }}</div>
                    <div>Тип: {{ result.type.substring(0, result.type.length - 1) }}</div>
                </div>
            </li>
        </ul>
    </div>
    <div>
        <button @click="prevPage()" class="button-link">Предыдущая страница</button>
        Отображение от {{ currentStartIndex }} до {{ currentEndIndex }} из {{ resultCount }} результатов
        <button @click="nextPage()" class="button-link">Следующая страница</button>
    </div>
    <div>{{ title }}</div>
</template>

<script>
import { computed } from 'vue';
import useSearch from './useSearch';
import useFilters from './useFilters';
import usePagination from './usePagination';

export default {
    setup(props) {
        const { searchResults, search } = useSearch(false);
        const { filters, applyFilters, clearFilters, filteredResults } = useFilters(searchResults);
        const { currentPage, nextPage, prevPage, currentStartIndex, currentEndIndex, pagedResults } =
            usePagination(filteredResults);
        const resultCount = computed(() => filteredResults.value.length);
        console.log(props);
        return {
            pagedResults,
            search,
            filters,
            applyFilters,
            clearFilters,
            currentPage,
            nextPage,
            prevPage,
            currentStartIndex,
            currentEndIndex,
            resultCount,
        };
    },
};
</script>
<style scoped>
input {
    font-size: 20px;
    padding: 8px;
    width: 80%;
}
img {
    width: 50px;
    margin-right: 10px;
}
tr {
    margin-bottom: 5px;
}
td,
th {
    text-align: left;
}
ul {
    list-style-type: none;
}
li {
    display: flex;
    margin-bottom: 20px;
}
.title {
    font-weight: bold;
}
.button-link {
    background: none !important;
    border: none;
    padding: 0 !important;
    text-decoration: underline;
    cursor: pointer;
    color: #1e87ba;
}
.filters {
    margin: 20px 0;
    display: flex;
    align-items: center;
}
.filters > * {
    margin-right: 10px;
}
.btn {
    padding: 5px;
}
</style>
