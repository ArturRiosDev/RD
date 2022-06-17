const items = document.querySelector('.Items');
const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false';

var cryptoObject = [];

const getData = api => {
  /**
   * API JSON response:
   * name
   * image
   * current_price
   * 
   * save this parameters into: cryptoObject
   * */ 
  

   /** code here */ 
   /** use fetch() */ 
   fetch(API)
   .then(res=> res.json())
   .then(res=> cryptoObject = res)

}

var solutionObject = {
    initLoad: () => {
        /** Do Not Change */             
        solutionObject.loadData();
        solutionObject.nextPage();
        solutionObject.searchCryptoByName();
    },
    loadData: async () => {
        /** Do Not Change */      
        await getData(solutionObject.pagination());
    },    
    pagination: () => {
        /** Do Not Change */      
        const limit = 5;    
        const offset = cryptoObject.length > 0 ? cryptoObject.length + limit : 1;    
        return `${API}&per_page=${limit}&page=${offset}`;  
    },
    results: () => {
        /** You need to use label id=results*/  
        /* code here */
        let resultado = document.querySelector('#id')
     
    },    
    articleHTML: (elements) => {        
        /**
         * 1. create "article" element
         * 2. add <img> for 'image' url, <h3> for 'name', <h1> for 'current_price'
         * 3. in 'items' variable appendChild for each article 
         * 
         * example template:
         * 
         * <article>
         *   <img src="...">
         *   <h3>...</h3>
         *   <h1>...</h1> 
         * </article>  
         * 
         */


         /** code here */   
         let articulo = document.createElement('article')

    },
    validatePagination : (callBack) => {     
        if(cryptoObject.length > 25) {      
        alert('Challenge #1 Completed');
        } else {
            /* code here */
        }
    },
    nextPage: () => {         
         /** code here */ 
         /** TIP: call validatePagination */        
    },
    searchCryptoByName: () => {
        /** Challenge #2 */
        /** You need to use input id=filter*/    
    },
    marketCap: () => {
        /** Challenge #3 - Extra Bonus*/
    },
}


console.log("%c Arturo Here!",'background: orange; color: white; font-size:16px');