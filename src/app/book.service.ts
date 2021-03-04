import { Injectable } from '@angular/core';
import { Book } from './model/book'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiRoot = "http://localhost:8080/Project_aos/Rest/Book/getall"

  constructor(private http: HttpClient) { }

  public getall() {
    return this.http.get(this.apiRoot);
  }

  getBook(id) {
    return this.http.get(`${this.apiRoot}/${id}`);
  }

  addBook(data) {
    return this.http.post(this.apiRoot, data);
  }

  updateBook(id, data) {
    return this.http.put(`${this.apiRoot}/${id}`, data);
  }

  deleteBook(id) {
    return this.http.delete(`${this.apiRoot}/${id}`);
  }

  findByTitle(title) {
    return this.http.get(`${this.apiRoot}?title=${title}`);
  }
}
