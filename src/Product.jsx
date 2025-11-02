import './Product.css';
import Price from './Price.jsx'
function Product({title,idx}){
    let oldPrices = ["12495","11900","3400","1599"]
    let newPrices = ["10621", "10115", "2890", "1359"]
    let description = [["Great design","very good"],["low Latency","Very quick to use"],["Wireless","Fast to use"],["Very quick response","Great User experience"]]
    return (
        <div className="Product">
            <p>{title}</p>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
        </div>
    );
}
export default Product;