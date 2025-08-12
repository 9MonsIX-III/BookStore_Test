import React from 'react';
import { Link } from 'react-router-dom'; // Import Link để tạo liên kết

function Books() {
  // Dữ liệu mẫu cho danh sách sách, thêm đường dẫn hình ảnh
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', category: 'Fiction', image: '../../image/book1.jpg' },
    { id: 2, title: 'Book 2', author: 'Author 2', category: 'Non-Fiction', image: '../../image/book2.jpg' },
    { id: 3, title: 'Book 3', author: 'Author 3', category: 'Science', image: null }, // Không có hình ảnh
  ];

  // Danh sách tất cả các thể loại sách
  const categories = [
    'Fiction',
    'Non-Fiction',
    'Science',
    'Fantasy',
    'Mystery',
    'Romance',
    'Thriller',
    'Biography',
    'History',
    'Self-Help',
    'Children',
    'Poetry',
    'Horror',
    'Travel',
    'Cookbook',
  ];

  return (
    <>
      <main>
        <h1>Các thể loại sách</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/categories/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>

        <h1>Danh sách sách bán chạy</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              {book.image && (
                <img
                  src={book.image}
                  alt={`${book.title} cover`}
                  style={{ width: '50px', marginRight: '10px' }}
                />
              )}
              <Link to={`/books/${book.id}`}>{book.title}</Link> - {book.author} ({book.category})
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Books;