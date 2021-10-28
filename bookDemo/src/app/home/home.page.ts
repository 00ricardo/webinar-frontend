import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewBookPage } from '../add-new-book/add-new-book.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  bookWishList = [{
    title: "How the Grinch Stole Christmas!",
    author: "Dr. Seuss",
    releaseDate: "10-12-1957",
    category: "Fantasy"
  },
  {
    title: "The Tower of the Swallow",
    author: "Andrzej Sapkowski",
    releaseDate: "5-17-2016",
    category: "Action"
  }]

  showBookWishList = true;
  title = "Book Wish List"
  button = "Book Collection"

  bookCollection = [{
    title: "The Complete Calvin and Hobbes",
    author: "Bill Watterson",
    releaseDate: "9-6-2005",
    category: "Comedy"
  }]

  constructor(public modalCtrl:ModalController) {}

  ngOnInit() {
  }

  async AddBook(){
    const modal = await this.modalCtrl.create({
      component: AddNewBookPage
    })

    modal.onDidDismiss().then(newBookObj => {
      console.log(newBookObj.data);
      this.bookWishList.push(newBookObj.data)
    })
    return await modal.present();
  }

  goToBookCollection(){
    this.showBookWishList = !this.showBookWishList;

    if(!this.showBookWishList){
      this.title = "Book Collection"
      this.button = "Book Wish List"
    } else {
      this.title = "Book Wish List"
      this.button = "Book Collection"
    }
  }

  removeBook(index){
    if(this.showBookWishList){
      this.bookWishList.splice(index, 1)
    }
    else {
      this.bookCollection.splice(index, 1)
    }
    
  }

  bookToCollection(index){
    this.bookCollection.push(this.bookWishList[index]);
    this.bookWishList.splice(index, 1);
  }
}
