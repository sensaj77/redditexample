
/*http://allenfang.github.io/react-bootstrap-table/example*/

//Uzyc gotowego componentu, np. tabelki do wyswietlenia artykułów, który ma już wbudowaną
//paginację , chocazby w ramach property tabelki - pagination={10} , cos takiego.

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class RedditPosts extends Component {
    constructor(props) {
    super(props)
    this.state = {
      posts: this.props.posts
    }
  }
 
  render() {
    console.log("this.state.posts is----->",this.state.posts);
  
    let postsNumber = this.props.posts.length;
    console.log("posts typeof is----->",typeof this.props.posts);

    let pageOnePostsJSX = (<ul>
        {this.state.posts.map((post, i) =>
          <Link to='/articles' key={i}><li className="list-group-item">{post.title}</li></Link>
        )}
      </ul>);
    
    return (
      <div>
        <ul className="list-group">
            {pageOnePostsJSX}
        </ul>
        <ul className="pagination">
            <li><a href="#">1</a></li>
            <li><a href="/#/articles">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="/#/articles">5</a></li>
        </ul>
      </div>
    )
  }
}

RedditPosts.propTypes = {
  posts: PropTypes.array.isRequired
}



/*
var NavigationBackLink = NavigationReact.NavigationBackLink;
var NavigationLink = NavigationReact.NavigationLink;
var RefreshLink = NavigationReact.RefreshLink;
var Menu = React.createClass({
    render: function() {
        return (
            <div>
                <ul id="menu">
                    <li><NavigationLink action="article">Articles</NavigationLink></li>
                    <li><NavigationLink action="book">Books</NavigationLink></li>
                </ul>
                <ul id="categories">
                    <li><NavigationLink action="article" toData={{ category: 'coding' }}>Coding</NavigationLink></li>
                    <li><NavigationLink action="article" toData={{ category: 'design' }}>Design</NavigationLink></li>
                </ul>
            </div>
        );
    }
});
var Articles = React.createClass({
    render: function(){
        var category = this.props.category;
        var articles = getArticles().filter(function name(article) {
            return !category ? true : article.category === category;
        });
        var pages = [];
        for(var i = 0; i < Math.ceil(articles.length / 3); i++){
            pages.push({ page: i + 1 });
        }
        var start = (this.props.page - 1) * 3;
        articles = articles.slice(start, start + 3);
        var articles = articles.map(function (article) {
            return (
                <li>
                    <span>{article.title}</span>
                    <div>By <span>{article.author}</span></div>
                </li>
            );
        });
        var pages = pages.map(function (page) {
            return (
                <RefreshLink toData={{ page: page.page }} includeCurrentData={true}>{page.page}</RefreshLink>
            );
        });
        return (
            <div>
                <ul id="articles">
                    {articles}
                </ul>
                <div id="paging">
                    {pages}
                </div>
            </div>
        );
    }
});
var articleDialog = {
    key: 'article', initial: 'list', states: [
        { key: 'list', route: '{category?}', defaults: { page: 1 } }
    ]
};
var bookDialog = {
    key: 'book', initial: 'list', states: [
        { key: 'list', route: 'books' }
    ]
};
React.render(
    <Menu />,
    document.getElementById('header')
);
Navigation.StateInfoConfig.build([ articleDialog, bookDialog ]);
function showArticles(data){
  React.render(
      <Articles category={data.category} page={data.page} />,
      document.getElementById('content')
  );
};
function showBooks(){
  React.render(
      <div />,
      document.getElementById('content')
  );
};

var articleDialog = Navigation.StateInfoConfig.dialogs.article;
var articleListState = articleDialog.states.list; 
articleListState.navigated = showArticles;
var bookDialog = Navigation.StateInfoConfig.dialogs.book;
var bookListState = bookDialog.states.list; 
bookListState.navigated = showBooks;

Navigation.start();

function getArticles(){
    return [
        { 
            title: 'Designers And Developers: No Longer A House Divided', 
            author: 'Ivana McConnell', 
            category: 'coding' 
        },
        { 
            title: 'A Better Way To Design For Retina In Photoshop', 
            author: 'Murdoch Carpenter', 
            category: 'design' 
        },
        { 
            title: 'Extending In Sass Without Creating A Mess',
            author: 'David Khourshid', 
            category: 'coding' 
        },
        { 
            title: 'Creating A Complete Web App In Foundation For Apps', 
            author: 'Stephen Saucier', 
            category: 'coding' 
        },
        { 
            title: 'Design Principles: Compositional Flow And Rhythm', 
            author: 'Steven Bradley', 
            category: 'design' 
        },
        { 
            title: 'An In-Depth Overview Of Living Style Guide Tools', 
            author: 'Robert Haritonov', 
            category: 'design' 
        },
        { 
            title: 'React To The Future With Isomorphic Apps', 
            author: 'Jonathan Creamer', 
            category: 'coding' 
        },
        { 
            title: 'Web Scraping With Node.js', 
            author: 'Elliot Bonneville', 
            category: 'coding' 
        },
        { 
            title: 'On China\'s Bleeding Edge: Web Design Trends 2015',
            author: 'Kendra Schaefer', 
            category: 'design' 
        }
    ];
}
*/