import {Injectable} from '@angular/core';
import {database, init} from 'bfast';
import {MallModel} from '../models/mall.model';
import {getDaasAddress, getFaasAddress, StockModel} from '@smartstocktz/core-libs';

@Injectable({
  providedIn: 'root'
})
export class MallService {
  constructor() {
  }

  async shops(size: number, skip: number, q: string = ''): Promise<MallModel[]> {
    return database().table('_User').aggregate().stage({
      $match: {
        role: 'admin',
        $or: [
          {
            businessName: {
              $regex: q,
              $options: 'i'
            },
          },
          {
            'shops.businessName': {
              $regex: q,
              $options: 'i'
            }
          }
        ]
      }
    }).stage({
      $sort: {
        updatedAt: -1
      }
    }).stage({
      $skip: skip
    }).stage({
      $limit: size
    }).stage({
      $group: {
        _id: '$_id',
        shop: {
          $push: {
            businessName: '$businessName',
            projectId: '$projectId',
            country: '$country',
            region: '$region',
            applicationId: '$applicationId',
            settings: '$settings',
            ecommerce: {
              logo: '$ecommerce.logo',
              cover: '$ecommerce.cover',
              about: '$ecommerce.about',
            }
          }
        },
        shops: {$first: '$shops'}
      }
    }).stage({
      $project: {
        uid: '$_id',
        shop: {
          $concatArrays: ['$shops', '$shop']
        }
      }
    }).stage({
      $unwind: {
        path: '$shop',
      }
    }).stage({
      $unset: ['shop.projectUrlId', 'shop.ecommerce.social']
    }).find({useMasterKey: true});
  }

  async previewProducts(mall: MallModel): Promise<StockModel[]> {
    init({
      applicationId: mall.shop.applicationId,
      projectId: mall.shop.projectId,
      // @ts-ignore
      databaseURL: getDaasAddress(mall.shop),
      // @ts-ignore
      functionsURL: getFaasAddress(mall.shop)
    }, mall.shop.projectId);
    return database(mall.shop.projectId).table('stocks').query().size(6).find();
  }
}
