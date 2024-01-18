import { ref, computed, onMounted } from 'vue';

export default function usePagination(filteredSearchResults) {
    const pageSize = 5;
    const maxPages = computed(() => Math.round(filteredSearchResults.value.length / pageSize));
    const currentPage = ref(1);

    const nextPage = () => {
        if (currentPage.value === maxPages.value) return;
        currentPage.value += 1;
    };
    const prevPage = () => {
        if (currentPage.value === 1) return;
        currentPage.value -= 1;
    };

    onMounted(() => console.log('Mounted: useSearch'));

    const currentStartIndex = computed(() => (currentPage.value - 1) * pageSize + 1);

    const currentEndIndex = computed(() => {
        const end = currentStartIndex.value - 1 + pageSize;
        return end > filteredSearchResults.value.length ? filteredSearchResults.value.length : end;
    });

    const pagedResults = computed(() => {
        const startIndex = currentStartIndex.value - 1;
        const endIndex = currentEndIndex.value;
        return filteredSearchResults.value.slice(startIndex, endIndex);
    });

    return {
        currentPage,
        nextPage,
        prevPage,
        pageSize,
        currentStartIndex,
        currentEndIndex,
        pagedResults,
    };
}
