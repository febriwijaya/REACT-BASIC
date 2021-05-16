import React from 'react';
// Import component Lesson 
import Lesson from './Lesson';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        introduction: "HTML dan CSS digunakan untuk menentukan bagaimana sebuah website ddisusun dan didesign. Ayo pelajari bahasa ini dan langsung membuat halaman situs web!",
      },
      {
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
        introduction: 'Sass adalah sebuah bahasa untuk membuat code CSS lebih gampang dan efisient.',
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        introduction: 'JavaScript aadalah bahasa populer yang dapat digunakan untuk membuat website interaktif dan server backend.',
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        introduction: 'React adalah library JavaScript yang digunakan untuk membuat penampilan website.',
      },
    ];
    
    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, World.</h1>
            <h2>Selamat datang didunia pemrograman!</h2>
          </div>
          <div className='lesson-container'>
            <h3 className='section-title'>Pelajaran</h3>
            {/* Tampilkan component Lesson dan teruskan nilai props-nya */}

            { lessonList.map((lessonItem) => {
              return(
                <Lesson
                name={ lessonItem.name }
                image={ lessonItem.image }
                introduction={ lessonItem.introduction }
                />
              );
              })
            }
          </div>
          <div className="contact-container">
            <h3>Hubungi Kami</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
