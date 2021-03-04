import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books;
  //searchString = "";
  constructor (private bookService: BookService) {}

  onClickImage(book) {
    book.previewMode = !book.previewMode;
  }

  ngOnInit() {
    this.retrieveBooks();
  }

 // onSubmit() {
//   this.retrieveBooks()
 // }

 retrieveBooks() {
    this.bookService.getall()
      .subscribe(
        data => {
          this.books =data
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
