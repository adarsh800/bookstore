import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[]=[
    {
      id: 1,
      title: "Harry Potter and the deathly hallows",
      author: "J.K. Rolling",
      rating: 3.9,
    },
    {
      id: 2,
      title: "Harry Potter and the chamber of secrets",
      author: "J.K. Rolling",
      rating: 4.2,
    },
  ];


  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      id: this.books.length+1,
      ...createBookDto,
      
    };
    
    this.books.push(newBook);
    
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
