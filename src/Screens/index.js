import React, { Component } from 'react';
import Layout from '../Containers/Layout';
import Banner from '../Components/Banner';
 
const banners=[{
    image:"https://i2.wp.com/blackgold.sa/wp-content/uploads/2018/09/quality-banner.jpg?ssl=1",
    title:"This website is dedicated to sell flower products"
},
    {
    image:"https://www.chemiqueadhesives.com/media/mod_zentools/cache/images/quality-8b9f7f80441590d52aae92547560ac6a.jpg",
    title: "New Arrivals" 
    },
    {
    image:"https://wallpaperaccess.com/full/1615355.jpg",
    title:"njhihlhhkhkhjkhjkhkhjhj"
    },
    {
    image:"https://i.pinimg.com/originals/c7/54/68/c75468666a613fd099692f89fdfaa4bf.jpg",
    title:"This website is dedicated to sell flower products"
    }
]

class App extends Component {
    render() {
        return (
            <div>
              <Layout>
              <Banner banners={banners} />
              </Layout>
            </div>
        );
    }
}

export default App;