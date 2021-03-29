import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Blog } from './Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getBlog() {
    return this.firestore
        .collection('blogs')
        .get()
        .pipe(
            map(
                querySnaphot => {
                    return querySnaphot.docs
                        .map(
                            doc => {
                                return {
                                    id: doc.id,
                                    // ...doc.data()
                                } as Blog
                            }
                        )
                }
            )
        );
}
}
