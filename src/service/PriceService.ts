import { makeAutoObservable } from "mobx";
import PriceVO from "../model/singlePrice/PriceVO";

class PriceService {
  constructor() {
    // 使得 priceList 变得可以在各个 view 进行使用
    makeAutoObservable(this);
  }
  priceList: PriceVO[] = [
    {price:10},
    {price:20}
  ]
  /**
   * 添加一条 price 进入 priceList
   * @param price - 一条 price
   */
  addPrice(price:number) {
    this.priceList.push(new PriceVO(price))
  }
}
export default PriceService;
