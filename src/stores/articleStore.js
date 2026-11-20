import { ref, computed, readonly } from 'vue'
import articles from './data/articles.js'

const articles =ref(articles.map(item => ({...item})))
let nextId = Math.max(0, ...articles.value.map(item => item.id)) +1

function saveArticle(id, rawArticleTitle, rawArticleCategory){
    const articleTitle = rawArticleTitle.trim();
    const category = rawArticleCategory.trim();

    if(!articleTitle) return 'Please enter a titile for your Article'
    if (articleTitle.length>120) return 'Please use 120 characters or less for Article Titles'


}
