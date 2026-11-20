import {ref} from "vue";

export const articles = ref([
    {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?', category: 'ThinkPiece', image: 'src/assets/fruitImages/frozenYoghurt.jpg', },
    {articleID: 2, articleTitle: 'When Life gives you Limes', category: 'Recipe', image: 'src/assets/fruitImages/limes.jpg' },
    {articleID: 3, articleTitle: 'The Comprehensive History Of Figs', category: 'Educational', image: 'src/assets/fruitImages/halvedFig.jpg'
    }]);

let nextID = articles.value.length+1;
export default articles;