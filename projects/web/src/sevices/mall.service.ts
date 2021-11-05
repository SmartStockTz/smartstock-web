import {Injectable} from '@angular/core';
import {database} from 'bfast';
import {MallModel} from '../models/mall.model';

@Injectable({
  providedIn: 'root'
})
export class MallService {
  constructor() {
  }

  async shops(size: number, skip: number): Promise<MallModel[]> {
    return database().table('_User').aggregate().stage({
      $match: {
        role: 'admin'
      }
    }).stage({
      $sort: {
        updatedAt: -1
      }
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
      $unset: ['shop.settings', 'shop.projectUrlId', 'shop.ecommerce.social']
    }).stage({
      $skip: skip
    }).stage({
      $limit: size
    }).find({useMasterKey: true});
  }
}
