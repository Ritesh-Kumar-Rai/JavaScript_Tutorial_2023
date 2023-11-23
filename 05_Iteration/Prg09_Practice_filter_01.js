// filter()

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // fetch data those genre is History

  const Filtered_genre = books.filter((key) => key.genre === 'History');

//   console.log(Filtered_genre);

  // fetch data those are published after 1980

  const Filtered_publish = books.filter((key)=>{
        return key.publish > 1980;
  });

//   console.log(Filtered_publish);


// fetch data those are published after 1980 and genre is 'history' 

const Filtered_genre_published = books.filter((key)=>{
        return key.publish > 1980 && key.genre === 'History'
});

console.log(Filtered_genre_published);