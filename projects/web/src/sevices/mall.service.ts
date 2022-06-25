import { Injectable } from "@angular/core";
import { database, functions, init } from "bfast";
import { MallModel } from "../models/mall.model";
import { getDaasAddress, getFaasAddress, StockModel } from "smartstock-core";
import { MallProduct } from "../models/mall-product";

@Injectable({
  providedIn: "root"
})
export class MallService {
  constructor() {}

  async shops(
    size: number,
    skip: number,
    q: string = ""
  ): Promise<MallModel[]> {
    return functions().request("/mall/shops").get({
      params: {
        size,
        skip,
        q
      }
    });
  }

  async previewProducts(mall: MallModel): Promise<StockModel[]> {
    init(
      {
        applicationId: mall.shop.applicationId,
        projectId: mall.shop.projectId,
        // @ts-ignore
        databaseURL: getDaasAddress(mall.shop),
        // @ts-ignore
        functionsURL: getFaasAddress(mall.shop),
        adapters: {
          auth: "DEFAULT",
          cache: "DEFAULT",
          http: "DEFAULT"
        }
      },
      mall.shop.projectId
    );
    return database(mall.shop.projectId).table("stocks").query().size(6).find();
  }

  async products(
    size: number,
    skip: number,
    q: string
  ): Promise<MallProduct[]> {
    return functions().request("/mall/products").get({
      params: {
        size,
        skip,
        q
      }
    });
  }
}
