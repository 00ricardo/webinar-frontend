import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.page.html',
  styleUrls: ['./add-new-book.page.scss'],
})
export class AddNewBookPage implements OnInit {

  categories=["Action", "Fantasy", "Comedy"]

  bookTitle
  bookReleaseDate
  bookAuthor
  bookCategory

  bookObject

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.bookObject);
  }

  selectedCategory(index){
    this.bookObject = this.categories[index]
  }

  AddBook(){
    this.bookObject = (
      {
        title: this.bookTitle,
        author:this.bookAuthor,
        releaseDate:this.bookReleaseDate,
        category:this.bookCategory
      })
      
      this.dismiss();
  }

}
