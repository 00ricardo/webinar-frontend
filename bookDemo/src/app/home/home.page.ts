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
    title: "The Witcher",
    author: "Someone",
    releaseDate: "9-10-19",
    category: "Action"
  },
  {
    title: "Harry Potter",
    author: "Person 2",
    releaseDate: "4-6-14",
    category: "Fantasy"
  }]

  showBookWishList = true;
  title = "Book Wish List"
  button = "Book Collection"

  bookCollection = [{
    title: "Black Tulip",
    author: "Another Person",
    releaseDate: "1-1-19",
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

  buyBook(index){
    this.bookCollection.push(this.bookWishList[index]);
    this.bookWishList.splice(index, 1);
  }
}
