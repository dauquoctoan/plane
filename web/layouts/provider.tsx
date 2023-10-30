import React, { Children } from "react";

export default class Page extends React.Component {
    render() {
      return <p></p>
    }
}

class PageA{
    getData(url:string){
        return 'data'
    }
}